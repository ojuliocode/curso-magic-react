import "./Header.css"

function Header(){
    return (
      <header className="header">
        <h1> @ojuliocode </h1>
        <ul className="links">
          <li> <a href=""> Home </a></li>
          <li> <a href=""> Sobre mim </a></li>
          <li> <a href=""> Projetos  </a></li>
        </ul>
      </header>
    )
  }
  
export default Header