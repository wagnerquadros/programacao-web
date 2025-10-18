import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ViewPost from "./pages/ViewPost.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";

import {
  listenPosts,
  createPost,
  updatePost as updatePostApi,
  deletePost as deletePostApi,
} from "./api/postsApi";

import { onUserChanged, loginWithGoogle, logout } from "./auth";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Posts em tempo real
  useEffect(() => {
    const unsub = listenPosts((items) => {
      setPosts(items);
      setLoadingPosts(false);
    });
    return () => unsub();
  }, []);

  // Sessão do usuário
  useEffect(() => {
    const unsub = onUserChanged(setUser);
    return () => unsub();
  }, []);

  async function addPost(data) {
    // Se quiser exigir login para criar:
    if (!user) {
      alert("Faça login para criar posts.");
      return;
    }
    // opcional: incluir dono do post
    await createPost({
      ...data,
      ownerUid: user.uid,
      ownerName: user.displayName || user.email || "Usuário",
    });
    navigate("/");
  }

  async function updatePost(id, data) {
    if (!user) {
      alert("Faça login para editar posts.");
      return;
    }
    await updatePostApi(id, data);
    navigate("/");
  }

  async function deletePost(id) {
    if (!user) {
      alert("Faça login para excluir posts.");
      return;
    }
    if (!confirm("Tem certeza que deseja excluir este post?")) return;
    await deletePostApi(id);
    navigate("/");
  }

  if (loadingPosts) {
    return (
      <p className="meta" style={{ padding: 16 }}>
        Carregando...
      </p>
    );
  }

  return (
    <>
      {/* Barra simples de usuário */}
      <div className="container" style={{ paddingTop: 12 }}>
        <div className="header">
          <div />
          <div>
            {user ? (
              <>
                <span className="meta" style={{ marginRight: 10 }}>
                  Olá, {user.displayName || user.email}
                </span>
                <button className="btn btn-danger" onClick={logout}>
                  Sair
                </button>
              </>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => loginWithGoogle()}
              >
                Entrar com Google
              </button>
            )}
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post/new" element={<AddPost onSave={addPost} />} />
        <Route
          path="/post/:id"
          element={<ViewPost posts={posts} onDelete={deletePost} />}
        />
        <Route
          path="/post/:id/edit"
          element={<EditPost posts={posts} onSave={updatePost} />}
        />
      </Routes>
    </>
  );
}
