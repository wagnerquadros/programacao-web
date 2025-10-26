import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import ListaProdutos from "./components/ListaProdutos";
import Carrinho from "./components/Carrinho";
import Rodape from "./components/Rodape";
import DetalheProduto from "./pages/DetalheProduto";
import BotaoGerenciamento from "./components/BotaoGerencimento";
import CadastroProduto from "./pages/CadastroProduto";
import PaginaCarrinho from "./pages/PaginaCarrinho";
import Pagina404 from "./pages/Pagina404";
import Gerenciamento from "./pages/Gerenciamento";
import PaginaCompraDetalhe from "./pages/PaginaCompraDetalhe";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    const resposta = await fetch("http://localhost:3001/produtos");
    const dados = await resposta.json();
    setProdutos(dados);
  }

  function adicionarAoCarrinho(produto) {
    setCarrinho((ant) => [...ant, produto]);
  }
  function removerDoCarrinho(index) {
    setCarrinho((ant) => ant.filter((_, i) => i !== index));
  }

  function limparCarrinho() {
    if (carrinho.length > 0) {
      setCarrinho([]);
    }
  }

  function aumentarQuantidade(idProduto) {
    const produtoEncontrado = produtos.find(
      (produto) => produto.id === idProduto
    );
    if (!produtoEncontrado) return;

    setCarrinho((carrinhoAnterior) => [...carrinhoAnterior, produtoEncontrado]);
  }

  function diminuirQuantidade(idProduto) {
    setCarrinho((carrinhoAnterior) => {
      const indice = carrinhoAnterior.findIndex(
        (produto) => produto.id === idProduto
      );
      if (indice === -1) return carrinhoAnterior;

      const novaLista = [...carrinhoAnterior];
      novaLista.splice(indice, 1);
      return novaLista;
    });
  }

  function removerProdutoDoCarrinho(id) {
    setCarrinho((ant) => ant.filter((p) => p.id !== id));
  }

  function finalizarCompra() {
    if (carrinho.length > 0) setCarrinho([]);
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
                <Carrinho
                  itens={carrinho}
                  excluir={removerDoCarrinho}
                  limpar={limparCarrinho}
                />
                <ListaProdutos
                  produtos={produtos}
                  comprar={adicionarAoCarrinho}
                />
                <BotaoGerenciamento />
              </>
            }
          />

          <Route path="/detalhes/:nome" element={<DetalheProduto />} />

          <Route
            path="/cadastro-produto"
            element={<CadastroProduto atualizarLista={carregarProdutos} />}
          />

          <Route
            path="/carrinho"
            element={
              <PaginaCarrinho
                itens={carrinho}
                aumentar={aumentarQuantidade}
                diminuir={diminuirQuantidade}
                removerItem={removerProdutoDoCarrinho}
                limparTudo={limparCarrinho}
                finalizar={finalizarCompra}
              />
            }
          />
          <Route path="/gerenciamento" element={<Gerenciamento />} />
          <Route path="/compras/:id" element={<PaginaCompraDetalhe />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </main>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;
