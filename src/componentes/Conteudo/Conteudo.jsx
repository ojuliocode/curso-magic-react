import { useState } from 'react'
import "./Conteudo.css"

function Conteudo() {
    const [artigo, setArtigo] = useState("")

    function clicouNoBotao() {
        setArtigo(
            "Sou programador, trabalho há 5 anos como dev, e tenho conhecimento em diversas tecnologias"
        )
    }

    return (
        <main className="conteudo">
            <section className="conteudo-textual">
                <h2 className="texto-introducao"> Meu nome é @ojuliocode </h2>
                <h3> Sou desenvolvedor web </h3>
                <button className='botao-saiba-mais' onClick={clicouNoBotao}>
                    Saiba mais
                </button>
                <article>
                    {artigo}
                </article>
            </section>
            <img className="ilustracao" src="src/assets/programmer.png" alt="" />
        </main>
    )
}

export default Conteudo