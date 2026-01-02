import "./Depoimentos.css"

function Depoimentos(){
    return(
        <section className="depoimentos">
            <h2>O que nossos clientes dizem</h2>

            <div className="depoimentos-grid">

                <div className="depoimentos-card">
                    <p>
                      ⭐⭐⭐⭐⭐ <br />
                      "A melhor churrascaria que já fui! Carne no ponto perfeito
                       e atendimento excelente."
                    </p>
                    <span>- Carlos Silva</span>
                </div>

                <div className="depoimentos-card">
                    <p>
                      ⭐⭐⭐⭐⭐ <br />
                      "Ambiente incrível e carnes de altíssima qualidade.
                       Recomendo muito!"
                    </p>
                    <span>- Mariana Costa</span>
                </div>

                <div className="depoimentos-card">
                    <p>
                      ⭐⭐⭐⭐⭐ <br />
                      "Experiência sensacional, voltarei com certeza."
                    </p>
                    <span>- João Pereira</span>
                </div>

            </div>
        </section>
    )
}

export default Depoimentos;