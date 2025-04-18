import Layout from "../layout/Layout";
import mainStyle from "../assets/styles/main.module.css";
import beeSVG from "../assets/img/bee.svg";
import { Link } from "react-router-dom";
function Main() {
    return (
        
        <Layout>
            <h3>¡¡FELICIDADES, ESTÁS INVITADO!!</h3>
            <img src={beeSVG} alt="Imagen abejita" className={mainStyle.bee2}/>
            <p className={mainStyle.introBaby}>AL BABY SHOWER DE</p>
            <h1>
                Marco y Milca
                <img src={beeSVG} alt="Imagen abejita" className={mainStyle.bee1}/>
            </h1>
            <p>Hora: 3PM</p>
            <p>P.° Paol Harris, Bugambilias , 62556</p>
            <p>Jiutepec,Mor</p>
            <a href="https://www.google.com/maps?q=18.9150906,-99.1890693">Jardín: Mi Jardincito</a>
            <p>777-168-8079</p>
            <a href="https://www.amazon.com.mx/baby-reg/marcoantoniochvez-rodrguez-agosto-2025-jiutepec/24GIY4HG1QHY9?ref_=cm_sw_r_cp_ud_dp_RKW1RMT2071PS16RG15B">Mesa de regalos</a>
            <Link to="/confirmar">Confirmar asistencia</Link>
        </Layout>
        );
}

export default Main;