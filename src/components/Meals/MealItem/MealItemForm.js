import classes from './MealItemForm.module.css';

function MealItemForm (props) {
  return (
    <form className={classes.form}>
        <input type="number" max="5" defaultValue="1"/>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
