const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus(); //sets focus on the specified element, if it can be focused. The focused element is the element that will receive keyboard and similar events by default.

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value); //Takes the inputs recieved from the keyup and runs them through the createTags function

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "") //This iterates over each entry create by .split and tests if the condition (!=="") returns true. tag.trim removes leading and trailing whitespace. These two together eliminate empty entries created by whitespace.
    .map((tag) => tag.trim()); //This creates a new array by appying the "(tag) => tag.trim()" to each element in the new array.

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    //This section creates the HTML elements for the individual span tags
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unhighlightTag(tag) {
  tag.classList.remove("highlight");
}
