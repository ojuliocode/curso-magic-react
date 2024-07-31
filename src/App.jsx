import Header from './componentes/Header/Header'
import Conteudo from './componentes/Conteudo/Conteudo'
import Projetos from './componentes/Projetos/Projetos'
import "./App.css"
import { useState } from 'react'

function App(){
  const [projetos, setProjetos] = useState([
    {linkDoGithub: 'https://github.com', caminhoDaImagem: 'src/assets/facebook.png'},
    {linkDoGithub: 'https://github.com', caminhoDaImagem: 'src/assets/tesla.png'},
    {linkDoGithub: 'https://github.com', caminhoDaImagem: 'src/assets/vite.png'},
  ])
  return (
    <div className="conteudo-principal">
      <Header />
      <Conteudo />
      <Projetos projetos={projetos}/>
      <footer className="footer">
        <p>
          Feito por @ojuliocode
        </p>
      </footer>
    </div>
  )
}

export default App