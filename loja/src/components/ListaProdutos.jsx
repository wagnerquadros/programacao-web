import CardProduto from "./CardProduto";

function ListaProdutos({ produtos, comprar, verDetalhes }) {
  return (
    <div className="row">
      {produtos.map((p, i) => (
        <div className="col-lg-2" key={i}>
          <CardProduto
            nome={p.nome}
            preco={p.preco}
            comprar={() => comprar(p)}
            verDetalhes={verDetalhes}
          />
        </div>
      ))}
    </div>
  );
}

export default ListaProdutos;


