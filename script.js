// Access the Images
let slideImages = document.querySelectorAll('.car');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;
var deleteInterval; // Corrected variable name

// Code for next button
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].classList.remove('active');
    if(counter >= slideImages.length-1){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].classList.add('active');
    indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].classList.remove('active');
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].classList.add('active');
    indicators();
}

// Auto sliding
function autoSliding(){
    deleteInterval = setInterval(timer, 3000);
    function timer(){
        slideNext();
    }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deleteInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators(){
    for(let i = 0; i < dots.length; i++){
        dots[i].classList.remove('active');
    }
    dots[counter].classList.add('active');
}

// Add click event to the indicator
function switchImage(currentImage){
    let imageId = parseInt(currentImage.getAttribute('attr'));
    if(imageId !== counter){
        slideImages[counter].classList.remove('active');
        counter = imageId;
        slideImages[counter].classList.add('active');
        indicators();
    }
}
