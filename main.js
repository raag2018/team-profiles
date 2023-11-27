import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { initializeApp } from 'firebase/app';
import sweetAlert from 'sweet-alert';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyA7UJ3WpXgTTByMdgaE6y2EF9UlgWPMoC8",
  authDomain: "profiles-3b5b7.firebaseapp.com",
  projectId: "profiles-3b5b7",
  storageBucket: "profiles-3b5b7.appspot.com",
  messagingSenderId: "717350139105",
  appId: "1:717350139105:web:9907cc2294f716fb8c73a0"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getProfile(db) {
  const profiles = collection(db, 'profile');
  const listProfiles = await getDocs(profiles);
  const profile = listProfiles.docs.map(doc => doc.data());
  console.log(profile);
  return profile;
}
getProfile(db);
const agregarProfile = async(db, nombre, telefono) => {
  try {
    const docRef = await addDoc(collection(db, "profile"), {
      nombre: nombre,
      telefono: telefono,
    });
    console.log("se agrego correctamente: ");
    getProfile(db);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
const btnGuardar = () => {
  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  console.log("ok");
  agregarProfile(db, nombre, telefono);
}
document.querySelector('#app').innerHTML = `
<div class="container mt-2">

</div>
`;
