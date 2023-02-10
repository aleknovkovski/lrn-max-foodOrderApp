import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";


function App() {

    const [cartIsShown, setCartIsShown] = useState(false);

    return (<>
        {cartIsShown && <Cart/>}
        <Header/>
        <main>
            <Meals/>
        </main>
    </>);
}

export default App;
