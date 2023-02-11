import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import useCartContext from "../../store/cartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
    const {items, totalAmount} = useCartContext()
    const cartItems = (
        <ul className={classes['cart-items']}>
            {items.map((item) => {
                return <CartItem {...item} key={item.id}/>
            })}
        </ul>
    );

    return (
        <Modal closeThisModal={props.closeCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.closeCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
