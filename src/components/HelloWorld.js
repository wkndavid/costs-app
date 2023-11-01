import Frases from "./Frases"

function HelloWorld() {
    const url2 = 'https://placehold.co/300x400/rose/white'

    return(
        <div>
            <Frases />
            <h1>componente...</h1>
            <p><img src={url2} alt='Imagem 300x400 rosa' /></p>
            <Frases />
        </div>
    )
}

export default HelloWorld