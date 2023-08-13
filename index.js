"use strict";
// Exercise no 1 Write a program to convert the temperature from Celsius to Fahrenheit and vice verse
// Temprature converted in farnhide 
var temprature_in_celcius = 34;
var temprature_convert_to_faranhide = (temprature_in_celcius * 9 / 5) + 32;
console.log("Temprature converted in farnhide");
console.log(temprature_convert_to_faranhide);
// Temprature converted in celcius
var temprature_in_faranhide = 114;
var temprature_convert_to_celcius = (temprature_in_faranhide - 32) * 5 / 9;
console.log("Temprature converted in celcius");
console.log(temprature_convert_to_celcius);
// Esercise no 2  Write a program that calculates the percentage.
var achived_marks = 340;
var totalmarks = 540;
var percentage = (achived_marks / totalmarks) * 100;
console.log("percentage according to the given numbers ");
console.log(percentage);
//exercise no 3  Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var days = 20;
var weeks = Math.floor(days / 7);
var covert_into_days = days % 7;
if (weeks === 0 && days === 0) {
    console.log(" zero days and zero weeks ");
}
else if (weeks === 0) {
    console.log("remaining days are ", covert_into_days);
}
else if (days === 0) {
    console.log("weeks ", weeks);
}
else {
    console.log("weeks ", weeks);
    console.log("days", covert_into_days);
}
//  Exercise no 4 Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var user_paid_price = 95;
if (user_paid_price > 100) {
    var discounted_price = (user_paid_price) * 10 / 100;
    var final_discounted_price = user_paid_price - discounted_price;
    console.log(`total bill after discount `, final_discounted_price);
}
else {
    var discounted_price2 = (user_paid_price) * 5 / 100;
    var final_discounted_price2 = user_paid_price - discounted_price2;
    console.log("total bill after discount ", final_discounted_price2);
}
// Exercise no 5  Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var age = 16;
if (age > 0 && age < 12) {
    console.log(`"child"`);
}
else if (age > 13 && age < 19) {
    console.log(`"TeenAge"`);
}
else {
    console.log(`"Adult"`);
}
// Exercise no 6  Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var tempratue = 50;
if (tempratue < 15) {
    console.log("Hey Zubair its very cold outside try to wear some arm clothes ");
}
else if (tempratue > 25 && tempratue < 30) {
    console.log("Hey Zubair the weather is very pleasent");
}
else if (tempratue > 40 && tempratue < 45) {
    console.log("Hey Zubair the weather is hot try to stay inside your house ");
}
else {
    console.log("Hey Zubair dont you dare to step out of this house ");
}
// Exercide no 7 Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var num = 15;
if (num % 3 == 0 && num % 5 == 0) {
    console.log("numbers are dividable on both numbers  ");
}
else if (num % 3 == 0) {
    console.log("number is only dividable on 3");
}
else if (num % 5 == 0) {
    console.log("number is only dividable on 5");
}
else {
    console.log(" this number is not diviable on both three and five ");
}
//  exercise no 8 Write a program that checks if the given year is leap year or not.
var year_to_check = 2005;
if ((year_to_check % 4 == 0 && year_to_check % 100 != 0) || year_to_check % 400 == 0) {
    console.log("this is a leap year ");
}
else {
    console.log(" this is not a leap year");
}
// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var number = 5;
if (number >= 1 && number <= 7) {
    if (number === 1) {
        console.log("Today is Monday");
    }
    else if (number === 2) {
        console.log("Today is Tuesday");
    }
    else if (number === 3) {
        console.log("Today is Wednesday");
    }
    else if (number === 4) {
        console.log("Today is Thursday");
    }
    else if (number === 5) {
        console.log("Today is Friday");
    }
    else if (number === 6) {
        console.log("Today is Saturday");
    }
    else {
        console.log("Today is Sunday");
    }
}
else {
    console.log("Please enter a valid number between 1 and 7");
}
//  Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
var numberOfUnitsUsed = 525;
var pricePerUNit = 20;
if (numberOfUnitsUsed > 100 && numberOfUnitsUsed < 200) {
    var taxPerUnit = (numberOfUnitsUsed * 0.1);
    var totalBill = (numberOfUnitsUsed + taxPerUnit) * pricePerUNit;
    console.log(`your Total bill is ${totalBill}`);
}
else if (numberOfUnitsUsed > 200 && numberOfUnitsUsed < 500) {
    var taxPerUnit2 = numberOfUnitsUsed * 0.15;
    var toatalBill2 = (numberOfUnitsUsed + taxPerUnit2) * pricePerUNit;
    console.log(`your Total bill is ${toatalBill2}`);
}
else {
    var taxPerUnit3 = numberOfUnitsUsed * 2.5;
    var totalbill3 = (numberOfUnitsUsed + taxPerUnit3) * pricePerUNit;
    console.log(`your Total bill is ${totalbill3}`);
}
//  assignment done !
