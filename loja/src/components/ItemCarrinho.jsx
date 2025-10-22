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
          <div>R$ {preco}</div>
        </div>
      </div>
      <button className="btn btn-warning btn-sm" onClick={excluir}>
        Excluir
      </button>
    </div>
  );
}

export default ItemCarrinho;
