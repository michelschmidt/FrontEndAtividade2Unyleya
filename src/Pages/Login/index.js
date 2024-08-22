import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div>
            <h1>Minha Tela de Login</h1>
            <a href="/">Voltar Home</a>
            <br/>
            <Link to={'/'}>Volta Home com Link</Link>
        </div>
    );
}

export default Login;