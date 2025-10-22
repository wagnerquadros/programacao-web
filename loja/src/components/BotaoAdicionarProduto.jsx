import { useNavigate } from "react-router-dom";

function BotaoAdicionarProduto() {
  const navigate = useNavigate();

  function irParaCadastro() {
    navigate("/cadastro-produto");
  }

  return (
    <div className="text-center mt-4">
      <button className="btn btn-primary" onClick={irParaCadastro}>
        + Adicionar Produto
      </button>
    </div>
  );
}

export default BotaoAdicionarProduto;
