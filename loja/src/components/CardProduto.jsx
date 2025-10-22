import { useNavigate } from "react-router-dom";

function CardProduto({ nome, preco, comprar }) {

  const navigate = useNavigate();

  function irParaDetalhes() {
    navigate(`/detalhes/${encodeURIComponent(nome)}`);
  }

  return (
    <div className="card text-center">
      <img
        src={`https://placehold.co/300x200/000000/FFFFFF/png?text=${encodeURIComponent(
          nome
        )}`}
        className="card-img-top"
        alt={nome}
        onClick={irParaDetalhes}
      />
      <div className="card-body">
        <h6 className="card-title mb-1">{nome}</h6>
        <p className="card-text mb-2">R$ {preco}</p>
        <button className="btn btn-success btn-sm" onClick={comprar}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default CardProduto;


