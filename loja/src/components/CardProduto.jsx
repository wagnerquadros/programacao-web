import { useNavigate } from "react-router-dom";

function CardProduto({ nome, preco, avaliacao, comprar }) {
  const navigate = useNavigate();

  function irParaDetalhes() {
    navigate(`/detalhes/${encodeURIComponent(nome)}`);
  }

  function gerarEstrelas() {
    const estrelas = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= avaliacao) {
        estrelas.push(
          <span key={i} style={{ color: "#FFD700" }}>
            ★
          </span>
        );
      } else {
        estrelas.push(
          <span key={i} style={{ color: "#ccc" }}>
            ☆
          </span>
        );
      }
    }
    return estrelas;
  }

  return (
    <div className="card text-center mb-4">
      <img
        src={`https://placehold.co/300x200/000000/FFFFFF/png?text=${encodeURIComponent(
          nome
        )}`}
        className="card-img-top"
        alt={nome}
        onClick={irParaDetalhes}
        style={{ cursor: "pointer" }}
      />
      <div className="card-body">
        <h6 className="card-title mb-1">{nome}</h6>
        <p className="card-text mb-2">R$ {preco}</p>
        <div>{gerarEstrelas()}</div>
        <button className="btn btn-success btn-sm" onClick={comprar}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default CardProduto;
