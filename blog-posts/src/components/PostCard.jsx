import React from "react";
import { formatarData } from "../utils.js";

export default function PostCard({
  titulo,
  conteudo,
  data,
  categorias,
  onClick,
}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-title">
        <h2>{titulo}</h2>
        <small>{formatarData(data)}</small>
      </div>
      <p>{conteudo}</p>
      <div className="meta">
        <strong>Categorias:</strong>{" "}
        {Array.isArray(categorias) && categorias.length > 0
          ? categorias.join(", ")
          : "—"}
      </div>
    </div>
  );
}
