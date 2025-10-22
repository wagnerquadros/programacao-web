import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import ListaProdutos from "./components/ListaProdutos";
import Carrinho from "./components/Carrinho";
import Rodape from "./components/Rodape";
import DetalheProduto from "./components/DetalheProduto";
import produtosJson from "./data/produtos.json";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [produtos] = useState(produtosJson);


  function adicionarAoCarrinho(produto) {
    setCarrinho((ant) => [...ant, produto]);
  }
  function removerDoCarrinho(index) {
    setCarrinho((ant) => ant.filter((_, i) => i !== index));
  }

  return (
    <BrowserRouter>
      <Nav />
      <main className="container my-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carrinho itens={carrinho} excluir={removerDoCarrinho} />
                <ListaProdutos produtos={produtos} comprar={adicionarAoCarrinho} />
              </>
            }
          />
          <Route path="/detalhes/:nome" element={<DetalheProduto />} />
        </Routes>
      </main>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
