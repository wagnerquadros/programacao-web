import { useNavigate } from "react-router-dom";

function Pagina404() {
  const navigate = useNavigate();

  function voltarHome() {
    navigate("/");
  }

  return (
    <div className="container text-center my-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Página não encontrada</p>
      <button className="btn btn-primary" onClick={voltarHome}>
        Voltar para Home
      </button>
    </div>
  );
}

export default Pagina404;
