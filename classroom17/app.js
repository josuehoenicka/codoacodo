///Comentar ctrl k c
///Descomentar  ctrl k u
//  alert("Hola Mundo!");

let saludo = "Hola Mundo! desde archivo js";
console.log(saludo);


const title = document.getElementById('title');
console.log(title);
const titles = document.getElementById('titl');
console.log(titles);

// // // va a retornar un elemento por su id  document.getElementById('') 
// // const titlee = document.getElementById('title');
// // //me va a imprimir todo el elemento
// // console.log(titlee);
// // //IMPORTANTE : Si se coloca un id que no existe, vamos a obtener 'null' - 

// // //Puedo hacer uso de mi constante en mi consola del navegador 

// // //para cambiar el texto de la const title - uso innerHtml


title.innerHTML = "Curso De las clases ♥ holaaaaaa ";     //Cambio en la consola del navegador
console.log(title);
title.innerText = 'modificacion insertando texto en el html';

// // //Si actualizo la pagina vuelvo como mi codigo 

title.innerHTML = 'Curso Codo a Codo';


const p = document.querySelector('p');
p.innerHTML = ' Hola Cambios de Etiqueta p'; 


const descripciones = document.getElementsByTagName('p');
console.log(descripciones);

descripciones.innerHTML = 'Todas la etiquetas p ';

// // //Por clase 

const itemss = document.getElementsByClassName('list-group-item');  //esta class  su nombre en todos los items
// // // //vamos a ver el elemento
 console.log(itemss); //nos va a mostrar los elementos con este nombre de clase
// // // //ahora vamos a iterar 

 for (var i = 0; i < itemss.length; i++){
     let element = itemss[i]; //Array indice
   console.log(element); //linea 45 de console
 }



// // //cada elemento pose un atributo tagName llamar a la etiqueta 
 const items = document.getElementsByTagName('li');
console.log(items); 
 for (var i = 0; i < items.length; i++){
    if(i % 2 === 0){ 
    let element = items[i];
       element.style.color = "red";
    }
 }
   
//    console.log(items);
// // // } 
// // //Nuevamente voy a ver mi codigo de li con html 
// // //luego le coloco estilo  y la impreesion del console no lo veo 
// // //elemento.style => voy poder buscar los atributos que quiero modificar






// // //elemento con CSS
// //                   //como argumento va recibir una regla css
//const elemento = document.querySelector('li') //traemos el elemento por su id #id o .class list-group-item  y si buscamos por etiqueta li
// console.log(elemento); //vamos a imprimir dicho elemento


// // /// Otra de las ventajas de querySelector puedo ser mas espefico con las etiquetas y clases
 const etilist =document.querySelector('div.row>ul.list-group>li.list-group-item');
  console.log(etilist);

  etilist.style.backgroundColor = "blue";
// // //Quiero el primer elemento li que se encuentre en la list-group y esta lista se encuentra en div con clase row


// // //querySelectorAll  (Metodo)- Retorna un listado de elementos -  toda la lista
// //  const itemms =document.querySelectorAll('li');
// // console.log(itemms); //vamos a tener la lista de elementos 

// // // //Quiero retonar todos los elementos par 
const itms = document.querySelectorAll('li:nth-child(odd)'); 
 for(var i=0; i<itms.length; i++){
 let todos = itms[i];
   todos.style.background ='green';//todos los elementos par de mi lista van a estar en rojo
 }                                          // (odd) es par 
// // //si quiero los elementos impares ('li:nth-child(even)')


// // //Los elementos puede poseer padres, hijos y hermanos 

 const listt = document.querySelector('ul');
  console.log(listt.childElementCount); //va a leer a los elementos
// // // //Si queremos obtener el listado hijo 
 console.log(listt.children); //un listado del elemento , podemos iterarlo

// // // //puedo iterar pasar por cada elemento
 for(var i =0; i < listt.children.length; i++){
    console.log(listt.children[i]);  
 }//de igual forma podemos acceder mediante un indice [] 
// // // //tambien se puede trabajar a los elementos por indice 
console.log(listt.children[0]);

// // // //Si queremos poder acceder al primer hijo y tambien los podemos leer con .innerHTML
 //console.log(listt.firstElementChild); //
 //listt.innerHTML = "Modificacion"; 
// // // //si qrequiero el ultimo hijo  y tambien los podemos leer con .innerHTML
//console.log(listt.lastElementChild); //.innerHTML
//listt.innerHTML('Hola Mundo!!!!!');


// // // //Elementos Hermanos vamos a utlizar los atributos  [Pseudo clases] 

//const etilist =document.querySelector('div.row>ul.list-group>li');
// // // console.log(etilist.parentElement); //visualizo en consola el listado
// // // //Si quiero el elemento abuelo 
// // // console.log(etilist.parentElement.parentElement); //row

// // // ///Si deseo trabajar con un hermano Javascript 
// // // console.log(etilist.nextElementSibling); //vamos a visualizar JS
// // // console.log(etilist.nextElementSibling.nextElementSibling); //Si quiero ver el siguiente hermano a Javascript
// // // //Que pasa si el elemento no tiene un hermano, el atributo sera null

// // // //Si quiero ver el ultimo elemento 
// // // const last_elment = document.getElementById('last-course');
// // // console.log(last_elment);

// // // //Ademas de ir al ultimo elemento, tambien podemos retroceder 
// // // console.log(last_elment.previousElementSibling); //tendria que visualizar en console Kotlin



 const elementos = document.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'rect');
 for (let i = 0; i < elementos.length; i++) {
   elementos[i].setAttribute('width', '100');
  }


//Agregar imagen con mi querySelector de parrafo por id 
const pid =document.getElementById('pid');


 const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
 console.log(img);

 pid.replaceWith(img);

const boton = document.getElementById('miBoton');

 boton.addEventListener('click', () => {
 console.log('El usuario hizo clic en el botón');
 });


// // /// keyboard.events

// const input = document.querySelector('input');

//  //Evento keydown: se dispara cuando se presiona una tecla
// input.addEventListener('keydown', (event) => {
//    console.log(`Se presionó la tecla ${event.key}`);
//  });

// // Evento keyup: se dispara cuando se suelta una tecla
// input.addEventListener('keyup', (event) => {
//   console.log(`Se soltó la tecla ${event.key}`);
// });

// // Evento keypress: se dispara cuando se presiona y se suelta una tecla
// input.addEventListener('keypress', (event) => {
//   console.log(`Se presionó y se soltó la tecla ${event.key}`);
// });

