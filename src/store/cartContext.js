import React, {useContext, useReducer} from 'react';

const Context = React.createContext();

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    const newState = { ...state };

    if (action.type === "ADD") {
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

    if (action.type === "REMOVE") {
        const item = newState.items.find((item)=> {
            return item.id === action.id
        })

        if(item.amount > 0) {
            item.amount -= 1
            newState.totalAmount -= item.price
        }

        if (item.amount === 0) {
            newState.items = newState.items.filter((item)=> {
                return item !== item
            })
        }

        return newState;
    }
    return defaultCartState;
};

export function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    function addItemToCartHandler (item) {
        dispatchCartAction({type: 'ADD', item: item});
    }

    function removeCartItemHandler (id) {
        dispatchCartAction({type: 'REMOVE', id: id});
    }


    const CartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeCartItemHandler
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