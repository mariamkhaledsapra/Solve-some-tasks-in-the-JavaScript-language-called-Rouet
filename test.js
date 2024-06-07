//1-Write a program that allow to user enter number then print it
//var number =prompt("Enter a number:");
//window.alert(number);


//2-Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
/*var number = window.prompt("Enter a number:");
number = Number(number);
if(number % 3 === 0 && number % 4 === 0){
  window.alert("Yes");
}
else {
  window.alert("No");
}*/

//3-Write a program that allows the user to insert 2 integers then print the max
/*var num1 = Number(window.prompt("Enter the first integer:"));
var num2 = Number(window.prompt("Enter the second integer:"));
// Find the maximum of the two numbers
if (num1 > num2) {
  window.alert(num1);
} else {
  window.alert(num2);
}
window.alert("The maximum");
*/

//4-Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
/*var num = Number(window.prompt("Enter a number:"));
// Check if the number is negative or positive
if (num < 0) {
  window.alert("negative");
} else if (num > 0) {
  window.alert("positive");
} else {
  window.alert("The number is zero.");
}
*/

//5-Write a program that take 3 integers from user then print the max element and the min element.
/* var num1 = Number(window.prompt("Enter the first integer:"));
var num2 = Number(window.prompt("Enter the second integer:"));
var num3 = Number(window.prompt("Enter the third integer:"));
var max = num1;
var min = num1;
if (num2 > max) {
  max = num2;
} else if (num2 < min) {
  min = num2;
}
if (num3 > max) {
  max = num3;
} else if (num3 < min) {
  min = num3;
}
window.alert("The maximum is: " + max);
window.alert("The minimum is: " + min);
*/

//6-Write a program that allows the user to insert integer number then check If a number is oven or odd
/*var number =prompt("Enter a number:");
// Check if the number is even or odd
if (number % 2 === 0) {
    window.alert("The number is even.");
} else {
    window.alert("The number is odd.");
}
*/

//7-Write a program that take character from user then if it is vowel chars (a,e,I,o,u)then print vowel otherwise print consonant
/*var character = prompt("Enter a character:").toLowerCase();
// Check using OR if the character is a vowel 
if (
  character === "a" ||character === "e" ||character === "i" ||character === "o" ||character === "u"
) {
  window.alert("Vowel");
} else {
  window.alert("Consonant");
}
*/
//using switch case
/*var character = prompt("Enter a character:").toLowerCase();
switch (character) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    window.alert("Vowel");
    break;
  default:
    window.alert("Consonant");
    break;
}
*/


//8-Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to that’s number
// Prompt the user to enter an integer
/*var number = Number(window.prompt("Enter a number:"));
// Print all numbers between 1 and the entered number from me
for (var i = 1; i <= number; i++) {
    window.alert(i);
}
*/

//9-Write a program that allows userto insert integerthen print a multiplication table up to 12.
/*var number = Number(window.prompt("Enter a number:"));
window.alert("Multiplication table for", number, ":");
//i It will start from until I reach 12
for (var i = 1; i <= 12; i++) {
  //I will confirm the number and it will always be multiplied by the new number
  var result = number * i;
  window.alert(number + " * " + i + " = " + result);
}
*/

//10-Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers between 1 to this number
// Prompt the user to enter a number
/*var number = Number(window.prompt("Enter a number:"));
window.alert("Even numbers between 1 and", number, ":");
for (var i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        window.alert(i);
    }
}
*/
/*var number = Number(window.prompt("Enter a number:"));
for (var i = 2; i <= number; i++) {
window.alert(i);
    }
*/

//11-Writeaprogramthattaketwointegersthenprintthepower
/*var number = Number(window.prompt("Enter a number:"));
var power = Number(window.prompt("Enter a number:"));
var result =1;
for (var i = 0; i < power; i++) {
  result *= number;
}
window.alert(number + " raised to the power of " + power + " is: " + result);
*/

/*var number = Number(window.prompt("Enter a number:"));
var power = Number(window.prompt("Enter a number:"));
var result = number ** power;
window.alert(number + " raised to the power of " + power + " is:", result);
*/


//12-Write a program to enter marks of five subjects and calculate total, average and percentage.
/*var marks1 = Number(window.prompt("Enter marks for subject 1:"));
var marks2 = Number(window.prompt("Enter marks for subject 2:"));
var marks3 = Number(window.prompt("Enter marks for subject 3:"));
var marks4 = Number(window.prompt("Enter marks for subject 4:"));
var marks5 = Number(window.prompt("Enter marks for subject 5:"));

var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
var averageMarks = totalMarks / 5;
var percentage = (totalMarks / 500) * 100;

window.alert("Total marks: " + totalMarks + "\nAverage marks: " + averageMarks + "\nPercentage: " + percentage + "%");
*/
//uesd Array
/*let marks = [];
let totalMarks = 0;
for (let i = 0; i < 5; i++) {
    marks[i] = Number(prompt("Enter marks for subject " + (i + 1) + ":"));
    totalMarks += marks[i];
}
let averageMarks = totalMarks / 5;
let percentage = (totalMarks / 500) * 100;

window.alert("Total marks: " + totalMarks + "\nAverage marks: " + averageMarks + "\nPercentage: " + percentage.toFixed(2) + "%");
*/

//13-Write a program to input month number and print number of days in that month.
/*var monthNumber = window.prompt("Enter the month number (1-12):");
if (monthNumber >= 1 && monthNumber <= 12) {
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var numberOfDays = daysInMonth[monthNumber - 1];
  window.alert(
    "Number of days in month " + monthNumber + " is: " + numberOfDays
  );
} else {
  window.alert("Invalid month number. Please enter a number between 1 and 12.");
}
*/

//14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
/*var physics = Number(window.prompt("Enter marks for Physics:"));
var chemistry = Number(window.prompt("Enter marks for Chemistry:"));
var biology = Number(window.prompt("Enter marks for Biology:"));
var mathematics = Number(window.prompt("Enter marks for Mathematics:"));
var computer = Number(window.prompt("Enter marks for Computer:"));

var totalMarks = physics + chemistry + biology + mathematics + computer;
var percentage = (totalMarks / 500) * 100;
var grade;
if (percentage >= 90) {
    grade = 'A+';
} else if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}
window.alert("Total marks:", totalMarks);
window.alert("Percentage:", percentage + "%");
window.alert("Grade:", grade);
*/


//******************************** Using switch case*******************************

//15- Write a program to print total number of days in month
  var days;

  switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
      days = 31;
      break;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
      days = 30;
      break;
    case 2: // February
      days = year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0) ? 28 : 29; // Consider leap years
      break;
    default:
      days = null;
  }

  return days;
}

// Example usage
const month = 2; // February
const year = 2024; // Leap year for demonstration
const days = daysInMonth(month, year);
if (days !== null) {
  console.log(`Number of days in month ${month} of year ${year} is ${days}.`);
} else {
  console.log("Invalid month input.");
}


//16- Write a program to check whether an alphabet is vowel or consonant


//17- Write a program to find maximum between two numbers



//18- Write a program to check whether a number is even or odd


//19- Write a program to check whether a number is positive or negative or zero


//20- Write a program to create Simple Calculator

