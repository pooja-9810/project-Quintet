"use strict";

// QUERY SELECTOR FOR ALL CATEGORIES
//USE TO FILTER INDIVIDUAL CATEGORIES
const allCats = document.querySelectorAll(".booking-grid-1");

// QUERY SELECTORS FOR HOTELS
const hotel = document.querySelectorAll(".hotel");

// QUERY SELECTORS FOR FLIGHTS
const flight = document.querySelectorAll(".flight");

// QUERY SELECTORS FOR CRUISES
const cruise = document.querySelectorAll(".cruise");

// QUERY SELECTOR FOR CAR RENTAL
const carRental = document.querySelectorAll(".car-rental");

// QUERY SELECTOR FOR CAR RENTAL
const restaurant = document.querySelectorAll(".restaurant");

// QUERY SELECTOR FOR HOLIDAY PACKAGES
const holidayPackage = document.querySelectorAll(".holiday-package");

// QUERY SELECTOR FOR HOLIDAY PACKAGES
const cancelled = document.querySelectorAll(".cancelled");

// QUERY SELECTOR FOR SELECTING ALL CHECKBOXES
const allCheckboxes = document.querySelectorAll("input[name=checkbox]");

// QUERY SELECTOR FOR CHECK STATUS OF ALL CHECKBOXES
let checkedAny = document.querySelectorAll("input[type=checkbox]:checked");
//INDEX SHOWS WHICH CHECKBOXES ARE CHECKED
let checkedIndex = [];
// TEMP CONTAINER FOR CHECKED BOXES
let checkedTemp = [];

//CHECK WHICH CATEGORIES ARE CHECKED AND RETURN AN ARRAY OF CHECKED INDEXES
// CALLED BY reveaAll()
const checkChecked = function () {
  checkedAny = document.querySelectorAll("input[type=checkbox]:checked");
  // ITERATE THROUGH CHECKBOX NODE LIST
  for (let i = 0; i < allCheckboxes.length; i++) {
    //IF CHECKED, ADD TO TEMPORARY CHECKED ARRAY
    if (allCheckboxes[i].checked == true) {
      checkedTemp.push(i);
    }
  }
  // TRANSFER TEMPORARY ARRAY TO MAIN ARRAY
  checkedIndex = checkedTemp;
  // RESET TEMPORARY ARRAY
  checkedTemp = [];
  // console.log(checkedIndex);
};

// REVEALS ALL IF NO BOX IS CHECKED
const revealAll = function () {
  //FIRST UPDATE CHECKED ARRAY
  checkChecked();
  // ATTEMPT AT REVEALING ALL
  if (checkedAny.length == 0) {
    allCats.forEach((element) => {
      element.classList.remove("hidden");
    });
  }
};

// function filters to show HOTELS ONLY
let checkedHotel = document.querySelector("input[value=hotel]:checked");
// const hotelBox = document.querySelector("input[value=hotel]");

// CATEGORIES ARRAY
const mainDir = [
  hotel,
  cruise,
  carRental,
  flight,
  holidayPackage,
  restaurant,
  cancelled,
];

// FUNCTION FILTERS ACCORDING TO CHECKBOX STATUS
const displayHotels = function () {
  // GET ARRAY OF CHECKED BOXES FIRST
  checkChecked();
  // LOOP THROUGH CATEGORY ARRAY AND SELECT CHECKED CATEGORIES
  for (let i = 0; i < mainDir.length; i++) {
    // IF CATEGORY IS CHECKED
    if (checkedIndex.includes(i)) {
      // LOOP THROUGH CHECKED CATEGORY AND REVEAL ALL NODES
      for (let j = 0; j < mainDir[i].length; j++) {
        mainDir[i][j].classList.remove("hidden");
        console.log(mainDir[i][j]);
      }
      // IF CATEGORY IS NOT CHECKED
    } else {
      // LOOP THROUGH UNCHECKED CATEGORY AND HIDE ALL NODES
      for (let j = 0; j < mainDir[i].length; j++) {
        mainDir[i][j].classList.add("hidden");
      }
      // CHECK IF NO CHECKBOX IS SELECTED
      // IF NO CHECKBOX IS SELECTED REVEAL ALL
      revealAll();
    }
  }
};
// ALL EVENT LISTENER TO ALL CHECKBOXES
allCheckboxes.forEach((element) => {
  element.addEventListener("change", displayHotels);
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 10 seconds
}

////////
/////////
/////////

//Open Hamburger sidepanel in mobile view
function hamburgerClicked() {
  const sidepanel = document.getElementById("sidepanel");
  sidepanel.style.width = "90vw";
}

//Close Hamburger sidepanel in mobile view
function closeHamburger() {
  const sidepanel = document.getElementById("sidepanel");
  sidepanel.style.width = "0vw";
}

document.querySelector("#signin").addEventListener("click", () => {
  // On signing out set local storage to 0 and redirect to login page
  localStorage.setItem("isLoggedIn", 0);
  window.location = "./login.html";
});

function moreButtonClicked() {
  // On signing out set local storage to 0 and redirect to login page
  document.getElementById("moreButtonDropdown").classList.toggle("show");
}

// Close the dropdown menu for the More button, if the user clicks outside of it
window.onclick = function (event) {
  if (
    !(
      event.target.parentElement.matches(".dropdown") ||
      event.target.matches(".dropdown")
    )
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Handler for on click of buttons in the header navigation
function headerButtonClicked(button) {
  let buttonText = button.firstElementChild.firstChild.textContent;

  if (buttonText === "Flights") window.location = "../flight.html";
  if (buttonText === "Car Hire") window.location = "../carhire.html";
  if (buttonText === "Hotels") window.location = "../hotel.html";
  if (buttonText === "Holiday Homes") window.location = "../";
  if (buttonText === "Restaurants") window.location = "../restaurant.html";
}

function signout() {
  // On signing out set local storage to 0 and redirect to login page
  localStorage.setItem("isLoggedIn", 0);
  window.location = "./login.html";
}
