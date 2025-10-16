import React, { useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostPage from "./pages/Post.jsx";

export default function App() {
  const initial = useMemo(
    () => [
      {
        id: 1,
        titulo: "Título do Post 1",
        conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        data: "2025-10-10",
        categorias: ["design", "tecnologias"],
      },
      {
        id: 2,
        titulo: "Título do Post 2",
        conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        data: "2025-10-09",
        categorias: ["novidades", "informação"],
      },
      {
        id: 3,
        titulo: "Título do Post 3",
        conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        data: "2025-10-08",
        categorias: ["tutoriais", "tecnologias"],
      },
    ],
    []
  );

  const [posts, setPosts] = useState(initial);
  const navigate = useNavigate();

  function handleClickPost(id) {
    navigate(`/post/${id}`);
  }

  function handleAddPost() {
    navigate("/post/new");
  }

  function handleSave(postData, idParam) {
    if (idParam) {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === Number(idParam) ? { ...postData, id: p.id } : p
        )
      );
    } else {
      const nextId = posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
      setPosts((prev) => [...prev, { ...postData, id: nextId }]);
    }
    navigate("/");
  }

  return (
    <Routes><Route
        path="/"
        element={
          <Index
            posts={posts}
            onClickPost={handleClickPost}
            onAddPost={handleAddPost}
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
