import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const firebaseConfig = { }; // Modifique a variavel antes de rodar o aplicativo

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);  

const contatosCollection = collection(db, 'contatos');

const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const signin = (email, password) => signInWithEmailAndPassword(auth, email, password);
const logout = () => signOut(auth);

const buscarContatos = async () => getDataInCollection(contatosCollection, where('userId', '==', auth.currentUser.uid));
const criarContato = async (nome, email, numero) => {await addDoc(contatosCollection, {nome, email, numero, userId: auth.currentUser.uid});}
const deletarContato = async id => await deleteDoc(doc(contatosCollection, id));
const editarContato = async (id, contatoAtualizado) => {
  const contatoDoc = doc(contatosCollection, id);
  await setDoc(contatoDoc, contatoAtualizado);
}

const getDataInCollection = async (collection, fn) => extrairData(await getDocs(query(collection, fn)));

const extrairData = (snapShot) => snapShot.docs.map(doc =>  {  
  let data = {};
  Object.keys(doc.data()).forEach(key => {
    data[key] = doc.data()[key];
  })
  data.id = doc.id;
  return data;
});

export {createUser, signin, auth, criarContato, buscarContatos, logout, deletarContato, editarContato}
