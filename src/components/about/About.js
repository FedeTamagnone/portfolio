/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { Link } from "react-router-dom";
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./About.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const About = () => {

    return ( 
        <main id="about">
            <h2 className="titulo">ABOUT ME</h2>
            <section className="info">
                <div>FOTO</div>
                <div><p>¡Hola! Soy Federico, tengo 29 años y vivo en Córdoba Argentina. Soy desarrollador web front-end</p></div>
            </section>
            <section>
                <h2 className="titulo">SKILLS</h2>
                <ul className="habilidades">
                    <img src="/logos/html.png" alt="html" />
                    <img src="/logos/css.png" alt="css" />
                    <img src="/logos/js.png" alt="js" />
                    <img src="/logos/react.png" alt="react" />
                    <img src="/logos/sass.png" alt="sass" />
                    <img src="/logos/fire.png" alt="firebase" />
                    <img src="/logos/gitBash.png" alt="git" />
                    <img src="/logos/github.png" alt="github" />
                    <img src="/logos/responsive.png" alt="responsive" />
                </ul>
            </section>

            <section>
                <Link to="/contact">
                    <h2>CONTACT</h2>
                </Link>
            </section>
        </main>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default About;