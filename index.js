import uuid from 'uuidjs';

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

function agregarHtml (item, container) {
  container.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="https://picsum.photos/200/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.type}</h5>
        <p class="card-text">${item.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${item.id}</li>
        <li class="list-group-item">Talla: ${item.size}</li>
        <li class="list-group-item">Material: ${item.material}</li>
        <li class="list-group-item">Precio: $${item.price}</li>
      </ul>
    </div>
  `;
}

function fnClick(event) {
  event.preventDefault();
  let newitem = new Item({
    // Conditional Assignment
    id: uuid.generate(),
    type: type.value,
    size: size.value,
    price: price.value,
    material: material.value,
    description: description.value,
    condition: condition.value,
  })


  if (!localStorage.length) {
    localStorage.setItem('items', JSON.stringify([]))
  }

  let itemsArray = JSON.parse(localStorage.getItem('items'));
  // Spread operator
  itemsArray = [...itemsArray, newitem]

  localStorage.setItem('items', JSON.stringify(itemsArray));

// items.push(newitem);
  agregarHtml(newitem, container);
}


function initialLoad() {
  // Or operator
  let storageItems = JSON.parse(localStorage.getItem('items')) || [];

  for (let item of storageItems) {
    agregarHtml(item, container);
  }
}

initialLoad();
button.addEventListener("click", fnClick);
