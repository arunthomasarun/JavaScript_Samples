//ForEach
let arrColors = ["white", "black", "blue"];

arrColors.forEach(function(color) {
  console.log(color);
});

let arrNumbers = [1, 2, 3];
let sum = 0;

arrNumbers.forEach(addNumbers);

function addNumbers(number) {
  sum += number;
}
console.log(`Sum of numbers is ${sum}`);

//Map

let doubledNumbers = arrNumbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers);

let customers = [
  { name: "Arun", Country: "India" },
  { name: "Tisa", Country: "UK" },
  { name: "Luke", Country: "US" }
];

let customerCountries = customers.map(function(customer) {
  return customer.Country;
});
console.log(customerCountries);

//Filter
let arrProducts = [
  { name: "Apple", Category: "Fruit" },
  { name: "Cucumber", Category: "Vegetable" },
  { name: "Bislery", Category: "Beverages" },
  { name: "Orange", Category: "Fruit" },
  { name: "Carrot", Category: "Vegetable" }
];

let filteredProduct = arrProducts.filter(function(product) {
  return product.Category === "Vegetable";
});

console.log(filteredProduct);

//Find
let findItem = arrProducts.find(function(product) {
  return product.name === "Orange";
});

console.log(`Find Example ${findItem.name}`);

//Scenario : Find post for comments
let arrPosts = [
  { postId: 1, Title: "Post 1" },
  { postId: 2, Title: "Post 2" },
  { postId: 3, Title: "Post 3" },
  { postId: 4, Title: "Post 4" },
  { postId: 5, Title: "Post 5" }
];

let arrComments = [
  { postId: 1, Description: "Great post" },
  { postId: 2, Description: "Ok post" },
  { postId: 3, Description: "Great posting" }
];
