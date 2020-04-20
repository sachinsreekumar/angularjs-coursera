var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function aboveFiveFilter(value) {
  return value>5;
}
var filteredArray = numberArray.filter(aboveFiveFilter);

console.log('Filtered Array:', filteredArray);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var searchValue = "Bismol";
function containsFilter(value) {
  return value.indexOf(searchValue) !== -1;
}


var searchedShopping = shoppingList.filter(containsFilter);
console.log("Searched List:", searchedShopping);
