import ItemCarrinho from "./ItemCarrinho";
import { useNavigate } from "react-router-dom";

function Carrinho({ itens, excluir }) {
  const total = itens.reduce((soma, item) => soma + item.preco, 0);
  
  const navigate = useNavigate();

  function irParaPaginaCarrinho() {
    navigate(`/carrinho`);
  }


  return (
    <section className="my-4 container">
      <h2 className="text-primary cursor-pointer text-decoration-underline" onClick={irParaPaginaCarrinho} >Carrinho</h2>
      <div className="bg-light p-3" >
        <div className="d-flex justify-content-between">
          <p className="mb-1">Itens: {itens.length}</p>
          <p className="mb-1 fw-bold">Total: R$ {total}</p>
        </div>

        <div className="d-flex flex-column gap-2 mt-2">
          {itens.length === 0 && (
            <div className="text-muted">Carrinho vazio</div>
          )}

          {itens.map((item, index) => (
            <ItemCarrinho
              key={index}
              nome={item.nome}
              preco={item.preco}
              excluir={() => excluir(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carrinho;

/*
CLASSES BOOTSTRAP USADAS:

- container → adiciona margens laterais automáticas e centraliza o conteúdo na tela.
- my-4 → “margin-top” e “margin-bottom” de 1.5rem (espaçamento vertical em volta da seção).
- bg-light → fundo cinza-claro para destacar a área do carrinho.
- p-3 → padding interno de 1rem, criando respiro entre conteúdo e borda.
- d-flex → ativa o display flexbox (permite alinhar elementos facilmente).
- justify-content-between → distribui o conteúdo flex com espaço entre os elementos (um à esquerda, outro à direita).
- mb-1 → reduz a margem inferior do parágrafo (0.25rem).
- fw-bold → deixa o texto em negrito.
- flex-column → muda o eixo do flexbox para vertical (os itens ficam um embaixo do outro).
- gap-2 → adiciona espaçamento fixo entre os itens (0.5rem).
- mt-2 → “margin-top” de 0.5rem (espaço acima da lista de itens).
- text-muted → deixa o texto com cor cinza clara, geralmente usada para indicar estados vazios ou secundários.
*/
