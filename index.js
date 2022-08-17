let validConditions = {
  usado: true,
  seminuevo: true,
  nuevo: true,
}

let id = 0;

let itemArray = [];

let container = document.querySelector ('.container');
let button = document.querySelector('button');
let type = document.querySelector('#type');
let size = document.querySelector('#size');
let price = document.querySelector('#price');
let material = document.querySelector('#material');
let description = document.querySelector('#description');
let condition = document.querySelector('#condition');

function Item (id, type, size, price, material, description, condition) {
  this.id = id;
  this.type = type;
  this.size 	 = size;
  this.price  = price;
  this.material = material;
  this.description 	 = description;
  this.condition  = condition;
}

function filterCondition (condition, itemArray) {
  let con= condition
  while (!validConditions[con]) {
    con= prompt ('Este no es un condition adecuada, favor de agregar una condicion correcta, ya sea usado, seminuevo o nuevo');
  }
  let filterArray = itemArray.filter (item => con == item.condition)
  return filterArray
}

function isString(promptInput) {
  return isNaN(Number(promptInput));
}

function agregarHtml (item, container) {
  container.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="https://picsum.photos/200/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.type}</h5>
        <p class="card-text">${item.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Talla: ${item.size}</li>
        <li class="list-group-item">Material: ${item.material}</li>
        <li class="list-group-item">Precio: $${item.price}</li>
      </ul>
    </div>
  `;
}

function fnClick(event) {
  event.preventDefault();
  let newitem = new Item()
  newitem.id = Math.floor(Math.random() * 99999999)
  newitem.type = type.value
  newitem.size = size.value
  newitem.price = price.value
  newitem.material = material.value
  newitem.description = description.value
  newitem.condition = condition.value

  if (!localStorage.length) {
    localStorage.setItem('items', JSON.stringify([]))
  }

  let itemsArray = JSON.parse(localStorage.getItem('items'));
  itemsArray.push(newitem);

  localStorage.setItem('items', JSON.stringify(itemsArray));

// items.push(newitem);
  agregarHtml(newitem, container);
}


function initialLoad() {
  let storageItems = JSON.parse(localStorage.getItem('items')) || [];

  for (let item of storageItems) {
    agregarHtml(item, container);
  }
}

initialLoad();
button.addEventListener("click", fnClick);



// setTimeout(() => {
//   let addItems = prompt ('Quieres agregar un articulo? si/no')
//   while (addItems == 'si') {
//     itemArray.push(createItem())
//     addItems= prompt ('Quieres agregar otro articulo? si/no')
//   }

//   console.log('Lista de items disponibles', itemArray)

//   let busqueda = prompt ('Quieres hacer una busqueda segun la condicion de las prendas, entre aquellas disponibles? si/no')
//   while (busqueda == 'si') {
//     let condicionPrenda = prompt ('Escoge una de estas condiciones: nuevo, seminuevo o usado')
//     let arrayFiltrada = filterCondition(condicionPrenda, itemArray)
//     busqueda = 'no'

//   console.log('Filtrado por '+ condicionPrenda, arrayFiltrada)
//   }
// }, 1000);


