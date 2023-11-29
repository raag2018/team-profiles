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

    let perfiles =[]
// Get a list of cities from your database
async function getProfile(db) {
    const profiles = collection(db, 'perfil');
    const listProfiles = await getDocs(profiles);
    listProfiles.docs.map(doc => perfiles.push (doc.data()));
  } 
  


  getProfile(db)
  let card = ``
  const listarperfiles =()=> {
    perfiles.map (
        (
            perfil
        )=>{
           console.log(perfil)
            card  += `<div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">${perfil.nombre}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`
        }
    )
  }
  console.log(perfiles)

listarperfiles()
document.querySelector('#app').innerHTML = `
<main>
<div class="contenedor">
${card}
</div>

</main>
`;