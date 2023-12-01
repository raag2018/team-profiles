import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '..\\css\\perfil.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyCPgwUbP0CEFFsvhwwAiEb6DPYWbTWd3tE",
    authDomain: "team-profile-bb57f.firebaseapp.com",
    projectId: "team-profile-bb57f",
    storageBucket: "team-profile-bb57f.appspot.com",
    messagingSenderId: "263789061532",
    appId: "1:263789061532:web:baecfd835539e4192c9459"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let html = `<main>
                <div class="contenedor">
                    <section class="tarjeta">`;
// Get a list of cities from your database
const getProfile = async(db) => {
    const profiles = collection(db, 'perfil');
    const listProfiles = await getDocs(profiles);
    const profile = listProfiles.docs.map(doc => doc.data());
    return profile;
}
const getUrlParameter = (sParam) => {
	let sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split("&"),
	sPareameterName,
	i;
	for(i=0;i<sURLVariables.length; i++){
		sPareameterName = sURLVariables[i].split("=");
		if(sPareameterName[0] === sParam){
			return sPareameterName[1] === undefined ? true : sPareameterName[1];
		}
	}
}
getProfile(db).then((resultado) => {
    resultado.map((perfil) => {
        let correo = getUrlParameter("p");
        if(perfil.correo === correo){
            html += `
                    <section class="slider_banner">
                        <div class="banner" id="banner">
                            <img src="${perfil.profileproject}" alt="" class="slide active">
                        </div>
                    </section>
                    <section class="slider_info">
                        <section class="informacion" id="informacion">
                            <article id="info">
                                <div class="slide active">
                                    <h1 class="nombre">${perfil.nombre}</h1>
                                    <h2 class="subtitulo">Profesion</h2>
                                    <p class="texto">${perfil.mensaje}</p>
                                </div>
                            </article>
                            <section class="redes-sociales">
                                <a href="${perfil.github}" class="github" target='_blank'><span><i class="fa-brands fa-github "></i></span></a>
                                <a href="${perfil.linkedin}" class="linkedin" target='_blank'><span><i class="fa-brands fa-linkedin "></i></span></a>
                            </section>
                        </section>
                    </section>
                </section>
                    `;
        }
    })
    document.querySelector('#app').innerHTML = `
     ${html}
     </div>
  </div>
</main>
`;
}).catch((error) => {
    console.error("Error al obtener datos:", error);
});
document.querySelector('#app').innerHTML = `
    </div>
</main>
`;