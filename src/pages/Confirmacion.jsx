import Layout from "../layout/Layout";
import mainStyle from "../assets/styles/main.module.css";
import beeSVG from "../assets/img/bee.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Main() {
    const [confirmed, setConfirmed] = useState(false);
    const [guests, setGuests] = useState({
        name: "",
        children: 0,
        adults: 0,
    });
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrorMsg("");
        if (name === "children" || name === "adults") {
            let parsedValue = parseInt(value, 10);
            if (isNaN(parsedValue)) {
                parsedValue = 0;
            }
            if (parsedValue < 0) {
                parsedValue = 0;
            }
            if(parsedValue > 4) {
                parsedValue = 4;
                setErrorMsg(`No puedes invitar más de 4 ${name  === "children" ? "niños" : "adultos"}`);
            }
            setGuests((prevState) => ({
                ...prevState,
                [name]: parsedValue
            }));
            e.target.value = parsedValue;
            return;
        }
        setGuests((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
        setConfirmed(!confirmed);
        try{
            setErrorMsg("Enviando confirmación...");
            const response = await axios.post("https://invitacion-backend-emrq.vercel.app/confirmAsistencia", guests);
            if (response.status === 200) {
                setErrorMsg("Asistencia confirmada, ¡gracias!");
                setConfirmed(true);
            } else {
                setErrorMsg("Error al confirmar asistencia, intenta de nuevo.");
                console.log(guests)
            }
        }catch (error) {
            setErrorMsg("Error al confirmar asistencia, intenta de nuevo.");
            console.log(error);
            console.log(guests)
        }
        
    }
    return (
        <Layout>
            <h2 className={mainStyle.introBaby}>BABY SHOWER</h2>
            <h1>
                Marco y Milca
                <img src={beeSVG} alt="Imagen abejita" className={mainStyle.bee3}/>
            </h1>
            <form onSubmit={handleSubmit} className={mainStyle.form}>
                <label>
                    Nombre:
                    <input type="text" name="name" required onChange={handleChange}/>
                </label>
                <h2>CANTIDAD DE ACOMPAÑANTES</h2>
                {errorMsg && <p className={mainStyle.error}>{errorMsg}</p>}
                <label>
                    Niños:
                    <input type="number" name="children" required onChange={handleChange}/>
                    <img src={beeSVG} alt="Imagen abejita" className={mainStyle.bee4}/>
                </label>
                <label>
                    Adultos:
                    <input type="number" name="adults" required onChange={handleChange}/>
                </label>
                <h2 className={mainStyle.introBaby}>CONFIRMAR ASISTENCIA</h2>
                <button className={mainStyle.sello}>
                    {confirmed ? <div></div> : null}
                </button>
            </form>
            <Link to="/">Detalles de la invitación</Link>
        </Layout>
        );
}

export default Main;