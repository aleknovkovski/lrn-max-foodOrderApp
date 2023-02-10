import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";

function App() {
    return (<>
        <Modal>Testing Modal yeyeye</Modal>
        <Header/>
        <main>
            <Meals/>
        </main>
    </>);
}

export default App;
