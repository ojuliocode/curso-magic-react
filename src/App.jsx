import Header from './componentes/Header/Header'
import Conteudo from './componentes/Conteudo/Conteudo'
import Projetos from './componentes/Projetos/Projetos'
import "./App.css"

function App(){
  return (
    <div className="conteudo-principal">
      <Header />
      <Conteudo />
      <Projetos />
      <footer className="footer">
        <p>
          Feito por @ojuliocode
        </p>
      </footer>
    </div>
  )
}

export default App