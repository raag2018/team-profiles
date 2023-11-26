import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
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
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Nombre completo</div>
</div>
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Numero de telefono</label>
    <input type="number" class="form-control" id="telefono">
</div>
<button  class="btn btn-primary" id="btnGuardar">Guardar</button>
</div>
`
document.querySelector("#btnGuardar").addEventListener("click", btnGuardar);
