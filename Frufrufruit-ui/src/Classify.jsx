import './App.css'
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import { uploadCsv } from './services';

export default function Classify() {
    const navigate = useNavigate();

    const sendFile = async (file, option) => {
        try {
            const blob = await uploadCsv(file, option);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'result.csv';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            console.log('Arquivo enviado com sucesso!');

            navigate('/results', { state: { file: blob } });
        } catch (error) {
            alert('Erro ao enviar o arquivo: ' + error.message);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const file = document.getElementById('fileInput').files[0];
        const option = document.querySelector('input[name="classificationMethod"]:checked').value;
        sendFile(file, option);
    };

    return (
        <div>
            <Navbar />
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    width: 500,
                    height: 50,
                    borderRadius: 10
                }}
            >
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
                <div 
                    style={{
                        display: 'flex',
                        margin: 30, 
                        padding: 10, 
                        backgroundColor: 'white',
                        color: 'black',
                        width: 500,
                        height: 50,
                        borderRadius: 10
                    }}
                >
                    <label style={{paddingRight: 10, paddingLeft: 10}}>Arquivo: </label>
                    <input
                        style={{
                            display: 'block',
                            marginBottom: 10
                        }}
                        type="file"
                        id="fileInput"
                        name="fileInput"
                    />
                </div>
                <button type='submit'>Classificar</button>
            </form>
        </div>
    );
}