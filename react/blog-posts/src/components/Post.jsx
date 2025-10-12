import React from "react";

function formatarData(yyyy_mm_dd) {
  if (!yyyy_mm_dd) return "";
  const d = new Date(yyyy_mm_dd + "T00:00:00");
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Post({ titulo, conteudo, data, categorias, onClick }) {
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
