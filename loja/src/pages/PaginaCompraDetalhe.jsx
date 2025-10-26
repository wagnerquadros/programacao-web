import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BotaoVoltar from "../components/BotaoVoltar";

function PaginaCompraDetalhe() {
  const { id } = useParams();
  const [compra, setCompra] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const r = await fetch(`http://localhost:3001/compras/${id}`);
        if (!r.ok) throw new Error("Compra não encontrada");
        const dados = await r.json();
        setCompra(dados);
      } catch (e) {
        console.error(e);
        setCompra(null);
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, [id]);

  if (carregando) {
    return (
      <div className="container my-5">
        <BotaoVoltar />
        <div className="alert alert-secondary">Carregando…</div>
      </div>
    );
  }

  if (!compra) {
    return (
      <div className="container my-5">
        <BotaoVoltar />
        <div className="alert alert-danger">Compra não encontrada.</div>
      </div>
    );
  }

  const itens = Array.isArray(compra.itens) ? compra.itens : [];
  const total = Number(compra.total || 0);

  return (
    <div className="container my-5">
      <BotaoVoltar />
      <h1 className="mb-2">Detalhe da Compra</h1>
      <div className="text-muted mb-4">
        <div>
          <strong>ID:</strong> {compra.id}
        </div>
        <div>
          <strong>Data:</strong>{" "}
          {compra.criadoEm ? new Date(compra.criadoEm).toLocaleString() : "-"}
        </div>
      </div>

      {itens.length === 0 ? (
        <div className="alert alert-secondary">Compra sem itens.</div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Produto</th>
                <th style={{ width: 120 }}>Preço</th>
                <th style={{ width: 120 }}>Quantidade</th>
                <th style={{ width: 120 }}>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((it, idx) => (
                <tr key={idx}>
                  <td>{it.nome}</td>
                  <td>R$ {Number(it.preco || 0).toFixed(2)}</td>
                  <td>{Number(it.quantidade || 0)}</td>
                  <td>R$ {Number(it.subtotal || 0).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="text-end fw-bold">
                  Total:
                </td>
                <td className="fw-bold">R$ {total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}

export default PaginaCompraDetalhe;
