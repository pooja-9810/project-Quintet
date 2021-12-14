"use strict";
$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");
        
    // start slide show
    setInterval( () => {
        $("#slide").fadeOut(1000, () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);
            });    // end fadeOut()
    },
    5000);         // end setInterval()
});

function headerButtonClicked(button) {

    let buttonText = button.firstElementChild.firstChild.textContent;
  
    if (buttonText === "Flights") window.location = "./flight.html";
    else if (buttonText === "Hotels") window.location = "./hotel.html";
    else if (buttonText === "Holiday Homes") window.location = "./homes.html";
    else if (buttonText === "Restaurants") window.location = "./restaurant.html";
    else if (buttonText === "Car Hire") window.location = "./carhire.html";
  
}