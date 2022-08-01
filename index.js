function Item (id, type, size, price, material, description, condition) {
  this.id = id;
  this.type = type;
  this.size 	 = size;
  this.price  = price;
  this.material = material;
  this.description 	 = description;
  this.condition  = condition;
}

let id = 0;

let itemArray = [];


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

  let validConditions = {
    usado: true,
    seminuevo: true,
    nuevo: true,
  }

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

let addItems = prompt ('Quieres agregar un articulo? s/n')
while (addItems == 's') {
  itemArray.push(createItem())
  addItems= prompt ('Quieres agregar otro articulo? s/n')
}

console.log(itemArray)
