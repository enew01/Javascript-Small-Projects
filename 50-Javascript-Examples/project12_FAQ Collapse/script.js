const faqButtons = document.querySelectorAll("button");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
});
