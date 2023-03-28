import './Login.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const isValidPassword = (password) => {
        const hasMayus = password.match(/[A-Z]/);
        const hasNumber = password.match(/\d/);
        return hasMayus && hasNumber;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!isValidPassword(password)) {
            alert("La contraseña debe contener una mayúscula y un número.");
            return;
        }else{
            navigate('/AddTask');
        }
        // Código para iniciar sesión
        };

    return (
    <form onSubmit={handleSubmit}>
        <div>
        <input 
            id = "inptUsername"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={handleUsername}
        />
        </div>
        <div>
        <input
            type="password"
            placeholder="Debe tener una Mayus y un Numero"
            value={password}
            onChange={handlePassword}
        />
        </div>
        <button id = "btn"  type="submit">Iniciar sesión</button>
    </form>
    );
    

}

export default Login;