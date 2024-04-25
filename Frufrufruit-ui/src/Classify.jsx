import './App.css'
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";

export default function Classify() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <form style={{
                    backgroundColor: 'white',
                    color: 'black',
                    width: 500,
                    height: 50,
                    borderRadius: 10}}>
                <div style={{display: 'flex', margin: 30, padding: 10}}>
                    <label>Processamento: </label>
                    <div>
                        <input type="radio" id="randomForest" name="classificationMethod" value="Random Forest" />
                        <label htmlFor="randomForest">Random Forest</label>
                    </div>
                    <div>
                        <input type="radio" id="decisionTree" name="classificationMethod" value="Decision Tree" />
                        <label htmlFor="decisionTree">Decision Tree</label>
                    </div>
                </div>
                <br />
                <div style={{display: 'flex', margin: 30, padding: 10, backgroundColor: 'white',
                    color: 'black',
                    width: 500,
                    height: 50,
                    borderRadius: 10,}}>
                    <label style={{paddingRight: 10, paddingLeft: 10}}>Arquivo: </label>
                <input style={{
                    display: 'block',
                    marginBottom: 10}}
                    type="file" id="fileInput" name="fileInput" />
                </div>
                <button onClick={() => navigate("/results")}>Classificar</button>
            </form>
        </div>
    );
}