const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const inputElement = document.getElementById("text-input");
const alert = document.getElementById("alert");


const palindromeCheck = (input) => {
  let cleanText = input.value.replace(/[^a-zA-Z0-9]/g, '');
  let lowerCase = cleanText.toLowerCase();
  let reverse = lowerCase.split("").reverse().join("");
  if (input.value === "") {  
    alert('Please input a value');
  } else if (lowerCase === reverse) {
    result.innerText = `${input.value} is a palindrome`;
  } else {
    result.innerText = `${input.value} is not a palindrome`;
  }
}

checkButton.addEventListener("click", () => palindromeCheck(inputElement));
