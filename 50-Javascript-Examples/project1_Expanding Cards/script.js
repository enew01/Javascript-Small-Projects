const panels = document.querySelectorAll('.panel');
//QuerySelectorAll returns all of the specified elements as a node list (Similar to an array)

//By giving the singular name 'Panel' you are indicating specific items from out of the nodelist.
panels.forEach((panel) => {
    //Adds an Event Listener to all individual panel elements, then goes into a nested function to determine what happens on Click
    panel.addEventListener('click', () => {
        //First uses a function (defined below) to remove the Active class from all elements
        removeActiveClasses();
        //THen adds the class to the element that was clicked
        panel.classList.add('active');
    })
});

function removeActiveClasses() {
    //does as before. With only a single variable you do not need extra parens in arrow function
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}