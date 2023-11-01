function HelloWorld() {
    const url2 = 'https://placehold.co/300x400/rose/white'

    return(
        <div>
            <h1>Meu primeiro componente...</h1>
            <p><img src={url2} alt='Imagem 300x400 rosa' /></p>
        </div>
    )
}

export default HelloWorld