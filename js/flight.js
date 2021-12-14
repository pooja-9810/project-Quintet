function addStopFilter(stopsCount) {

    var search_results = document.getElementsByClassName("search_results");
    var stops = document.getElementsByClassName("stopsP");
    console.log(stops.length);
    console.log(search_results.length);

    for(var i = 0; i < search_results.length; i++) {

        var val = stops[i].innerHTML;
        console.log(val);
        console.log(stopsCount);
        if(stopsCount != val[0]) {
            search_results[i].style.visibility="hidden";
        }
        else {
            search_results[i].style.visibility= "visible";
        }
    }
  }

function headerButtonClicked(button) {

    let buttonText = button.firstElementChild.firstChild.textContent;
  
    if (buttonText === "Flights") window.location = "./flight.html";
    else if (buttonText === "Hotels") window.location = "./hotel.html";
    else if (buttonText === "Holiday Homes") window.location = "./homes.html";
    else if (buttonText === "Restaurants") window.location = "./restaurant.html";
    else if (buttonText === "Car Hire") window.location = "./carhire.html";
  
}