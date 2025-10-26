import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BotaoVoltar from "../components/BotaoVoltar";
import ListaCompras from "../components/ListaCompras";

function Gerenciamento() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    try {
      const resp = await fetch(`http://localhost:3001/produtos`);
      const dados = await resp.json();
      setProdutos(dados);
    } catch {
      setProdutos([]);
    }
  }

  async function excluirProduto(id) {
    const confirmar = window.confirm("Tem certeza que deseja excluir?");
    if (!confirmar) return;
    await fetch(`http://localhost:3001/produtos/${id}`, { method: "DELETE" });
    carregarProdutos();
  }

  function editarProduto(id) {
    navigate(`/cadastro-produto?id=${id}`);
  }

  function irParaCadastro() {
    navigate("/cadastro-produto");
  }

  return (
    <div className="container my-5">
      <BotaoVoltar />
      <h1 className="mb-4">Gerenciamento de Produtos</h1>

      {produtos.length === 0 ? (
        <div className="alert alert-secondary">Nenhum produto cadastrado.</div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Nome</th>
                <th style={{ width: 140 }}>Preço</th>
                <th style={{ width: 180 }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((p) => (
                <tr key={p.id}>
                  <td>{p.nome}</td>
                  <td>R$ {Number(p.preco).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => editarProduto(p.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => excluirProduto(p.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="text-center mt-4 mb-4">
        <button className="btn btn-primary" onClick={irParaCadastro}>
          + Adicionar Produto
        </button>
      </div>

      <ListaCompras />
    </div>
  );
}

export default Gerenciamento;
