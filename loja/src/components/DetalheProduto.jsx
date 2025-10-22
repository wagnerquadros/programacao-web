import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BotaoVoltar from "./BotaoVoltar";

function DetalheProduto() {
  const { nome } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function carregar() {
      // busca por igualdade no campo nome
      const resp = await fetch(
        `http://localhost:3001/produtos?nome=${encodeURIComponent(nome)}`
      );
      const lista = await resp.json();
      setProduto(lista[0] || null);
    }
    carregar();
  }, [nome]);

  const preco = Number(produto?.preco ?? 0);
  const descricao = produto?.descricao || "";
  const avaliacao = Number(produto?.avaliacao ?? 0);

  return (
    <div className="container my-5">
      <BotaoVoltar />

      <h1 className="mb-4">{nome}</h1>

      <div className="row align-items-start">
        <div className="col-md-6 mb-3">
          <img
            src={`https://placehold.co/600x400/000000/FFFFFF/png?text=${encodeURIComponent(
              nome
            )}`}
            alt={nome}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h5>Descrição</h5>
          <p className="text-muted">
            {descricao || "Sem descrição cadastrada."}
          </p>

          <div className="d-flex align-items-center gap-2 mb-2">
            <strong className="fs-5">Preço:</strong>
            <span className="fs-5">R$ {preco.toFixed(2)}</span>
          </div>

          <div className="mb-3">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                style={{ color: i < avaliacao ? "#FFD700" : "#ccc" }}
              >
                {i < avaliacao ? "★" : "☆"}
              </span>
            ))}
          </div>

          <button className="btn btn-success btn-lg">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default DetalheProduto;
