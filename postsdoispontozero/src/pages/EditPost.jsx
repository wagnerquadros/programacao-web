import React from "react";
import { useParams, Link } from "react-router-dom";
import PostForm from "../components/PostForm.jsx";

export default function EditPost({ posts, onSave }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container">
        <div className="header">
          <h1>Post não encontrado</h1>
          <Link className="link" to="/">
            Voltar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Editar Post</h1>
        <Link className="link" to="/">
          Voltar
        </Link>
      </div>
      <PostForm
        initialData={post}
        onSubmit={(data) => onSave(post.id, data)}
        cancelTo="/"
      />
    </div>
  );
}
