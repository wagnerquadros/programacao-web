import React, { useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Index from "./pages/index.jsx";
import PostPage from "./pages/Post.jsx";

export default function App() {
  const initial = useMemo(
    () => [
      {
        id: 1,
        titulo: "Post 1",
        conteudo: "Conteúdo do post 1.",
        data: "2025-10-10",
        categorias: ["design", "tecnologias"],
      },
      {
        id: 2,
        titulo: "Post 2",
        conteudo: "Conteúdo do post 2.",
        data: "2025-10-09",
        categorias: ["novidades", "informação"],
      },
      {
        id: 3,
        titulo: "Post 3",
        conteudo: "Conteúdo do post 3.",
        data: "2025-10-08",
        categorias: ["tutoriais", "tecnologias"],
      },
    ],
    []
  );

  const [posts, setPosts] = useState(initial);
  const navigate = useNavigate();

  function onClickPost(id) {
    navigate(`/post/${id}`);
  }
  function onAddPost() {
    navigate("/post/new");
  }

  function handleSave(postData, maybeId) {
    if (maybeId) {
      setPosts((prev) =>
        prev.map((p) => (p.id === Number(maybeId) ? { ...p, ...postData } : p))
      );
    } else {
      const nextId = posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
      setPosts((prev) => [...prev, { ...postData, id: nextId }]);
    }
    navigate("/");
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Index
            posts={posts}
            onClickPost={onClickPost}
            onAddPost={onAddPost}
          />
        }
      />
      <Route path="/post/new" element={<PostPage onSave={handleSave} />} />
      <Route
        path="/post/:id"
        element={<PostPage posts={posts} onSave={handleSave} />}
      />
    </Routes>
  );
}
