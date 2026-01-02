import "./Header.css"

function Header(){
    return(
        <header className="header">
            <div className="container">
                <h1>Churrascaria Premium</h1>

                <nav className="nav">
                    <ul>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#cardapio">Cardapio</a></li>
                        <li><a href="#destaques">Destaques</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;