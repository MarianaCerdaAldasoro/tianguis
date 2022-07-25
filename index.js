function Item (type, size, price, material, description, condition) {
  this.type = type;
  this.size 	 = size;
  this.price  = price;
  this.material = material;
  this.description 	 = description;
  this.condition  = condition;

  this.isString = function (promptInput) {
    return isNaN(Number(promptInput));
  }
}


let newItem = new Item ;

let type = prompt ('Agregar tipo de prenda para ninio');

while (!newItem.isString(type)) {
  type = prompt('Este nos es un tipo de prenda, ingresar un tipo de prenda correcto')
}

newItem.type = type

let size = prompt ('Agregar talla de la prenda en valor numerico');


while (newItem.isString(size) || (Number(size) % 2 != 0 || Number(size) > 16)) {
  size = prompt('Este no es una talla valida, favor de agregarlo en valor numerico, entre el 2 y 16')

}

newItem.size = size

let price = prompt ('Agregar el precio en que se publicara tu producto');


while (newItem.isString(price) || Number(price) <= 0) {
  price = prompt('Este no es un precio adecuado, favor de agregar un precio correcto')

}

newItem.price = price

let material = prompt ('Agregar el material de la prenda');


while (!newItem.isString(material )) {
  material = prompt('Este no es un material adecuado, favor de agregar un material correcto')

}

newItem.material = material

let description = prompt ('Agregar la descripcion de la prenda, lo mas detallado posible');


while (!newItem.isString(description )) {
  description = prompt('Esta no es una descripcion adecuada, favor de agregar una descripcion correcta')

}

newItem.description = description

let condition = prompt ('Agregar la condicion de la prenda (usado, seminuevo o nuevo');

let validConditions = {
  usado: true,
  seminuevo: true,
  nuevo: true,
}

while (!newItem.isString(condition ) || !validConditions[condition]) {
  condition = prompt('Este no es un condition adecuada, favor de agregar una condicion correcta, ya sea usado, seminuevo o nuevo')

}

newItem.condition = condition

alert(`Producto agregado con exito:
\n type: ${newItem.type}
\n size: ${newItem.size}
\n price: ${newItem.price}
\n material: ${newItem.material}
\n description: ${newItem.description}
\n condition: ${newItem.condition}
`)