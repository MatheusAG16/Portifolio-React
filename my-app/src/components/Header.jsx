// Vamos adicionar um estilo simples diretamente para visualização
const headerStyle = {
  padding: '20px 0',
  backgroundColor: '#f8f9fa',
  textAlign: 'center',
  borderBottom: '1px solid #dee2e6'
};

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Meu Portfólio</h1>
            <nav>
                <a href="/">Inicio</a>
                <a href="/projetos">Projetos</a>
            </nav>
        </header>
    );
}

export default Header;