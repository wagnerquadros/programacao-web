import CardProduto from "./CardProduto";

function ListaProdutos({ produtos, comprar }) {
  return (
    <section className="mt-4">
      <h2>Lista de Produtos</h2>
      <div className="row mt-3 g-3">
        {produtos.map((p, index) => (
          <div key={index} className="col-lg-2">
            <CardProduto
              nome={p.nome}
              preco={p.preco}
              comprar={() => comprar(p)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListaProdutos;

/*
CLASSES BOOTSTRAP USADAS:

- mt-4 → “margin-top” de 1.5rem (cria espaçamento acima da seção).
- row → cria uma linha da grid do Bootstrap (sistema de 12 colunas flexíveis).
- mt-3 → “margin-top” de 1rem (espaço acima da linha de produtos).
- g-3 → “gap” de 1rem entre colunas e linhas, mantendo espaçamento uniforme entre cards.

Na div que envolve cada produto:
- col-lg-2 → em telas grandes (≥992px), o card ocupa 1/6 da largura (6 por linha).

*/
