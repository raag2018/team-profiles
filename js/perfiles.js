import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '..\\css\\perfil.css';
import '..\\css\\perfiles.css';
import Swal from 'sweetalert2';
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

let card = `<main>
<div class="contenedor  overflow-hidden text-cemter justify-content-center">
<div class='row'>`;
// Get a list of cities from your database
const getProfile = async(db) => {
    const profiles = collection(db, 'perfil');
    const listProfiles = await getDocs(profiles);
    const profile = listProfiles.docs.map(doc => doc.data());
    return profile;
}
getProfile(db).then((resultado) => {
    resultado.map((perfil) => {
        console.log(perfil);
        card += `<div class='col-sm-3 my-2 mb-3'> 
            <div class="contenedor-2 card mb- border-info " >
              <img src="${perfil.profilepic}" class="card-img-top" alt="imagen de perfil" >
              <div class="card-body text-white">
                <h5 class="card-title">Información</h5>
                  <p class="card-text">${perfil.nombre.toUpperCase()}</p>
                <a href="perfil.html?p=${perfil.correo}" class="btn btn-primary">Ver Perfil</a>
              </div>
            </div>
        </div>`;
    })
    document.querySelector('#app').innerHTML = `
     ${card}
     </div>
  </div>
</main>
`;
}).catch((error) => {
    console.error("Error al obtener datos:", error);
});


// esto va en la linea 32 solo la baje para ver como quedaria con imagen
// ${perfil.profilepic}