

// Calculates the year from user input
function calculate() {
  let age = document.getElementById('age').value;
  let date = new Date();
  let year = date.getFullYear();
  let result = year - age;
  document.getElementById('result-1').innerHTML = "You were born in " + result; 
}

// Clears the user input and result fields
function clear() {
  document.getElementById('result-1').innerHTML = "";
  document.getElementById('age').value = "";
}

// Creates the click events on the buttons
btn = document.getElementById('btn');
btn.addEventListener("click", () => calculate());

btn_2 = document.getElementById('btn-2');
btn_2.addEventListener("click", () => clear());
