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
  
// Get a list of cities from your database
async function getProfile(db) {
    const profiles = collection(db, 'perfil');
    const listProfiles = await getDocs(profiles);
    const profile = listProfiles.docs.map(doc => doc.data());
    return profile;
  }
  
  const agregarProfile = async(db, nombre, telefono, correo, github, linkedin, profilepic, profileproject) => {
    try {
      const docRef = await addDoc(collection(db, "perfil"), {
        nombre: nombre,
        telefono: telefono,
        corroe: correo,
        github: github,
        linkedin: linkedin,
        profilepic: profilepic,
        profileproject: profileproject,
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se agrego exitosamente",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (e) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Error al guardar, verificar el formulario",
            showConfirmButton: false,
            timer: 1500
          });
    }
  }
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{12,16}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8}$/, // 7 a 14 numeros.
    github: /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/,
    linkedin: /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/,
    profilepic: /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/,
    profileproject:/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
}
const campos = {
	nombre: false,
	correo: false,
	telefono: false,
    github: false,
    linkedin: false,
    profilepic: false,
    profileproject: false
}
const validarFormulario = (e) => {
    switch (e.target.name){
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case 'correo':
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case 'github':
            validarCampo(expresiones.github, e.target, 'github');
        break;
        case 'linkedin':
            validarCampo(expresiones.linkedin, e.target, 'linkedin');
        break;
        case 'profilepic':
            validarCampo(expresiones.profilepic, e.target, 'profilepic');
        break;
        case 'profileproject':
            validarCampo(expresiones.profileproject, e.target, 'profileproject');
        break;
    }
}
const validarCampo = (expresiones, input, campo) => {
    if(expresiones.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-xmark");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-check");
        document.querySelector(`#grupo__${campo} i`).style.color = "#0ac100";
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove(".formulario__input-error-activo");
        campos[campo] = true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-xmark");
        document.querySelector(`#grupo__${campo} i`).style.color = "#f01919";
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-check");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add(".formulario__input-error-activo");
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
const agregar = () => {
    if( campos.nombre && campos.correo && campos.telefono && campos.github && campos.linkedin && campos.profilepic && campos.profileproject ){
        let nombre = document.querySelector("#nombre").value;
        let correo = document.querySelector("#correo").value;
        let telefono = document.querySelector("#telefono").value;
        let github = document.querySelector("#github").value;
        let linkedin = document.querySelector("#linkedin").value;
        let profilepic = document.querySelector("#profilepic").value;
        let profileproject = document.querySelector("#profileproject").value;
        agregarProfile(db, nombre, telefono, correo, github, linkedin, profilepic, profileproject);
        getProfile(db);
        formulario.reset();
        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(() => {
            document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
        }, 5000);
        document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
            icono.classList.remove("formulario__grupo-correcto");
        });
        document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-exito-activo");
    }else{
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-exito-activo");
    }
}
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregar();
});