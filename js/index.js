//--------------------------------------------NODOS-----------------------------------------

//CONTENDOR DE INTERACCION
const interaccion=document.getElementById('interaccion')

//BOTON DE EMPEZAR
const boton=document.getElementById('boton')


//CONTAINER DE POKEMON
const pokemonContainer=document.getElementById('pokemon')

//AUDIO DE POKEMON
const pokemonAudio=document.getElementById('pokemp3')



//CONTAINER DE PERROS
const perrosContainer=document.getElementById('perros')

//AUDIO DE PERROS
const perrosAudio=document.getElementById('perromp3')


//-------------------------------------------VARIABLES-----------------------------------*/

//CONTADOR DE VOLUMEN
let contVolumen


//EVENTOS

//ELIMINA EL CONTENEDOR DE LA INTERACCION
const eliminar=(event)=>{
    interaccion.remove()

    setTimeout(function (){pokemonContainer.addEventListener('mouseover',audio)},500)
    setTimeout(function (){perrosContainer.addEventListener('mouseover',audio)},500)
}

//SUBIR EL VOLUMEN PROGRESIVAMENTE
function volumenProgresivo(event){

    if(event.path[0].classList[1]=="indexGallery__article--pokemon"){
        let subir= setInterval(function(){
                    pokemonAudio.volume=contVolumen
                    contVolumen=contVolumen+0.1
                    if(contVolumen>=0.4){
                        clearInterval(subir)
                    }
                    },500)
        
    }else if(event.path[0].classList[1]=="indexGallery__article--perros"){
        let subir= setInterval(function(){
            perrosAudio.volume=contVolumen
            contVolumen=contVolumen+0.1
            if(contVolumen>=0.4){
                clearInterval(subir)
            }
            },500)
    }
}

//PONE LOS AUDIOS
const audio=(event)=>{

        contVolumen=0.1

    if(event.path[0].classList[1]=="indexGallery__article--pokemon"){
        pokemonAudio.volume=contVolumen
        pokemonAudio.play()
        volumenProgresivo(event)
    }else if(event.path[0].classList[1]=="indexGallery__article--perros"){
        perrosAudio.volume=contVolumen
        perrosAudio.play()
        volumenProgresivo(event)
    }

}


//QUITA LOS AUDIOS
const quitarAudio=(event)=>{

    if(event.path[0].classList[1]=="indexGallery__article--pokemon"){
        pokemonAudio.pause()
        pokemonAudio.load()
    }else if(event.path[0].classList[1]=="indexGallery__article--perros"){
        perrosAudio.pause()
        perrosAudio.load()
    }
}


//LISTENERS

//ELIMINAR EL CONTENDOR DE INTERACCION
boton.addEventListener('click',eliminar)

//PONER Y QUITAR LOS AUDIOS
pokemonContainer.addEventListener('mouseout',quitarAudio)
perrosContainer.addEventListener('mouseout',quitarAudio)