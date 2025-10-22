import { Routes, Route } from "react-router-dom";
import App from "../App";
import DetalheProduto from "../components/DetalheProduto";

function RoutesApp() {
  return (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detalhes/:nome" element={<DetalheProduto />} />
        <Route path="/carrinho" element={<PaginaCarrinho />} />
    </Routes>
  );
}

export default RoutesApp;
