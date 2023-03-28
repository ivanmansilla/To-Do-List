import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';


const Navbar = () => {
    const [disabled, setDisabled] = useState(true);
    return (
        <nav>
            <Link to="/"><button id = "pepe">Login</button></Link>
            <Link to="/AddTask"><button  id = "pepe" disabled={disabled}>Add Task</button></Link>
        </nav>
    )
}

export default Navbar;

