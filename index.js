function Item (id, type, size, price, material, description, condition) {
  this.id = id;
  this.type = type;
  this.size 	 = size;
  this.price  = price;
  this.material = material;
  this.description 	 = description;
  this.condition  = condition;
}

let validConditions = {
  usado: true,
  seminuevo: true,
  nuevo: true,
}

let id = 0;

let itemArray = [];

let container = document.querySelector ('.container');

function filterCondition (condition, itemArray) {
  let con= condition
  while (!validConditions[con]) {
    con= prompt ('Este no es un condition adecuada, favor de agregar una condicion correcta, ya sea usado, seminuevo o nuevo');
  }
  let filterArray = itemArray.filter (item => con == item.condition)
  return filterArray
}

function defineProperty (firstPrompt, wrongInputPrompt, whileCondition)  {
  let property = prompt (firstPrompt);

  while (whileCondition(property)) {
    property = prompt (wrongInputPrompt);
  }

  return property
}

function isString(promptInput) {
  return isNaN(Number(promptInput));
}

function createItem () {
  id++;

  let type = defineProperty(
    'Agregar tipo de prenda para ninio',
    'Este nos es un tipo de prenda, ingresar un tipo de prenda correcto',
    function (property) {
      return !isString(property)
    }
  )

  let size = defineProperty(
    'Agregar talla de la prenda en valor numerico',
    'Este no es una talla valida, favor de agregarlo en valor numerico, entre el 2 y 16',
    function (property) {
      return isString(property) || (Number(property) % 2 != 0 || Number(property) > 16)
    }
  )

  let price = defineProperty(
    'Agregar el precio en que se publicara tu producto',
    'Este no es un precio adecuado, favor de agregar un precio correcto',
    function (property) {
      return isString(property) || (Number(property) <= 0)
    }
  )

  let material = defineProperty(
    'Agregar el material de la prenda',
    'Este no es un material adecuado, favor de agregar un material correcto',
    function (property) {
      return !isString(property)
    }
  )

  let description = defineProperty(
    'Agregar la descripcion de la prenda, lo mas detallado posible',
    'Esta no es una descripcion adecuada, favor de agregar una descripcion correcta',
    function (property) {
      return !isString(property)
    }
  )


  let condition = defineProperty(
    'Agregar la condicion de la prenda, definirla como: usado, seminuevo o nuevo',
    'Este no es un condition adecuada, favor de agregar una condicion correcta, ya sea usado, seminuevo o nuevo',
    function (property) {
      return !isString(property) || !validConditions[property]
    }
  )

  let item = new Item(id, type, size, price, material, description, condition);

  return item;
}

let button = document.querySelector('button');

let type = document.querySelector('#type');

console.log (type)

let size = document.querySelector('#size');

let price = document.querySelector('#price');

let material = document.querySelector('#material');

let description = document.querySelector('#description');

let condition = document.querySelector('#condition');

function fnClick(event) {

let newitem = new Item()

newitem.type = type.value
newitem.size = size.value
newitem.price = price.value
newitem.material = material.value
newitem.description = description.value
newitem.condition = condition.value
console.log (newitem)

itemArray.push(newitem);


  console.log (newitem)
  container.innerHTML += `
  <div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/200/200" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${newitem.type}</h5>
    <p class="card-text">${newitem.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Talla: ${newitem.size}</li>
    <li class="list-group-item">Material: ${newitem.material}</li>
    <li class="list-group-item">Precio: $${newitem.price}</li>
  </ul>
</div>
  `
;


}



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


