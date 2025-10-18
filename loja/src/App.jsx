import { useState } from "react";
import Nav from "./components/Nav";
import ListaProdutos from "./components/ListaProdutos";
import Carrinho from "./components/Carrinho";
import Rodape from "./components/Rodape";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    { nome: "prod 1", preco: 100 },
    { nome: "prod 2", preco: 500 },
    { nome: "prod 3", preco: 80 },
    { nome: "prod 4", preco: 10 },
    { nome: "prod 5", preco: 120 },
    { nome: "prod 6", preco: 80 },
  ];

  function adicionarAoCarrinho(produto) {
    setCarrinho((anterior) => [...anterior, produto]);
  }

  function removerDoCarrinho(index) {
    setCarrinho((anterior) => anterior.filter((_, i) => i !== index));
  }

  return (
    <>
      <Nav />
      <main className="container my-4">
        <Carrinho itens={carrinho} excluir={removerDoCarrinho} />
        <ListaProdutos produtos={produtos} comprar={adicionarAoCarrinho} />
      </main>
      <Rodape />
    </>
  );
}

export default App;

/*
CLASSES BOOTSTRAP:
 
- container → centraliza o conteúdo e adiciona margens laterais responsivas.
- my-4 → adiciona espaçamento vertical (topo e base) de 1.5rem em torno do <main>.
*/
