import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListaCompras() {
  const [compras, setCompras] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarCompras();
  }, []);

  async function carregarCompras() {
    try {
      const resp = await fetch(
        `http://localhost:3001/compras?_sort=criadoEm&_order=desc`
      );
      const dados = await resp.json();
      setCompras(dados);
    } catch {
      setCompras([]);
    }
  }

  function detalhar(id) {
    navigate(`/compras/${id}`);
  }

  return (
    <div className="mt-5">
      <h2 className="h4 mb-3">Compras registradas</h2>

      {compras.length === 0 ? (
        <div className="alert alert-secondary">Nenhuma compra encontrada.</div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th style={{ width: 140 }}>Total</th>
                <th style={{ width: 140 }}>Qtde Itens</th>
                <th style={{ width: 220 }}>Data</th>
              </tr>
            </thead>
            <tbody>
              {compras.map((c) => (
                <tr key={c.id}>
                  <td title={c.id}>{String(c.id).slice(0, 8)}…</td>
                  <td>R$ {Number(c.total || 0).toFixed(2)}</td>
                  <td>
                    {Array.isArray(c.itens)
                      ? c.itens.reduce(
                          (s, it) => s + Number(it.quantidade || 1),
                          0
                        )
                      : 0}
                  </td>
                  <td>
                    {c.criadoEm ? new Date(c.criadoEm).toLocaleString() : "-"}
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => detalhar(c.id)}
                    >
                      Detalhar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ListaCompras;
