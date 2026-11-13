
// ==========================================
// Q1: Square each number using map()
// ==========================================

const numbers = [2, 3, 4, 5, 6];

function squareNumbers(arr) {
  return arr.map((num) => num * num);
}

const squaredNumbers = squareNumbers(numbers);
console.log("Q1:", squaredNumbers);


// ==========================================
// Q2: Filter users whose age is greater than 18
// ==========================================

const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 17 },
  { name: "Ahmed", age: 25 },
  { name: "Ayesha", age: 16 },
  { name: "Usman", age: 20 }
];

function filterAdults(arr) {
  return arr.filter((user) => user.age > 18);
}

const adults = filterAdults(users);
console.log("Q2:", adults);


// ==========================================
// Q3: Calculate total price using reduce()
// ==========================================

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 30000 },
  { name: "Headphones", price: 5000 },
  { name: "Mouse", price: 2000 }
];

const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log("Q3: Total Price =", totalPrice);


// ==========================================
// Q4: Sort students by marks in descending order
// ==========================================

const students = [
  { name: "Ali", marks: 75 },
  { name: "Sara", marks: 92 },
  { name: "Ahmed", marks: 65 },
  { name: "Ayesha", marks: 88 },
  { name: "Usman", marks: 80 }
];

const sortedStudents = [...students].sort((a, b) => {
  return b.marks - a.marks;
});

console.log("Q4:", sortedStudents);


// ==========================================
// Q5: Find first string with length greater than 5
// ==========================================

const words = ["Cat", "Apple", "Banana", "Orange", "Dog"];

function findLongString(arr) {
  return arr.find((word) => word.length > 5);
}

const firstLongString = findLongString(words);
console.log("Q5:", firstLongString);


// ==========================================
// Q6: Object method using this keyword
// ==========================================

const person = {
  firstName: "Ali",
  lastName: "Ahmed",

  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log("Q6:", person.fullName());

// Explanation:
// this refers to the person object because fullName()
// is called using person.fullName().
// So this.firstName means person.firstName
// and this.lastName means person.lastName.


// ==========================================
// Q7: Difference between regular and arrow functions
// when using this inside an object
// ==========================================

const student = {
  name: "Sara",

  regularFunction: function () {
    return this.name;
  },

  arrowFunction: () => {
    return this.name;
  }
};

console.log("Q7 Regular Function:", student.regularFunction());
console.log("Q7 Arrow Function:", student.arrowFunction());

// Explanation:
// Regular function gets this from the object calling it.
// Arrow function does not have its own this.
// It uses this from its surrounding scope.
// Therefore, regularFunction returns "Sara".
// arrowFunction generally returns undefined here
// because the surrounding scope has no name property.


// ==========================================
// Q8: Filter even numbers, double them and calculate sum
// using method chaining
// ==========================================

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];

function calculateSum(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((total, num) => total + num, 0);
}

const finalSum = calculateSum(numberArray);
console.log("Q8:", finalSum);


// ==========================================
// Q9: Employee operations
// a) Find employee in HR department
// b) Sort employees by salary in ascending order
// ==========================================

const employees = [
  { name: "Ali", department: "IT", salary: 50000 },
  { name: "Sara", department: "HR", salary: 40000 },
  { name: "Ahmed", department: "Finance", salary: 60000 },
  { name: "Ayesha", department: "HR", salary: 45000 },
  { name: "Usman", department: "IT", salary: 35000 }
];

// a) Find an employee in HR department
const hrEmployee = employees.find((employee) => {
  return employee.department === "HR";
});

console.log("Q9 a: HR Employee:", hrEmployee);


// b) Sort employees by salary in ascending order
const sortedEmployees = [...employees].sort((a, b) => {
  return a.salary - b.salary;
});

console.log("Q9 b: Sorted Employees:", sortedEmployees);


// ==========================================
// Q10: Object.keys(), Object.values()
// and Object.fromEntries()
// ==========================================

const myObject = {
  name: "Ali",
  age: 22,
  city: "Islamabad"
};

function getKeysAndValues(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return {
    keys: keys,
    values: values
  };
}

const objectData = getKeysAndValues(myObject);

console.log("Q10 Keys:", objectData.keys);
console.log("Q10 Values:", objectData.values);


// Create a new object from key-value pairs

const keyValuePairs = [
  ["name", "Sara"],
  ["age", 21],
  ["city", "Lahore"]
];

const newObject = Object.fromEntries(keyValuePairs);

console.log("Q10 New Object:", newObject);
