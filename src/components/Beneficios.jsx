import "./Beneficios.css"

function Beneficios(){
    return(
        <section className="beneficios">
            <h2>Por que escolher a Brasa Nobre?</h2>

            <div className="beneficios-grid">
                <div className="beneficio-card">
                    <span>🔥</span>
                    <h3>Carnes Premium</h3>
                    <p>Selecionamos apenas carnes nobres e de alta
                        qualidade.
                    </p>
                </div>

                <div className="beneficio-card">
                    <span>👩‍🍳</span>
                    <h3>Churrasqueiros Experientes</h3>
                    <p>Profissionais especializados no preparo
                        perfeito.
                    </p>
                </div>

                <div className="beneficio-card">
                    <span>🥩</span>
                    <h3>Sabor Incomparável</h3>
                    <p>Tradição e sabor que conquistam nossos
                        clientes.
                    </p>
                </div>

                <div className="beneficio-card">
                    <span>⭐</span>
                    <h3>Atendimento de Excelência</h3>
                    <p>Experiência completa do início ao fim.</p>
                </div>
            </div>
        </section>
    )
}

export default Beneficios;