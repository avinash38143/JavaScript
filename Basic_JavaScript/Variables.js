const accountId = 121;
let email = "avhi@gmail.com";
var accountPassword = "Avinash";
accountCity = "Ara";
let accountState;

// accountId = 2; This is not allowed in JavaScript. once you declare the const with some values, you can't change/update it.(This is single line comment.)

/*
Prefer not to use var....
Because issue in block scope and functional scope.
(This is multiline comments).
*/


email = "hs@gmail.com";
accountPassword = "12343";
accountCity = "Patna";
console.table([accountId, email, accountPassword, accountCity,accountState]);