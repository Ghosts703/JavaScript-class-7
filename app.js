// JS - class 7 - Sir Saad - 10 dec 2023

// ---------------------------------------------------------------------------------------------------------------------
// var arr1 = ['1', 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var arr2 = arr1.slice(0, 5);        // slice working (n-1)
// document.write(arr2);

// var eq1 = 5 == 5 && false;
// var eq2 = 5 == 5 && 'hello';
// document.write(eq1);
// document.write(eq2);

// ---------------------------------------------------------------------------------------------------------------------
// var eq3 = 5 > 4 && 'hello world'; // hello world will print.
// var eq4 = 5 > 4 && 'hello world' && null; // answer will be false(null).
// var eq5 = 5 > 4 && 'hello world' && false; // answer will be false(false).
// var eq6 = 5 > 4 && 'hello world' && undefined; // answer will be false(undefined).
// var eq7 = 5 > 4 && 'hello world' && 0; // answer will be false(0).
// console.log(eq7);

// ---------------------------------------------------------------------------------------------------------------------
// var eq8 = 5 === '5' && true;
// var eq9 = 5 >= 5 && 7 == 7 && '' && 'hello'; // answer will be false('')
// var eq10 = 5 >= 5 && 7 == 7 && null && 'hello'; // answer will be false(null).
// var eq11 = 5 >= 5 && 7 == 7 && null && 'hello' && undefined; // answer will be false(null).
// var eq12 = 6 == '6' && true && 'Jee' && 'ok'; // answer will be 'ok'
// var eq13 = 6 == '6' && 0 && undefined && true && 'Jee' && 'ok'; // answer will be false(0).
// var eq14 = 6 == '6' && 0 && undefined && true && 'Jee' && 'ok' || 6 == '6'; // answer will be true(true)
// var eq15 = 6 == '6' && 0 && undefined && true && 'Jee' && 'ok' || 6; // answer will be true(6)
// console.log(eq9); //answer will not be printed using document.write method. we will use console.log method.
// var eq16 = (6 && 6 || 'true') && false || null && 'hello'; // answer will be true(null).
// console.log(eq16);
// var eq17 = (6 && 6 || 'true') && false || null && 'hello' != true; // answer will be true(null).
// var eq18 = 5 == 5 != '5'; // answer will be true
// var eq19 = 5 != 4; // answer will be true
// var eq20 = 5 == 4; // answer wil be false.
// console.log(eq18);

// ---------------------------------------------------------------------------------------------------------------------
// /* Loop */

// // loop --> for loop, while loop, do-while loop
// // prime example of do-while is ATM machine and cash withdrawal.
// // for loop contains 3 phases (initialization, condition-testing, increment/decrement)

// for (var i = 0; i < 10; i++) {
//     document.write("Saad&nbsp;");  //&nbsp; for space charater.
// }
// document.write("<br><br>");
// var k = 1; // declaration + initialization
// for (; k <= 10; k++) {
//     document.write(`${k}) Saad<br>`);
// }
// document.write("<br>");
// var j; // declaration only
// for (j = 1; j <= 10; j++) {
//     document.write(`2 X ${j} = ${2 * j}<br>`);
// }
// document.write("<br><br>");

// ---------------------------------------------------------------------------------------------------------------------
// --> Class Task:  Table of a number

// (1) user input --> konse table ka print karana hai?
// (2) user input --> konsa table or kahan tak?

var num1 = +prompt("Enter the number for which you want the table.");
var num2 = +prompt("How many times you want the table to be printed?");
for (var i = 1; i <= num2; i++) {
    document.write(`${num1} x ${i} = ${num1 * i} <br>`);
}
