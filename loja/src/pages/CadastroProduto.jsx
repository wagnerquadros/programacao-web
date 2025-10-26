import { useState } from "react";
import BotaoVoltar from "../components/BotaoVoltar";
import { useNavigate } from "react-router-dom";

function CadastroProduto({ atualizarLista }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [avaliacao, setAvaliacao] = useState(1);
  const [descricao, setDescricao] = useState("");
  const [quantidadeAvaliacoes, setQuantidadeAvaliacoes] = useState(0);
  const navegar = useNavigate();

  async function cadastrarProduto(evento) {
    evento.preventDefault();

    const novoProduto = {
      id: crypto.randomUUID(),
      nome: nome,
      preco: Number(preco),
      avaliacao: Number(avaliacao),
      quantidadeAvaliacoes: Number(quantidadeAvaliacoes),
      descricao: descricao?.trim() || "",
    };

    await fetch("http://localhost:3001/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoProduto),
    });

    atualizarLista();
    limparFormulario();
    navegar("/");
  }

  function limparFormulario() {
    setNome("");
    setPreco("");
    setAvaliacao(1);
    setQuantidadeAvaliacoes(0);
  }

  return (
    <div className="container my-5">
      <BotaoVoltar />
      <h1 className="mb-4">Cadastro de Produto</h1>

      <form onSubmit={cadastrarProduto} className="row g-3">
        <div className="col-12">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Preço (R$)</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Avaliação (1 a 5)</label>
          <input
            type="number"
            min="1"
            max="5"
            className="form-control"
            value={avaliacao}
            onChange={(e) => setAvaliacao(e.target.value)}
            required
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Quantidade de Avaliações</label>
          <input
            type="number"
            min="0"
            className="form-control"
            value={quantidadeAvaliacoes}
            onChange={(e) => setQuantidadeAvaliacoes(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Descrição (opcional)</label>
          <textarea
            className="form-control"
            rows={3}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className="col-12 text-end">
          <button type="submit" className="btn btn-success">
            Salvar Produto
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroProduto;
