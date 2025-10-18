import React from "react";
import { useParams, Link } from "react-router-dom";
import { formatarData } from "../Utils.js";

export default function ViewPost({ posts, onDelete }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

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
        <h1>{post.titulo}</h1>
        <Link className="link" to="/">
          Voltar
        </Link>
      </div>

      <div className="card" style={{ cursor: "default" }}>
        <div className="card-title">
          <h2 style={{ color: "inherit" }}>{post.titulo}</h2>
          <small>{formatarData(post.data)}</small>
        </div>
        <p>{post.conteudo}</p>
        <div className="meta">
          <strong>Categorias:</strong> {post.categorias?.join(", ") || "—"}
        </div>
      </div>

      <div className="footer-actions">
        <div />
        <div>
          <Link className="btn btn-primary" to={`/post/${post.id}/edit`}>
            Editar
          </Link>
          <button className="btn btn-danger" onClick={() => onDelete(post.id)}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
