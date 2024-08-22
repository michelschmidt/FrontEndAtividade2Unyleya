import { Link } from "react-router-dom";
const Home = () => {
    return(
        <div>
            <h1>Homepage</h1>
            <a href="/login">Vá para Login</a>
            <br/>
            <Link to={'/login'}>Vá para o Login com Link</Link>
        </div>
    );
}
export default Home;