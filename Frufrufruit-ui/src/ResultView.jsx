import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

export default function ResultsView() {
    const location = useLocation();
    const file = location.state?.file;

    // Create a download link for the file if it exists
    const url = file ? window.URL.createObjectURL(file) : null;

    return (
        <div>
            <Navbar />
            <h2>Resultado da classificação</h2>
            {file ? (
                <a href={url} download="result.csv">Download Result File</a>
            ) : (
                <p>Nenhum arquivo disponível.</p>
            )}
        </div>
    );
}