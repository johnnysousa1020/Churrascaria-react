import "./Hero.css"

function Hero(){
    return(
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>O verdadeiro sabor do churrasco</h1>
                <p>Carnes nobres preparadas na brasa, do jeito certo.</p>
                <a href="#cardapio" className="hero-btn">Ver Cardapio</a>
            </div>
        </section>
    )
}

export default Hero;