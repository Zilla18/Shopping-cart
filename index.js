//
const REMOVE_CART = document.getElementById("romovecartitems");
const DECREASE_BTN = document.querySelectorAll(".decrease-cart-items");
const INCREASE_BTN = document.querySelectorAll(".increase-cart-items");
const VALUE_ADDED = document.querySelectorAll(".value-added");
const LIKE_BTN = document.getElementById("like-items");
const DELETE_BTN = document.getElementById("delete-cart-items");

// Loop through each button in the INCREASE_BTN array
INCREASE_BTN.forEach((BTN, index) => {
  // For each button, add a 'click' event listener
  BTN.addEventListener("click", () => {
    // When the button is clicked, call increaseCartOne() function with the index of the button
    increaseCartOne(index);
  });
});

// Function to increase the cart value by 1
function increaseCartOne(index) {
  // Get the current value of the text content for the element at the specified index in VALUE_ADDED
  let nums = VALUE_ADDED[index].textContent;

  // Convert the current text content (a string) to an integer and add 1
  let count = parseInt(nums, 10) + 1;

  // Update the text content of the element at the specified index with the new count value
  VALUE_ADDED[index].textContent = count;

  // Log the new count value to the console (for debugging purposes)
}

// Code for Decreasing cart items

// Loop through each button in the DECREASE_BTN array
DECREASE_BTN.forEach((BTN, index) => {
  // For each button, add a 'click' event listener
  BTN.addEventListener("click", () => {
    // When the button is clicked, call decreaseSingleCart() function with the index of the button
    decreaseSingleCart(index);
  });
});

// Function to decrease the cart value by 1
function decreaseSingleCart(index) {
  // Get the current value of the text content for the element at the specified index in VALUE_ADDED
  let nums = VALUE_ADDED[index].textContent;

  // Convert the current text content (a string) to an integer and subtract 1
  let count = parseInt(nums, 10) - 1;
  if (count < 1) {
    count = 1;
  }
  // Update the text content of the element at the specified index with the new count value
  VALUE_ADDED[index].textContent = count;
}
