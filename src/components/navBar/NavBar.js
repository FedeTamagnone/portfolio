/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { Link } from "react-router-dom";
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./NavBar.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const NavBar = () => {
    return ( 
        <section id="barra">
            <nav  className="barraNavegacion">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/#about">ABOUT ME</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </section> 
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default NavBar;