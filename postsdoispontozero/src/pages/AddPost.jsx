import React from "react";
import PostForm from "../components/PostForm.jsx";

export default function AddPost({ onSave }) {
  return (
    <div className="container">
      <div className="header">
        <h1>Novo Post</h1>
        <a className="link" href="/">
          Voltar
        </a>
      </div>
      <PostForm onSubmit={onSave} cancelTo="/" />
    </div>
  );
}
