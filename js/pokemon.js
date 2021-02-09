/*---------------------------------------------NODOS--------------------------------------------------*/

//IMAGEN DEL MODELO NORMAL DE ESPALDAS (MB)
const mb=document.getElementById('mb')

//IMAGEN DEL MODELO NORMAL DE FRENTE (MF)
const mf=document.getElementById('mf')

//IMAGEN DEL MODELO SHINY DE ESPALDAS (FB)
const fb=document.getElementById('fb')

//IMAGEN DEL MODELO SHINY DE FRENTE (FF)
const ff=document.getElementById('ff')


//TEXTO DEL NOMBRE
const nombre=document.getElementById('name')

//TEXTO DE LA HABILIDAD
const habilidad=document.getElementById('habilidad')

//LISTA DE MOVIMIENTOS
const moviList=document.getElementById('movilist')

//LISTA DE POTENCIA
const powerList=document.getElementById('powerlist')

//LISTA DE PRECISION
const preciList=document.getElementById('precilist')


/*---------------------------------------------FRAGMENTS---------------------------------------------*/

//FRAGMENT DE MOVIMIENTOS
const moviFragment=document.createDocumentFragment()

//FRAGMENT DE POTENCIAS
const powerFragment=document.createDocumentFragment()

//FRAGMENT DE PRECISIONES
const preciFragment=document.createDocumentFragment()



/*--------------------------------------------VARIABLES------------------------------------------------*/



/*-----------------------------------------------FUNCIONES-----------------------------------------------*/

//FUNCION PARA INICIAR EL MAPA Y MARCAR LAS COORDENADAS DESDE LAS QUE SE ACCEDE*/
function iniciarMap(){

  function localizacion(posicion){
    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;
    var coord = {lat:latitude ,lng: longitude};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }

  function error(){
    output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";

  }
  navigator.geolocation.getCurrentPosition(localizacion,error);

}

//FUNCION PARA GENERAR UN NUMERO ALEATORIO
function aleatorio(min,max){
  return Math.floor(Math.random()*(max-min)+min)
}

//FUNCION PARA AÑADIR LOS MOVIMIENTOS, POTENCIAS Y PRECISIONES
function mostrarMovimientos(url){
  
  fetch(url)
    .then(response=>response.json())
    .then(json=>{

      console.log(json)

      //CREO Y ANADO EL NOMBRE
      let movi=document.createElement('LI')

      //LE DOY CLASE
      movi.classList.add("view__listItem")

      //LE DOY VALOR
      movi.innerHTML=json.name


      //CREO Y AÑADO LA POTENCIA
      let power=document.createElement('LI')

      //LE DOY CLASE
      power.classList.add("view__listItem")

      //LE DOY VALOR
      if(json.power==null){
        power.innerHTML=0
      }else{
        power.innerHTML=json.power
      }

      //CREO Y AÑADO LA PRECISION
      let preci=document.createElement('LI')

      //LE DOY CLASE
      preci.classList.add("view__listItem")

      //LE DOY VALOR
      if(json.accuracy==null){
        preci.innerHTML="Movimiento de estado"
      }else{
        preci.innerHTML=json.accuracy
      }


      //AÑADO LOS 3 ELEMENTOS A SUS RESPECTIVAS LSITAS
      moviList.appendChild(movi)
      powerList.appendChild(power)
      preciList.appendChild(preci)



    })


}



/*------------------------------------------------EVENTOS----------------------------------------------*/
const mostrarPokemon=(event)=>{

  //alert("Se mostrara al pokemon mas cercano a tu posicion")

  //SE HACE EL FETCH AL API DE LOS POKEMON PARA PREGUNTAR POR UN POKEMON ALEATORIO
  fetch('https://pokeapi.co/api/v2/pokemon/'+aleatorio(1,579)+'/')
    .then(response=>response.json())
    .then(json=>{

      //AÑADO LOS SPRITES A LAS IMAGENES
      mb.src=json.sprites.back_default
      mf.src=json.sprites.front_default
      fb.src=json.sprites.back_shiny
      ff.src=json.sprites.front_shiny

      //AÑADO EL NOMBRE
      nombre.innerHTML="Nombre: "+json.name
      
      //AÑADO LA HABILIDAD
      habilidad.innerHTML="Habilidad: "+json.abilities[0].ability.name

      //LLAMO A UNA FUNCION PARA AÑADIR LOS 4 MOVIMIENTOS A LAS LISTAS
      for(let i=0;i<=3;i++){
        mostrarMovimientos(json.moves[i].move.url)
      }


    })

}


/*-------------------------------------------------LISTENERS-------------------------------------------*/
document.addEventListener('DOMContentLoaded',mostrarPokemon)