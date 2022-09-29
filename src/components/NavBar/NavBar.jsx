import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <nav className='navegation'>
            <img className='logo' src='https://lightbox-ar.netlify.app/img/logo.png' alt="logo"></img>
            <ul className='list'>
                <li><a href="/">Incio</a></li>
                <li><a href="/">Catalogo</a></li>
                <li><a href="/">Contacto</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar