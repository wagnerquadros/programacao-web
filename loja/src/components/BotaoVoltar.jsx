import { useNavigate } from "react-router-dom";

function BotaoVoltar() {
  const navigate = useNavigate();

  function voltar() {
    navigate(-1);
  }

  return (
    <button onClick={voltar} className="btn btn-outline-primary mb-4">
      ← Voltar
    </button>
  );
}

export default BotaoVoltar;
