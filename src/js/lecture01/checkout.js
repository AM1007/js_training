const elements = {
  list: document.querySelector('.js-list'),
  cost: document.querySelector('.js-cost'),
  clearBtn: document.querySelector('.js-clear'),
};

// Retrieving all the elements from Local Storage

const LS_KEY = 'checkout';
const products = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

/**
 * Markup creation
 * @param {*} arr
 */
function createMarkup(arr) {
  return arr
    .map(
      ({ img, name, qty, price }) => `
  <li class="card-item">
    <img src="${img}" alt="${name}" class="product-img"/>
    <h2 >${name}</h2>
    <p >${qty}</p>
    <p >Total price: ${qty * price}</p>
  </li>
  `
    )
    .join('');
}
createMarkup(products);
elements.list.insertAdjacentHTML('afterbegin', createMarkup(products));

// Сalculating the price of all selected items and maiking a "Total" field
let totalCost;

if (products.length) {
  elements.clearBtn.hidden = false;
  totalCost = products.reduce((acc, { qty, price }) => acc + qty * price, 0);
}
elements.cost.textContent = totalCost
  ? `Total cost: ${totalCost}`
  : 'Your basket is empty';

// Making a "Clear" button

elements.clearBtn.addEventListener('click', handlerClear);

function handlerClear() {
  localStorage.removeItem(LS_KEY);
  location.href = '../../partials/lecture01/lecture1.html';
}
