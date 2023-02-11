import React, {useContext, useReducer} from 'react';

const Context = React.createContext();

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
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