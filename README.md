## This repository is created for my humble experiments and practicing JS skills.

### Lecture 1 - JSON-format & Web Storage

##### The Two-page online store.

**The `Home` page should:**

1. Display product cards with data from products.json. Example:
   [Screenshot](https://prnt.sc/klV2uzLIcG8w).
2. Implement event delegation for adding products to the shopping cart from the
   list.
3. Use Local Storage for adding products to the shopping cart.
4. Control the quantity of added products during addition. To do this, create a
   new key `quantity`` in the added product object.

**The `Checkout` page should:**

1. List cards of added products, with each card showing the quantity of
   purchased items and the total cost for that item. Example:
   [Screenshot](https://prnt.sc/klV2uzLIcG8w).
2. Display a message about the total purchase cost. If the cart is empty,
   display the message `"Your basket is empty"`.
3. Include a button to clear the shopping cart. When pressed, all items are
   removed, and the user is redirected to the `Home` page.

---

### Preparing for work

1. Make sure you have the LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) it if necessary.
2. Install the basic project dependencies in the terminal with the command
   `npm install`.
3. Start the development mode by running the command `npm run dev` in the
   terminal.
4. Go to the following address in your browser
   [http://localhost:5173](http://localhost:5173). This page will automatically
   reload automatically after saving changes to the project files.
