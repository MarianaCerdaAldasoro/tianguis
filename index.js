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

itemArray.push(new Item(234567, 'blusa', 4, 50, 'algodon', 'blusa morada con tema de unicornio', 'seminuevo'));
itemArray.push(new Item(234568, 'blusa', 6, 75, 'poliester', 'blusa azul con tema de estrellas', 'nuevo'));
itemArray.push(new Item(234569, 'playera', 8, 50, 'algodon', 'playera amarilla con tema de minecraft', 'usado'));
itemArray.push(new Item(234560, 'camisa', 2, 80, 'algodon y poliester', 'camisa roja de ninio con cuadros y manga larga','nuevo'));
itemArray.push(new Item(234570, 'pantalon', 8, 100, 'mezclilla', 'pantalon de mezclilla azul para ninia', 'seminuevo'));

function filterCondition (condition, itemArray) {
  let con= condition
  while (!validConditions[con]) {
    con= prompt ('Este no es un condition adecuada, favor de agregar una condicion correcta, ya sea usado, seminuevo o nuevo');
  }
  let filterArray = itemArray.filter (item => con == item.condition)
  return filterArray
}

function defineProperty (firstPrompt, wrongInputPrompt, whileCondition)  {
  let property= prompt (firstPrompt);

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

let addItems = prompt ('Quieres agregar un articulo? si/no')
while (addItems == 'si') {
  itemArray.push(createItem())
  addItems= prompt ('Quieres agregar otro articulo? si/no')
}

console.log('Lista de items disponibles', itemArray)

let busqueda = prompt ('Quieres hacer una busqueda segun la condicion de las prendas, entre aquellas disponibles? si/no')
while (busqueda == 'si') {
  let condicionPrenda = prompt ('Escoge una de estas condiciones: nuevo, seminuevo o usado')
  let arrayFiltrada = filterCondition(condicionPrenda, itemArray)
  busqueda = 'no'

console.log('Filtrado por '+ condicionPrenda, arrayFiltrada)
}
