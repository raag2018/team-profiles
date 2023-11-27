import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { initializeApp } from 'firebase/app';
import sweetAlert from 'sweet-alert';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
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
