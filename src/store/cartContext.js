import React, {useContext, useReducer} from 'react';

const Context = React.createContext();

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    return defaultCartState;
};

export function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const CartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount
    };

    return (
        <Context.Provider value={CartContext}>
            {props.children}
        </Context.Provider>
    )
}

export default function useCartContext () {
    return useContext(Context);
}