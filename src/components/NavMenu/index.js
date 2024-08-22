import { Link } from "react-router-dom";
import './style.css';
import styles from './styles.module.css';
import styled from 'styled-components';

const NavMenu = () => {

    const style = {
        list:{ 
            backgroundColor: '#78e08f'
        }
    }

    return(
        <nav>
            <h1 className={styles.heading}>MarketPlace</h1>
            <ul style={style.list}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavMenu;