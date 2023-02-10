import React, {useContext} from 'react';

const Context = React.createContext();

const CartContext = {
    items: [],
    totalAmount: 0
}

export function CartProvider(props) {
    return (
        <Context.Provider value={CartContext}>
            {props.children}
        </Context.Provider>
    )
}

export default function useCartContext () {
    return useContext(Context);
}