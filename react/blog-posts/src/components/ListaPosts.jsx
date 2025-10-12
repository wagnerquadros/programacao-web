import React from "react";
import Post from "./Post.jsx";

export default function ListaPosts({ posts, onClickPost }) {
  if (!posts || posts.length === 0) {
    return <p className="meta">Nenhum post encontrado.</p>;
  }

  return (
    <div>
      {posts.map((p) => (
        <Post
          key={p.id}
          id={p.id}
          titulo={p.titulo}
          conteudo={p.conteudo}
          data={p.data}
          categorias={p.categorias}
          onClick={() => onClickPost(p.id)}
        />
      ))}
    </div>
  );
}
