import './App.css'
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import { uploadCsv } from './services';

export default function Classify() {
    const navigate = useNavigate();

    const sendFile = async (file, option) => {
        try {
            const blob = await uploadCsv(file, option);
            console.log('Arquivo enviado com sucesso!');
            navigate('/results', { state: { file: blob } });
        } catch (error) {
            alert('Erro ao enviar o arquivo: ' + error.message);
        }
    };

    const handleSubmit = (event) => {
        let option = '';
        event.preventDefault();
        const file = document.getElementById('fileInput').files[0];
        try{
            option = document.querySelector('input[name="classificationMethod"]:checked').value;
        } catch (error){
            alert('Selecione um método de classificação!')
        }
        
        if(!file) 
            alert('Selecione um arquivo!');
        else sendFile(file, option);
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