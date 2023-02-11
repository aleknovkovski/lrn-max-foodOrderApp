import React, {useContext, useReducer} from 'react';

const Context = React.createContext();

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const newState = { ...state };
        
        const item = newState.items.find((item)=> {
            return item.id === action.item.id
        })

        item ?
            item.amount += action.item.amount
            : newState.items.push(action.item);

        newState.totalAmount +=
            action.item.amount * action.item.price;

        return newState;
    }
    return defaultCartState;
};

export function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    function addItemToCartHandler (item) {
        dispatchCartAction({type: 'ADD', item: item});
    }

    const CartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler
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