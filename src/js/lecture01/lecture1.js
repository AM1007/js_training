import instruments from '../../products.json';

const list = document.querySelector('.js-list');

/**
 * Markup creation
 * @param {*} arr
 */
function createMarkup(arr) {
  return arr
    .map(
      ({ description, price, name, img, id }) => `
  <li class="product-card js-product" data-product-id="${id}">
    <img src="${img}" alt="${name}" class="product-img" />
    <h2 class="product-title">${name}</h2>
    <p class="product-description">${description}</p>
    <p class="product-price">${price}</p>
    <button class="product-add-btn js-add" type="button">Add to basket</button>
  </li>
  `
    )
    .join('');
}
createMarkup(instruments);
list.insertAdjacentHTML('afterbegin', createMarkup(instruments));
list.addEventListener('click', handlerAddToBasket);
const LS_KEY = 'checkout';
/**
 * adding products from list to the shopping card
 * @param {*} evt
 * @returns
 */
function handlerAddToBasket(evt) {
  const { target } = evt;
  // Searching for an element with a target event that has the class 'js-add'.
  if (!target.classList.contains('js-add')) {
    return;
  }
  //  getting access to the 'li' element with the selector 'js-product' to get its data-atribute.
  const product = target.closest('.js-product');
  // Saving data-atribute
  const productId = Number(product.dataset.productId);
  // Finding all the information about the product we clicked on.
  const currentProduct = instruments.find(({ id }) => id === productId);

  // Saving the obtained product in Local Storage
  const products = JSON.parse(localStorage.getItem(LS_KEY)) ?? []; // || - adding a next one item to LS

  // Adding a quantity of each item to LS
  const idx = products.findIndex(({ id }) => id === productId); // finding an index of element
  if (idx !== -1) {
    products[idx].qty += 1;
  } else {
    currentProduct.qty = 1;
    products.push(currentProduct);
  }
  localStorage.setItem(LS_KEY, JSON.stringify(products));
}
