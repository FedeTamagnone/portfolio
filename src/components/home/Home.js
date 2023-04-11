/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import Footer from "../footer/Footer.js";
import About from "../about/About.js";
//ESTILOS
import "./Home.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const Home = () => {

    return (
        <main>
            <section id ="home" className="home">
                <div className="hello">HELLO</div>
                <div className="nombre">TAMAGNONE FEDERICO</div>
                <div className="dev">FRONTEND DEVELOPER</div>
            </section>
            <About/>
            <Footer/>
        </main> 
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Home;