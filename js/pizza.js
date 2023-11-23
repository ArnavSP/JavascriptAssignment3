function orderPizza() {
  // Getting values from the HTML form
  const pizzaSize = document.getElementById("pizza-size").value;
  const cheese = document.getElementById("cheese").value;
  const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked'))
    .map(checkbox => checkbox.value);
  const crustType = document.getElementById("crust-type").value;

  // Pizza object
  const pizza = new Pizza(pizzaSize, cheese, toppings, crustType);

  displayPizzaDescription(pizza);
}

// Pizza class constructor
class Pizza {
  constructor(size, cheese, toppings, crustType) {
    this.size = size;
    this.cheese = cheese;
    this.toppings = toppings;
    this.crustType = crustType;
  }
}

// Displaying the pizza description on the HTML page
function displayPizzaDescription(pizza) {
  const pizzaDescription = document.getElementById("pizza-description");

  // Detailed description
  const sizeDescription = capitalizeFirstLetter(pizza.size);
  const cheeseDescription = capitalizeFirstLetter(pizza.cheese);
  const toppingsDescription = pizza.toppings.length > 0 ? pizza.toppings.join(", ") : "No toppings";
  const crustTypeDescription = capitalizeFirstLetter(pizza.crustType);

  const fullDescription = `Your order for a ${sizeDescription} Pizza with a ${crustTypeDescription} crust topped with ${cheeseDescription} cheese, ${toppingsDescription} has been placed!`;

  // Set the content of the "pizza-description" element
  pizzaDescription.innerHTML = `<p>${fullDescription}</p>`;
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
