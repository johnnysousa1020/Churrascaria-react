import picanhaes from "../assets/picanha-premium.jpg"
import costelaes from "../assets/costela-especial.jpg"
import combo from "../assets/combo-da-casa.jpg"

export const especial = [
    {
        id: 1,
        nome: "Picanha Premium",
        categoria: "Carnes",
        preco: "R$ 89,90",
        imagem: picanhaes,
        descricao: "Picanha suculenta na brasa",
        destaque: true,
        maisPedido: true
    },
    {
        id: 2,
        nome: "Costela Especial",
        categoria: "Carnes",
        preco: "R$ 79,90",
        imagem: costelaes,
        descricao: "Costela assada lentamente",
        destaque: true,
        maisPedido: true
    },
    {
        id: 3,
        nome: "Combo da Casa",
        categoria: "Carnes",
        preco: "R$ 129,90",
        imagem: combo,
        descricao: "Picanha, fraldinha e acompanhamentos",
        destaque: true,
        maisPedido: true
    }
]