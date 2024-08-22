import { Outlet, useLocation, useParams } from "react-router-dom";

const Product = () => {

    const { id } = useParams();
    const { state } = useLocation();

    console.log(id);

    return( 
        <div>
            <h2>Tela interna de produtos</h2>
            <p>O id do produto é {id}</p>
            <p>A matricula do produto é: {state}</p>
            <Outlet/>
        </div>
    );
}

export default Product;