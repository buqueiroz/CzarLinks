function toggleMode() {
    const html = document.documentElement
    
    html.classList.toggle('light')
    
    // pegar imagem
    const img = document.querySelector('#profile img')
    const alt = document.querySelector('img')

    // substituir imagem
    if(html.classList.contains('light')){
        // se tiver loght mode, adiciona imagem light
        img.setAttribute('src', './assets/Ellipse.png')
        alt.setAttribute('alt', 'Foto de Perfil do Czar, uma garota usando óculos fazendo bico')
    } else {
        // se não tiver loght mode, adiciona imagem dark
        img.setAttribute('src', './assets/avatar.png')
        alt.setAttribute('alt', 'Foto de Perfil do Czar, uma garota usando óculos bebendo frappuccino do starbucks')
    }
}