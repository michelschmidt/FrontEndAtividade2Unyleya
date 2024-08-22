import { Link, useLocation, useSearchParams } from "react-router-dom";
import './style.css';

const Products = () => {

    const [searchParams, setsearchParams] = useSearchParams();
    const { state } = useLocation();

    return(
        <div>
            <h2>Lista de Produtos</h2>
            <p>Abaixo uma lista de Produtos</p>
            <p>Usuario recem cadastrado: {state}</p>

            <p>Página: {searchParams.get('page')}</p>

            <br/>
            <Link to="/product/1" state={'1AFB81'}>Link para o Produto 1</Link>
            <br/>
            <Link to="/product/1/reviews">Link para as Reviews</Link>
            <br/>
            <Link to="/product/2">Link para o Produto 2</Link>
            <br/>
            <Link to="/product/5">Link para o Produto 5</Link>

            <ul className="pagination">
                <li><button onClick={() => setsearchParams({page:1})}>1</button></li>
                <li><button onClick={() => setsearchParams({page:2})}>2</button></li>
                <li><button onClick={() => setsearchParams({page:3})}>3</button></li>
                <li><button onClick={() => setsearchParams({page:4})}>4</button></li>
            </ul>

        </div>
    );
}

export default Products;