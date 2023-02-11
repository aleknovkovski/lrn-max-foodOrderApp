import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";

function MealItemForm(props) {
    function submitHandler (event) {
        event.preventDefault();
        props.addToCart(4);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;
