import { especial } from "../data/menu";
import "./Destaques.css"

function Destaques(){
    const destaques = especial.filter(item => item.destaque)

    return(
        <section className="destaques" id="destaques">
            <h2>Destaques da Casa</h2>

            <div className="destaques-grid">
                {destaques.map(item => (
                    <div className="destaque-card" key={item.id}>
                        {item.maisPedido && (
                            <span className="badge">🔥 Mais pedido</span>
                        )}

                        <img src={item.imagem} alt={item.nome} />

                        <div className="destaque-content">
                            <h3>{item.nome}</h3>
                            <p>{item.descricao}</p>
                            <span>{item.preco}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Destaques;