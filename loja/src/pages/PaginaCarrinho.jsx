import BotaoVoltar from "../components/BotaoVoltar";

async function postCompra(compra) {
  const r = await fetch(`http://localhost:3001/compras`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(compra),
  });
  if (!r.ok) throw new Error("Falha ao salvar compra");
  return r.json();
}

function PaginaCarrinho({
  itens,
  aumentar,
  diminuir,
  removerItem,
  limparTudo,
  finalizar,
}) {
  const agrupado = itens.reduce((acc, prod) => {
    const chave = prod.id ?? prod.nome;
    if (!acc[chave]) acc[chave] = { produto: prod, quantidade: 0 };
    acc[chave].quantidade += 1;
    return acc;
  }, {});

  const linhas = Object.values(agrupado);
  const total = linhas.reduce(
    (soma, lin) => soma + Number(lin.produto.preco || 0) * lin.quantidade,
    0
  );

  async function finalizarAgora() {
    if (linhas.length === 0) return;

    const compra = {
      id: crypto.randomUUID(),
      itens: linhas.map(({ produto, quantidade }) => ({
        produtoId: produto.id ?? null,
        nome: produto.nome,
        preco: Number(produto.preco || 0),
        quantidade,
        subtotal: Number(produto.preco || 0) * quantidade,
      })),
      total: Number(total.toFixed(2)),
      criadoEm: new Date().toISOString(),
    };

    try {
      await postCompra(compra);
      finalizar();
      alert("Compra registrada com sucesso!");
    } catch (e) {
      console.error(e);
      alert("Erro ao salvar a compra.");
    }
  }

  return (
    <div className="container my-5">
      <BotaoVoltar />
      <h1 className="mb-4">Carrinho</h1>

      {linhas.length === 0 ? (
        <div className="alert alert-secondary">Seu carrinho está vazio.</div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th style={{ width: 120 }}>Preço</th>
                  <th style={{ width: 160 }}>Quantidade</th>
                  <th style={{ width: 120 }}>Subtotal</th>
                  <th style={{ width: 120 }}></th>
                </tr>
              </thead>
              <tbody>
                {linhas.map(({ produto, quantidade }) => (
                  <tr key={produto.id ?? produto.nome}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={`https://placehold.co/60x60/000000/FFFFFF/png?text=${encodeURIComponent(
                            produto.nome
                          )}`}
                          alt={produto.nome}
                          className="rounded"
                          style={{ width: 60, height: 60, objectFit: "cover" }}
                        />
                        <div>
                          <div className="fw-semibold">{produto.nome}</div>
                        </div>
                      </div>
                    </td>

                    <td>R$ {Number(produto.preco || 0).toFixed(2)}</td>

                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => diminuir(produto.id)}
                        >
                          –
                        </button>
                        <span className="px-2">{quantidade}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => aumentar(produto.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td>
                      R$ {(Number(produto.preco || 0) * quantidade).toFixed(2)}
                    </td>

                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removerItem(produto.id)}
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan={3} className="text-end fw-bold">
                    Total:
                  </td>
                  <td className="fw-bold">R$ {total.toFixed(2)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-danger" onClick={limparTudo}>
              Limpar carrinho
            </button>
            <button className="btn btn-success" onClick={finalizarAgora}>
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PaginaCarrinho;
