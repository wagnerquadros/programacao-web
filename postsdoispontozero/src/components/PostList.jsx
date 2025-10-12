import React from "react";
import PostCard from "./PostCard.jsx";

export default function PostList({ posts, onOpen }) {
  if (!posts || posts.length === 0) {
    return <p className="meta">Nenhum post encontrado.</p>;
  }
  return (
    <div>
      {posts.map((p) => (
        <PostCard
          key={p.id}
          titulo={p.titulo}
          conteudo={p.conteudo}
          data={p.data}
          categorias={p.categorias}
          onClick={() => onOpen(p.id)}
        />
      ))}
    </div>
  );
}
