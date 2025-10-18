// src/auth.js
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "./firebase";

// Mantém o usuário logado mesmo após fechar o navegador
setPersistence(auth, browserLocalPersistence).catch(console.error);

const provider = new GoogleAuthProvider();
// Opcional: pedir seleção de conta sempre
// provider.setCustomParameters({ prompt: "select_account" });

export async function loginWithGoogle({ useRedirect = false } = {}) {
  if (useRedirect) {
    // Bom para mobile (bloqueadores de pop-up)
    return signInWithRedirect(auth, provider);
  }
  return signInWithPopup(auth, provider);
}

export function logout() {
  return signOut(auth);
}

// Listener de mudanças no usuário (login/logout)
export function onUserChanged(callback) {
  return onAuthStateChanged(auth, (user) => {
    // user é null se deslogado
    callback(user);
  });
}
