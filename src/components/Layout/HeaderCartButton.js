import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import useCartContext from "../../store/cartContext";

function HeaderCartButton(props) {
    const {items} = useCartContext()
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);


    return (
        <button className={classes.button} onClick={props.onButtonClick}>
           <span className={classes.icon}>
               <CartIcon/>
           </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}


export default HeaderCartButton;
