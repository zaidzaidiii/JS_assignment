 var a
var b
 var c

 a = prompt("Enter number 1")
 b = prompt("Enter number 2")

 c = a+b

 document.body.innerHTML = "sum of " + a + "and " + b + "is " + c      

 var a
 var b
 var c

 a = prompt("Enter number 1")
 b = prompt("Enter number 2")

 c = a-b

 document.body.innerHTML = "sum of " + a + "and " + b + "is " + c      


 var a
 var b
 var c

 a = prompt("Enter number 1")
 b = prompt("Enter number 2")

 c = a*b

 document.body.innerHTML = "sum of " + a + "and " + b + "is " + c      


var a
var b
var c

a = prompt("Enter number 1")
b = prompt("Enter number 2")

c = a/b

document.body.innerHTML = "sum of " + a + "and " + b + "is " + c      

// task 1,2 complete


// a. Declare a variable.
var myVariable;

// b. Show the value of the variable in your browser.
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the value of the variable in your browser.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of the variable in your browser.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value of the variable in your browser.
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
myVariable--;

// j. Show the value of the variable in your browser.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable's value by 3.
var remainder = myVariable % 3;

// l. Output: "The remainder is: 0".
document.write("The remainder is: " + remainder + "<br>");

// assignment 3 complete 



// Store ticket price in a variable
var ticketPrice = 600;

// Calculate the cost of buying 5 tickets
var totalCost = ticketPrice * 5;

// Print the result
document.write("The cost of buying 5 tickets is: " + totalCost + " PKR");

// assignment 4 complete 

for (var i = 1; i <= 10; i++) {

  document.body.innerHTML += "4 x" + i + "=" + 4 * i + "<br>" 

}
  //  assignment 5 complete
  
  

// Step a: Store a Celsius temperature into a variable
var celsiusTemperature = 30;

// Step b: Convert Celsius to Fahrenheit
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

// Output the result
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

// Step c: Store a Fahrenheit temperature into a variable
var fahrenheitTemperature2 = 86;

// Step d: Convert Fahrenheit to Celsius
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;

// Output the result
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");



// Store the variables
var priceItem1 = 10.99;
var priceItem2 = 15.99;
var quantityItem1 = 2;
var quantityItem2 = 1;
var shippingCharges = 5.99;

// Compute the total cost
var subtotal = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2);
var totalCost = subtotal + shippingCharges;

// Display the receipt in the browser
document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: $" + priceItem1.toFixed(2) + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2.toFixed(2) + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges.toFixed(2) + "</p>");
document.write("<hr>");
document.write("<p>Subtotal: $" + subtotal.toFixed(2) + "</p>");
document.write("<p>Total Cost: $" + totalCost.toFixed(2) + "</p>");

  //  assignment 7 complete



var totalMarks = 500;
var marksObtained = 380;

// Calculate the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Create a message to display in the browser
var message = "Total Marks: " + totalMarks + "<br>";
message += "Marks Obtained: " + marksObtained + "<br>";
message += "Percentage: " + percentage + "%";

// Display the result in the browser
document.write(message);
 
// assignment 8 complete 

const usdToPkrRate = 104.80;
const sarToPkrRate = 28;

const usdAmount = 10;
const sarAmount = 25;

const totalPkrAmount = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);

document.write("Total amount in Pakistani Rupees:", totalPkrAmount);
  
// assignment  9 complete 


let number = 10;
let result = ((number + 5) * 10) / 2;
document.write(result);
 
// assignment 10 complete 
   

// assignment 11 complete 

 // Store the current year in a variable
var currentYear = new Date().getFullYear();

// Store their birth year in a variable
var birthYear = 1990; // Replace with the actual birth year

// Calculate their possible ages
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Print the calculated ages
document.write("Possible ages: " + age1 + " or " + age2);
  //  assignment 11 comp


// Step 1: Store the radius into a variable
var radius = parseFloat(prompt("Enter the radius of the circle: "));

// Step 2: Calculate the circumference
var circumference = 2 * Math.PI * radius;
document.write("The circumference is " + circumference);

// Step 3: Calculate the area
var area = Math.PI * Math.pow(radius, 2);
document.write("The area is " + area);

//  assignment 12 comp 


// Step a: Store your favorite snack

// Step b: Store your current age

// Step c: Store a maximum age

var favoriteSnack = "chocolate bars";
// Step d: Store an estimated amount per day

var currentAge = 30;
// Calculate the remaining years of your life

var maximumAge = 80;
// Calculate the total number of snacks for the rest of your life
const totalSnacks = remainingYears * 365 * amountPerDay;
var amountPerDay = 2;

document.write("Lifetime supply of " + favoriteSnack + ": " + totalSnacks + " " + favoriteSnack);
var remainingYears = maximumAge - currentAge;
  
// assignment 


