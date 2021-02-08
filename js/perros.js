//----------------------------------------------NODOS-----------------------------------------*/

//GALERIA
const galeria=document.getElementById('gallery')

//IMAGEN
const imagen=document.getElementById('imageContainer')

//TEXTO DEL NOMBRE
const nombre=document.getElementById('nombre')

//TEXTO DE LA EDAD
const edad=document.getElementById('edad')

//TEXTO DE LA RAZA
const raza=document.getElementById('raza')


//------------------------------------------FRAGMENTS--------------------------------------

//GUARDA LOS ITEMS DE LA GALERIA
const items=document.createDocumentFragment()

//-------------------------------------------VARIABLES----------------------------------


//------------------------------------------FUNCIONES-----------------------------------

//DA UN NUMERO ALEATORIO
function aleatorio(min,max){

    return Math.floor(Math.random()*(max-min)+min)

}


//-------------------------------------------EVENTOS--------------------------------------

//PIDE LOS DATOS DE LOS 12 PERROS A LA API (thedogapi) Y CREA LOS ELEMENTOS
const mostrarPerretes=(event)=>{

    for(let i=0;i<=11;i++){

    fetch("https://api.thedogapi.com/v1/images/search?api_key=66b3bd74-9949-4ec0-b7fa-ba834bdf15ea")
        .then(response=>response.json())
        .then(json=>{

            console.log(json)

            let link=document.createElement('A')

            link.setAttribute("href","#view")

            let perro=document.createElement('ARTICLE')

            perro.classList.add("gallery__item")
            perro.style.backgroundImage="url('"+json[0].url+"')"
            if(json[0].breeds[0]){
                perro.setAttribute("name",json[0].breeds[0].name)
            }else{
                perro.setAttribute("name","Mezcla")
            }

            perro.addEventListener("click",visualizarPerro)

            link.appendChild(perro)

            items.appendChild(link)

            if(i==11){
                galeria.appendChild(items)
            }


        })
    }



}


//VISUALIZA LOS VALORES DEL PERRO
const visualizarPerro=(event)=>{

    console.log(event)

    //ESTABLECE LA IMAGEN
    imagen.style.backgroundImage=event.target.style.backgroundImage

    //NOMBRE DEL PERRO
    fetch("https://randomuser.me/api/")
        .then(response=>response.json())
        .then(json=>{
            console.log(json)

            nombre.innerHTML="Nombre: "+json.results[0].name.first
        })

    //EDAD DEL PERRO
    edad.innerHTML="Edad: "+aleatorio(1,10)+" años"

    //RAZA DEL PERRO
    raza.innerHTML="Raza: "+event.target.attributes[1].value

}


//-------------------------------------------LISTENERS-----------------------------------
document.addEventListener('DOMContentLoaded',mostrarPerretes)