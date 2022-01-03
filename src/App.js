import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Counter from "./components/Counter"
import ContactList from "./components/ContactList";
import HomePage from "./pages/HomePage"

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={
                        <div>
                            {<HomePage/>}
                        </div>
                    }/>
                    <Route path="/counter" element={<Counter/>}/>
                    <Route path="/contacts" element={<ContactList/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
