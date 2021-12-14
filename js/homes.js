$(document).ready(function() {

    updateResult();
});

function updateResult() {
    
    var select = document.getElementById('bathroom');
    var count = select.options[select.selectedIndex].value;
    console.log(count);
    var divResults = document.getElementById('results');
    divResults.innerHTML = '';

    $.getJSON('model/homesData.json', function(data) {
        $.each(data.homes, function(key, value) {
            console.log(value.bathrooms);
            if( count <= value.bathrooms ) {
            var divSearchResult = document.createElement('div');
            divSearchResult.id = 'search_results';
            divResults.appendChild(divSearchResult);
        
            var img = document.createElement('img');
            img.setAttribute('src', value.image)
            divSearchResult.appendChild(img);

            var divOuter = document.createElement('div');
            divOuter.className = 'home_outer';
            divSearchResult.appendChild(divOuter);

            var headerHotelName = document.createElement('h2');
            headerHotelName.className = 'home_name';
            headerHotelName.textContent = value.name;
            divOuter.appendChild(headerHotelName);

            var divInner = document.createElement('div');
            divInner.className = 'home_inner';
            divOuter.appendChild(divInner);

            var divDetailsLeft = document.createElement('div');
            divDetailsLeft.className = 'details_left';
            divInner.appendChild(divDetailsLeft);

            if(value.hasOwnProperty('bedrooms')) {
                var pTagBedroom = document.createElement('p');
                pTagBedroom.textContent = 'Bedrooms: ' + value.bedrooms;
                divDetailsLeft.appendChild(pTagBedroom);
            }

            if(value.hasOwnProperty('bathrooms')) {
                var pTagBathroom = document.createElement('p');
                pTagBathroom.textContent = 'Bathrooms: ' + value.bathrooms;
                divDetailsLeft.appendChild(pTagBathroom);
            }

            if(value.hasOwnProperty('guests')) {
                var pTagGuests = document.createElement('p');
                pTagGuests.textContent = 'Guests: ' + value.guests;
                divDetailsLeft.appendChild(pTagGuests);
            }

            if(value.hasOwnProperty('poolPrivate')) {
                var pTagGuests = document.createElement('p');
                if( true === value.poolPrivate)
                    pTagGuests.textContent = 'Private Pool: Yes';
                else
                    pTagGuests.textContent = 'Private Pool: No';
                divDetailsLeft.appendChild(pTagGuests);
            }

            var divDetailsRight = document.createElement('div');
            divDetailsRight.className = 'details_right';
            divInner.appendChild(divDetailsRight);

            divDetailsRight.innerHTML = '<label for="birthday">Check-in:</label><br/> \
            <input type="date" id="check-in" name="check-in" placeholder="check-in"> <br/> \
            <label for="birthday">Check-out:</label><br/> \
            <input type="date" id="check-in" name="check-out" placeholder="check-out"> <br/><br/> \
            <input type="button" value="Show Prices">';

            var divSpacing = document.createElement('div');
            divSpacing.className = 'spacing_search_result';
            divResults.appendChild(divSpacing);
        }
        });
    });
}

function headerButtonClicked(button) {

    let buttonText = button.firstElementChild.firstChild.textContent;
  
    if (buttonText === "Flights") window.location = "./flight.html";
    else if (buttonText === "Hotels") window.location = "./hotel.html";
    else if (buttonText === "Holiday Homes") window.location = "./homes.html";
    else if (buttonText === "Restaurants") window.location = "./restaurant.html";
    else if (buttonText === "Car Hire") window.location = "./carhire.html";
  
}