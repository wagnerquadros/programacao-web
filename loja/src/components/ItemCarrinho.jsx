function ItemCarrinho({ nome, preco, excluir }) {
  return (
    <div className="d-flex align-items-center justify-content-between p-2 border bg-white rounded">
      <div className="d-flex align-items-center gap-2">
        <img
          src={`https://placehold.co/60x60/000000/FFFFFF/png?text=${nome}`}
          alt={nome}
          className="img-fluid"
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
        <div>
          <strong>{nome}</strong>
          <div className="text-muted">R$ {preco}</div>
        </div>
      </div>
      <button className="btn btn-warning btn-sm" onClick={excluir}>
        Excluir
      </button>
    </div>
  );
}

export default ItemCarrinho;

/*
CLASSES BOOTSTRAP USADAS:

- d-flex → ativa o display flexbox, permitindo alinhar elementos na horizontal.
- align-items-center → alinha verticalmente os elementos ao centro.
- justify-content-between → distribui os elementos com espaço entre eles (imagem+texto à esquerda, botão à direita).
- p-2 → padding interno de 0.5rem.
- border → adiciona uma borda fina padrão em volta do item.
- bg-white → fundo branco.
- rounded → bordas levemente arredondadas.

Dentro da div da esquerda:
- d-flex → novamente usa flexbox para alinhar imagem e texto lado a lado.
- align-items-center → centraliza verticalmente imagem e texto.
- gap-2 → espaçamento horizontal fixo entre imagem e texto (0.5rem).

Imagem:
- img-fluid → imagem responsiva (ajusta automaticamente ao container).
- style={{ width: "60px", height: "60px", objectFit: "cover" }} → fixa o tamanho e corta proporcionalmente para manter o formato bonito.

Textos:
- text-muted → cor cinza clara para indicar informação secundária (preço).

Botão:
- btn → estilo base para botões Bootstrap.
- btn-warning → botão amarelo.
- btn-sm → botão pequeno.
*/
