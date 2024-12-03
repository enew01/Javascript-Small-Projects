const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    //Function that On Click will increment the current Active variable by 1
    currentActive++;
    //Adds a codnitional that stops it at the max (Which is the same as the circles.length property)
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    //Calls the Update function. Before this all the Event Listener did was increase a counter and did not effect the DOM. Update is what causes that.
    update();
});
//identical to above but without the need for calling variables to determine final length.
prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, index) => {
        //for these parameters, circle represents the current DOM element in the array-like, and index represents its index (location in the array-like list)
        if (index < currentActive) {
            //this checks if the index is less than the currentActive variable. Because the variable started at 1 it will always be 1 higher than the index of the relevant DOM elements.
            //Because this adds the class to ALL circle elements that match this property, that is the only check necessary.
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    //THis is math to change the width of the progress bar by returning all elements with the active class as an array-like list, divided against the number of circles.
    //For example if there are 2 elements with the active class then it's rendered 2/3 * 100 with a % sign concatenated onto it.

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false
        next.disabled = false;
    }
    //These isntitute checks to disable or enable the buttons depending on the currentActive count.


}