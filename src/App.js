import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";


function App() {

    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    return (<>
        {cartIsShown && <Cart/>}
        <Header showCart={showCartHandler} />
        <main>
            <Meals/>
        </main>
    </>);
}

export default App;
