import { Link } from "react-router-dom"
import FruFruFruitLogo from "./assets/FrufrufruitLogo.png";


export default function Navbar() {
    return (
    <header>
        <div className="navBar">
            <Link className="navButton" to="/">Home</Link>
            <Link className="navButton" to="/classify">Classificar</Link>
            <div style={{display: "flex", alignItems: "center", paddingLeft: 420, paddingTop: 7}}>
                <img style={{width: 275, height: 55}} src={FruFruFruitLogo} alt="Frufrufruit Logo" />
            </div>          
        </div>
    </header>       
    )
}
