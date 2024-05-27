import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Papa from "papaparse";

export default function ResultsView() {
    const location = useLocation();
    const file = location.state?.file;
    const [data, setData] = useState([]);
    const url = file ? window.URL.createObjectURL(file) : null;

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const csvData = Papa.parse(event.target.result, {
                    header: true,
                    dynamicTyping: true,
                });
                setData(csvData.data);
            };
            reader.readAsText(file);
        }
    }, [file]);

    return (
        <div>
            <Navbar />
            <h2>Resultado da classificação</h2>
            {file ? (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                {data.length > 0 &&
                                    Object.keys(data[0]).map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Object.values(row).map((value, colIndex) => (
                                        <td key={colIndex}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Nenhum arquivo disponível.</p>
            )}
            <br />
            <a href={url} download="result.csv">Baixar arquivo .csv</a>
        </div>
    );
}