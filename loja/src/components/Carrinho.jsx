function Carrinho (){
    return (
       <>
            <div>
                <h1>Lista Produtos</h1>
                <div name="itens" class="btn-secondary">
                    <h3>Itens: 1</h3>
                    <h4>Total: R$ 10</h4>
                    <div name="produtos">
                        <div>
                            <div nome="item-carrinho">

                            </div>
                            <div name="botao-excluir">
                                <button type="button" class="btn btn-danger">Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrinho