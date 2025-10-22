import ItemCarrinho from "./ItemCarrinho";
import { useNavigate } from "react-router-dom";

function Carrinho({ itens, excluir, limpar }) {
  const total = itens.reduce((soma, item) => soma + Number(item.preco || 0), 0);

  const navigate = useNavigate();

  function irParaPaginaCarrinho() {
    navigate(`/carrinho`);
  }

  return (
    <section className="my-4 container">
      <h2
        className="text-primary text-decoration-underline"
        style={{ cursor: "pointer" }}
        onClick={irParaPaginaCarrinho}
      >
        Carrinho
      </h2>
      <div className="bg-light p-3">
        <div className="d-flex justify-content-between">
          <p className="mb-1">Itens: {itens.length}</p>
          <p className="mb-1 fw-bold">Total: R$ {total.toFixed(2)}</p>
        </div>

        <div className="d-flex flex-column gap-2 mt-2">
          {itens.length === 0 && (
            <div className="text-muted">Carrinho vazio</div>
          )}

          {itens.map((item, index) => (
            <ItemCarrinho
              key={index}
              nome={item.nome}
              preco={item.preco}
              excluir={() => excluir(index)}
            />
          ))}
        </div>
        {itens.length > 0 && (
          <div className="text-center mt-3">
            <button className="btn btn-danger" onClick={limpar}>
              Limpar Carrinho
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Carrinho;
