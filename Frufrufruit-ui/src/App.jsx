import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Classify from './Classify'
import Cabecalho from './Navbar'
import ResultsView from './ResultView'
function App() {

  return (
    <>
      <Router>
        <Cabecalho  />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/classify" element={<Classify />} />
          <Route path="/results" element={<ResultsView />} />
          <Route path='*' element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
