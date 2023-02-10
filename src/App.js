import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";
import Cart from "./components/Cart/Cart";

function App() {
    return (<>
        <Modal><Cart/></Modal>
        <Header/>
        <main>
            <Meals/>
        </main>
    </>);
}

export default App;
