import { useState } from "react";
import { menu } from "../data/menuData";
import "./Cardapio.css"

function Cardapio(){
    const [categoria, setCategoria] = useState("todos")

    const pratosFiltrados =
    categoria === "todos"
    ? menu
    : menu.filter(item => item.categoria === categoria)

    return(
        <section className="cardapio" id="cardapio">
            <h2>Nosso Cardápio</h2>

            <div className="filtros">
               <button onClick={() => setCategoria("todos")}>Todos</button>
               <button onClick={() => setCategoria("Carnes")}>Carnes</button>
               <button onClick={() => setCategoria("Bebidas")}>Bedidas</button>
            </div>

            <div className="cardapio-grid">
            {pratosFiltrados.map(item => (
                <div key={item.id} className="card">
                    <img src={item.imagem} alt={item.nome} />
                <div className="card-content">
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

export default Cardapio;