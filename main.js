import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '.\\css\\main.css';
import { initializeApp } from 'firebase/app';
import sweetAlert from 'sweet-alert';
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
  console.log(profile);
  return profile;
}
getProfile(db);

document.querySelector('#app').innerHTML = `
<div class="container mt-2">

</div>
`;
