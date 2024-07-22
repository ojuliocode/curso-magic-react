import "./Header.css"

function Header(){
  let links = ["Home", "Sobre mim", "Projetos"]
    
  // () => {}
  return (
      <header className="header">
        <h1> @ojuliocode </h1>
        <ul className="links">
          {
            links.map((linkDaVez) => {
                return <li><a href=""> {linkDaVez} </a></li>
            })
          }
        </ul>
      </header>
    )
  }
  
export default Header