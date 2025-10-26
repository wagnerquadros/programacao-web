import { useNavigate } from "react-router-dom";

function BotaoGerenciamento() {
  const navigate = useNavigate();

  function irParaGerenciamento() {
    navigate("/gerenciamento");
  }

  return (
    <div className="text-center mt-4">
      <button className="btn btn-primary" onClick={irParaGerenciamento}>
        Gerenciamento
      </button>
    </div>
  );
}

export default BotaoGerenciamento;
