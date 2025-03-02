const number = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

const romanNumeralConverter = (number) => {
  if (number === 0 ) {
    return "";
  } else if (number >= 1000) {
    const count = Math.floor(number / 1000);
    return "M".repeat(count) + romanNumeralConverter(number % 1000);
  } else if (number >= 900) {
    const count = Math.floor(number / 900);
    return "CM".repeat(count) + romanNumeralConverter(number % 900);
  } else if (number >= 500) {
    const count = Math.floor(number / 500);
    return "D".repeat(count) + romanNumeralConverter(number % 500);
  } else if (number >= 400) {
    const count = Math.floor(number / 400);
    return "CD".repeat(count) + romanNumeralConverter(number % 400);
  } else if (number >= 100) {
    const count = Math.floor(number / 100);
    return "C".repeat(count) + romanNumeralConverter(number % 100);
  } else if (number >= 90) {
    const count = Math.floor(number / 90);
    return "XC".repeat(count) + romanNumeralConverter(number % 90);
  } else if (number >= 50) {
    const count = Math.floor(number / 50);
    return "L".repeat(count) + romanNumeralConverter(number % 50);
  } else if (number >= 40) {
    const count = Math.floor(number / 40);
    return "XL".repeat(count) + romanNumeralConverter(number % 40);
  } else if (number >= 10) {
    const count = Math.floor(number / 10);
    return "X".repeat(count) + romanNumeralConverter(number % 10);
  } else if (number >= 9) {
    const count = Math.floor(number / 9);
    return "IX".repeat(count) + romanNumeralConverter(number % 9);
  } else if (number >= 5) {
    const count = Math.floor(number / 5);
    return "V".repeat(count) + romanNumeralConverter(number % 5);
  } else if (number >= 4) {
    const count = Math.floor(number / 4);
    return "IV".repeat(count) + romanNumeralConverter(number % 4);
  } else if (number >= 1) {
    const count = Math.floor(number / 1);
    return "I".repeat(count) + romanNumeralConverter(number % 1);
  } else {
    return "";
  }
}

const checkUserInput = () =>{
  const input = parseInt(number.value);
  output.innerText = "";
  if (!input || isNaN(input)) {
    output.innerText = "Please enter a valid number";
    return;
  } else if( input <= 0){
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (input > 3999){
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else{
    output.innerText = romanNumeralConverter(input);
    return
  }
  
}

convertBtn.addEventListener("click", checkUserInput);