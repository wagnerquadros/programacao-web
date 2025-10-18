// src/api/postsApi.js
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

const colRef = collection(db, "posts");

// Ouvir lista em tempo real (Home)
export function listenPosts(callback) {
  const q = query(colRef, orderBy("createdAt", "desc"));
  const unsub = onSnapshot(q, (snap) => {
    const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(items);
  });
  return unsub;
}

// Obter 1 post (se preferir buscar individualmente)
export async function fetchPost(id) {
  const ref = doc(db, "posts", id);
  const d = await getDoc(ref);
  if (!d.exists()) return null;
  return { id: d.id, ...d.data() };
}

export async function createPost({ titulo, conteudo, data, categorias = [] }) {
  const ref = await addDoc(colRef, {
    titulo,
    conteudo,
    data, // "YYYY-MM-DD" vindo do seu formulário
    categorias, // array de strings
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updatePost(id, { titulo, conteudo, data, categorias }) {
  const ref = doc(db, "posts", id);
  const payload = { updatedAt: serverTimestamp() };
  if (titulo !== undefined) payload.titulo = titulo;
  if (conteudo !== undefined) payload.conteudo = conteudo;
  if (data !== undefined) payload.data = data;
  if (categorias !== undefined) payload.categorias = categorias;
  await updateDoc(ref, payload);
}

export async function deletePost(id) {
  const ref = doc(db, "posts", id);
  await deleteDoc(ref);
}
