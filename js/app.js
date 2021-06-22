/*MEnu Hamburguesa*/
const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', () =>{

  const  itemMenu = Array.from(document.querySelectorAll('.links'));
   itemMenu.map(item => item.classList.toggle('active'))
   
})

hamburguer.addEventListener('click',() =>{
 
  const menu = document.querySelector('.menu');
  menu.classList.toggle('center')
})


/*Primer Slider*/
let indice=1;
muestraSlides(indice);

 function avanzaSlide(n){
  muestraSlides(indice += n);
} 

function posicionSlide(n){
  muestraSlides(indice = n);
}

setInterval(function tiempo(){
    muestraSlides(indice+=1)
},3500);

function muestraSlides(n){
  let i;
  let slides = document.getElementsByClassName('mislider');
  let puntos = document.getElementsByClassName('punto')

  if(n>slides.length){
    indice=1;
  }
  if(n<1){
    indice = slides.length;
  }
  for(i=0;i< slides.length;i++){
    slides[i].style.display = 'none';

  }
  for(i=0;i< puntos.length;i++){
    puntos[i].className = puntos[i].className.replace("active", "")
  }

  slides[indice-1].style.display = 'block';
  puntos[indice-1].className += ' active';
}

//////////////////////*DARK MODE*/////////////////////

let logo = document.querySelector(".logo")


logo.addEventListener('click',() => {
    document.body.classList.toggle('dark');
    
})