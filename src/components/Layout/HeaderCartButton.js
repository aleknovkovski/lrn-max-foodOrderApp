import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import useCartContext from "../../store/cartContext";
import {useEffect, useState} from "react";

function HeaderCartButton(props) {

    const {items} = useCartContext()
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    useEffect(() => {

        if (numberOfCartItems === 0) {
            return;
        }

        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [numberOfCartItems]);

    return (
        <button className={btnClasses} onClick={props.onButtonClick}>
           <span className={classes.icon}>
               <CartIcon/>
           </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}


export default HeaderCartButton;
