import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [lanches, setLanches] = useState(
        [
            {
                "id": 1,
                "nome": "Pizza",
                "local": "Divina Pizza",
                "preco": 69.99,
                "img": "https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg"
            },
            {
                "id": 2,
                "nome": "Batata Frita",
                "local": "Batata do Robertão",
                "preco": 15.99,
                "img": "https://applicativa-marketplace-prod.s3.amazonaws.com/como-fazer-batata-frita-1.jpg",
            },
            {
                "id": 3,
                "nome": "Camarão",
                "local": "Rei do Camarão",
                "preco": 79.90,
                "img": "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/02/camarao_empanado.jpg"
            }
        ]
    );

    return <AppContext.Provider value={{ carrinho, setCarrinho, lanches, setLanches }}>
        {children}
    </AppContext.Provider>;
}