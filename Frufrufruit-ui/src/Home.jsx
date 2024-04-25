import './App.css'
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <h2>Classificador de frutas por especie</h2>
            <h3>Envie seus dados e classificamos para você as especies das frutas</h3>
            <button onClick={() => navigate("/classify")}>Classificar</button>
        </div>
    );
}