import { useState } from "react";
import ListaNumeros from "./ListaNumeros";

export default function BotaoCliqueAqui() {
    const [showListaNumeros, setShowListaNumeros] = useState(false);

    const handleClick = () => {
        setShowListaNumeros(true);
    };

    return (
        <div>
            <button onClick={handleClick}>
                Clique aqui
            </button>
            {showListaNumeros && <ListaNumeros />}
        </div>
    );
}