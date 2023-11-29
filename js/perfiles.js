import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '..\\css\\perfil.css';
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
<div class="contenedor">`;
// Get a list of cities from your database
const getProfile = async (db) => {
  const profiles = collection(db, 'perfil');
  const listProfiles = await getDocs(profiles);
  const profile = listProfiles.docs.map(doc => doc.data());
  return profile;
}
getProfile(db).then((resultado) => {
  resultado.map((perfil) => {
    card += `<div class="card" style="width: 18rem;">
              <img src="${perfil.profilepic}" class="card-img-top" alt="..." >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">${perfil.nombre}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
        </div>`;
  })
  document.querySelector('#app').innerHTML = `
     ${card}
  </div>
</main>
`;
}).catch((error) => {
  console.error("Error al obtener datos:", error);
});

