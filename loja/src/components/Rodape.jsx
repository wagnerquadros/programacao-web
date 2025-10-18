function Rodape() {
  return (
    <footer className="mt-5">
      <div className="bg-primary text-center py-3">
        <span className="navbar-brand mb-0 text-bg-primary">All Rights</span>
      </div>
    </footer>
  );
}

export default Rodape;

/*
CLASSES BOOTSTRAP USADAS:

- mt-5 → adiciona margem superior de 3rem, criando espaçamento entre o rodapé e o conteúdo da página.
- bg-primary → aplica a cor de fundo “primária” (azul por padrão).
- text-center → centraliza o texto horizontalmente dentro do container.
- py-3 → padding vertical de 1rem em cima e embaixo (espaçamento interno no rodapé).
- navbar-brand → estilo de texto maior, geralmente usado em títulos/logos (funciona bem aqui também).
- mb-0 → remove margem inferior, mantendo o texto alinhado no centro vertical.
- text-bg-primary → define cor de texto branca com fundo azul (mantém contraste visual).

Resultado:
- O rodapé ocupa toda a largura da tela.
- O texto “All Rights” fica centralizado e bem destacado.
- O espaçamento garante que ele não fique colado no conteúdo acima.
*/
