
// =========destructing array=========

const product = ["Nike Shoes", 4500, "Black", "Available"];
let [product1, product2, product3, product4] = product;
console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);


const order = ["Ali", "Pizza", 2, 1500, "Cash"];
let [customerName, productName, quantity, price, paymentMethod] = order;
console.log(customerName);
console.log(productName);
console.log(quantity);
console.log(price);
console.log(paymentMethod);

// const weather = ["Karachi", 32, "Sunny", 65];
// // let [city, temperature, condition, humidity] = weather;
// console.log(city);
// console.log(temperature);
// console.log(condition);
// console.log(humidity);




// =======Object Destructuring========




// const user = { name: "Ayesha", email: "ayesha@example.com", age: 24, city: "Karachi", profession: "Frontend Developer" };
// let { name, email, age, city, profession } = user;
// console.log(name);
// console.log(email);
// console.log(age);
// console.log(city);
// console.log(profession);




// const customer = { name: "Ahmed", address: { city: "Karachi", area: "Gulshan", postalCode: 75300 }, payment: { method: "Cash on Delivery", status: "Pending" } };
// let { name, address: { city, area }, payment: { method, status } } = customer;
// console.log(name);
// console.log(city);
// console.log(area);
// console.log(method);
// console.log(status);


// const employee = { employeeName: "Sara", designation: "UI Designer", salary: 80000 };
// let { employeeName, designation, salary, department = "Not Assigned" } = employee;
// console.log(employeeName);
// console.log(designation);
// console.log(salary);
// console.log(department);





// 3. Callback Functions
// Task 1: Food Delivery Application
// Create a function named placeOrder() for a food delivery application.
// The function must accept a food name and a callback function.
// After placing the order, call the callback function.
// Display a message such as: Your Pizza order has been placed successfully!
// placeOrder("pizza");
// function placeOrder(foodName, callback) {
//     console.log(`Your ${foodName} order has been placed successfully`);
//     callback();
// }


// Task 2: Payment Processing System
// Create a function named processPayment() for an online payment system.
// The function must accept an amount and a callback function.
// If the amount is greater than zero, call the callback with a payment success message.
// Otherwise, call the callback with a payment failure message.
// Display the payment result through the callback.


 processPayment(2000 , function() {
    console.log("Payment processed successfully");
});
function processPayment(amount, callback) {
    if (amount > 0) {
        console.log("Payment successful");
    } else {
        console.log("Payment failed");
    } 
   callback();
}



// placeOrder("Pizza", function() {
//     console.log("Your order is confirmed!");
// });

// function placeOrder(item, callback) {
//     console.log(item + " ordered");

//     callback();
// }





const prices = [1000, 2500, 4000, 5000, 8000];

const discountedPrices = prices.map((price) => {
    return price - (price * 10 / 100);
});

console.log("Original Prices:", prices);
console.log("Discounted Prices:", discountedPrices);






