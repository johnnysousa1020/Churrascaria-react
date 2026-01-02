import sobreimg from "../assets/sobre-imagem.jpg"
import "./Sobre.css"

function Sobre(){
    return(
        <section className="sobre" id="sobre">
            <div className="sobre-container">

                <div className="sobre-texto">
                    <h2>Sobre a Churrascaria</h2>
                    <p>
                        Somos uma churrascaria especializada em carnes nobres,
                        preparadas com tradição e paixão pelo verdadeiro churrasco
                    </p>
                    <p>
                        Trabalhamos com cortes selecionados, assados no ponto ideal,
                        para proporcionar uma experiência única de sabor, qualidade
                        e conforto para nossos clientes
                    </p>
                </div>

                <div className="sobre-imagem">
                    <img src={sobreimg} alt="Churrasco na brasa" />
                </div>
            </div>
        </section>
    )
}

export default Sobre;