function CardProduto({ nome, preco, comprar }) {
  return (
    <div className="card text-center">
      <img
        src={`https://placehold.co/300x200/000000/FFFFFF/png?text=${encodeURIComponent(
          nome
        )}`}
        className="card-img-top"
        alt={nome}
      />
      <div className="card-body">
        <h6 className="card-title mb-1">{nome}</h6>
        <p className="card-text mb-2">R$ {preco}</p>
        <button className="btn btn-success btn-sm" onClick={comprar}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default CardProduto;

/*
CLASSES BOOTSTRAP USADAS:

- card → aplica o estilo padrão de “card” (borda, sombra leve e padding interno).
- text-center → centraliza horizontalmente todo o conteúdo de texto do card.
- card-img-top → formata a imagem para ficar posicionada no topo do card e ocupar toda a largura.
- card-body → define a área de conteúdo do card (onde ficam textos e botões).
- card-title → estilo para títulos dentro de um card (tamanho de fonte, peso, margens).
- mb-1 → “margin-bottom: 0.25rem” (pequena margem inferior para espaçar elementos).
- card-text → estilo padrão para textos dentro de cards (parágrafos).
- mb-2 → “margin-bottom: 0.5rem” (margem um pouco maior para separar do botão).
- btn → estilo base de botão do Bootstrap (padding, borda arredondada, cursor pointer).
- btn-success → botão verde (cor de sucesso padrão).
- btn-sm → botão em tamanho pequeno.
*/
