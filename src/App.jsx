import Header from './Header'
import Conteudo from './Conteudo'
import "./App.css"

function App(){
  return (
    <div className="conteudo-principal">
      <Header />
      <Conteudo />
      <footer className="footer">
        <p>
          Feito por @ojuliocode
        </p>
      </footer>
    </div>
  )
}

export default App