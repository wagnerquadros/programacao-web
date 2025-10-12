import React, { useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ViewPost from "./pages/ViewPost.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import postsData from "./data/posts.json";

export default function App() {
  const initial = useMemo(() => postsData, []);
  const [posts, setPosts] = useState(initial);
  const navigate = useNavigate();

  function nextId() {
    return posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
  }

  function addPost(data) {
    setPosts((prev) => [...prev, { ...data, id: nextId() }]);
    navigate("/");
  }

  function updatePost(id, data) {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, ...data } : p)));
    navigate("/");
  }

  function deletePost(id) {
    if (!confirm("Tem certeza que deseja excluir este post?")) return;
    setPosts((prev) => prev.filter((p) => p.id !== id));
    navigate("/");
  }

  return (
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
  );
}
