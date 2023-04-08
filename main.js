function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if(elemento != null && elemento.localName === 'audio')
    elemento.play();
    else
    console.log('Elemento não encontrado ou seletor inválido!')
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(elemento => {
    const instrumento = elemento.classList[1];
    const idAudio = `#som_${instrumento}`;
    elemento.onclick = ()=>{
        tocaSom(idAudio);
    }
    elemento.onkeydown = (evento)=>{
        if(evento.code === 'Space' || evento.code === 'Enter')
        elemento.classList.add('ativa');
    }

    elemento.onkeyup = ()=>{
        elemento.classList.remove('ativa');
    }
});