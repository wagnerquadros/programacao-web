function Nav() {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid d-flex justify-content-center">
        <span className="navbar-brand mb-0 h1 text-bg-primary">Minha Loja</span>
      </div>
    </nav>
  );
}

export default Nav;

/*
CLASSES BOOTSTRAP USADAS:

- navbar → cria uma barra de navegação horizontal com padding e alinhamentos padrões.
- bg-primary → aplica a cor de fundo “primária” do Bootstrap (azul por padrão).
- container-fluid → cria um container com 100% da largura da tela, mantendo espaçamento interno.
- d-flex → ativa display flexbox no container, permitindo controle de alinhamento.
- justify-content-center → centraliza horizontalmente o conteúdo do flex container.
- navbar-brand → estilo padrão para logo ou título da navbar (fonte maior e espaçamento).
- mb-0 → remove a margem inferior do elemento (margin-bottom: 0).
- h1 → aplica o estilo visual de um heading grande.
- text-bg-primary → deixa o texto branco sobre fundo azul (mesma cor primária).
*/
