import {Link} from "react-router-dom"
const HomePage = () => {
    return (
        <div>
            <h1>React Redux Toolkit</h1>
            <p>React project to show an increment/decrement counter and a contact list</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to="/counter">Counter Page</Link>
            </p>
            <p>
                <Link to="/contacts">Contact List Page</Link>
            </p>
        </div>
    )
}

export default HomePage
