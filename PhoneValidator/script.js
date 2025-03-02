const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const clearInput = () => {
  userInput.value = "";
  resultsDiv.innerText = "";
}

const phoneRegex = (phone) => {
  const phonePattern = /^(1\s?)?([-\s]?)(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/;
  return phonePattern.test(phone)
}
const validateInput = () => {
  const inputString = userInput.value;
  if (inputString === "") {
    alert('Please provide a phone number');
  } else if (phoneRegex(inputString)) {
    resultsDiv.innerText = `Valid US number: ${inputString}`;
  } else {
    resultsDiv.innerText = `Invalid US number: ${inputString}`;
  }
}


clearBtn.addEventListener("click", clearInput);

checkBtn.addEventListener("click", validateInput);

