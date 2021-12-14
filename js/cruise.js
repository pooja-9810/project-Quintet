"use strict";

//ship name selection dropdown list
const cruiseShips = [
  "White Pearl",
  "Black Oceans",
  "Swiss Princess",
  "Alpine Breeze",
];

const selectShipFld = document.querySelector(".select-ship-fld");

function displayShip() {
  let displayShipList = "";
  cruiseShips.forEach(
    (value) =>
      (displayShipList += `<option value="${value}"> ${value} </option>`)
  );
  selectShipFld.innerHTML = displayShipList;
}

displayShip();

const cruiseDestinations = [
  "PARIS TO THE SWISS ALPS",
  "RHINE & VIKING SHORES & FJORDS",
  "RHINE GATEWAY",
];

const mealPackages = [330, 820, 210];

const selectDestFld = document.querySelector(".select-dest-fld");

function displayDestination() {
  let displayDestList = "";
  cruiseDestinations.forEach(
    (value) =>
      (displayDestList += `<option value="${value}"> ${value} </option>`)
  );
  selectDestFld.innerHTML = displayDestList;
}

displayDestination();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const bookingButtons = document.querySelectorAll(".crbook");

for (let i = 0; i < bookingButtons.length; i++) {
  bookingButtons[i].addEventListener("click", redirectToForm);
}

function redirectToForm() {
  document.querySelector(".alignerTool").scrollIntoView();
}

// This part makes auto-price calculations work in javascript form

// Displays cruise price according to dropdown selection

const cruisePrices = [3198, 8198, 2498];

let finalPriceField;
let fp1;
let fp2;
let fp3;
let fp4;
const priceSection1 = document.querySelector(".displayPrice1");

const displayPrice1 = function () {
  if (selectDestFld.value == cruiseDestinations[0]) {
    priceSection1.innerHTML = "Base Price: ";
    priceSection1.innerHTML += cruisePrices[0];
    fp1 = cruisePrices[0];
  } else if (selectDestFld.value == cruiseDestinations[1]) {
    priceSection1.innerHTML = "Base Price: ";
    priceSection1.innerHTML += cruisePrices[1];
    fp1 = cruisePrices[1];
  } else if (selectDestFld.value == cruiseDestinations[2]) {
    priceSection1.innerHTML = "Base Price: ";
    priceSection1.innerHTML += cruisePrices[2];
    fp1 = cruisePrices[2];
  }
};

displayPrice1();

//displays meal package price according to checkbox

const priceSection2 = document.querySelector(".displayPrice2");

let checkbox = document.querySelector("input[name=extra1]");

const displayPrice2 = function () {
  if (checkbox.checked && selectDestFld.value == cruiseDestinations[0]) {
    priceSection2.innerHTML = `Meal Package : ${mealPackages[0]}`;
    fp2 = mealPackages[0];
  } else if (checkbox.checked && selectDestFld.value == cruiseDestinations[1]) {
    priceSection2.innerHTML = `Meal Package : ${mealPackages[1]}`;
    fp2 = mealPackages[1];
  } else if (checkbox.checked && selectDestFld.value == cruiseDestinations[2]) {
    priceSection2.innerHTML = `Meal Package : ${mealPackages[2]}`;
    fp2 = mealPackages[2];
  } else {
    priceSection2.innerHTML = `Meal Package : 0`;
    fp2 = 0;
  }
};

displayPrice2();

//displays alcoholic beverages price according to selection

const priceSection3 = document.querySelector(".displayPrice3");

let checkbox2 = document.querySelector("input[name=extra2]");

const displayPrice3 = function () {
  if (checkbox2.checked && selectDestFld.value == cruiseDestinations[0]) {
    priceSection3.innerHTML = `Alcohol Pass : ${mealPackages[0] / 2}`;
    fp3 = mealPackages[0] / 2;
  } else if (
    checkbox2.checked &&
    selectDestFld.value == cruiseDestinations[1]
  ) {
    priceSection3.innerHTML = `Alcohol Pass  : ${mealPackages[1] / 2}`;
    fp3 = mealPackages[1] / 2;
  } else if (
    checkbox2.checked &&
    selectDestFld.value == cruiseDestinations[2]
  ) {
    priceSection3.innerHTML = `Alcohol Pass  : ${mealPackages[2] / 2}`;
    fp3 = mealPackages[2] / 2;
  } else {
    priceSection3.innerHTML = `Alcohol Pass  : 0`;
    fp3 = 0;
  }
};

displayPrice3();

// displays VIP lounge access price according to checkbox status

const priceSection4 = document.querySelector(".displayPrice4");

let checkbox3 = document.querySelector("input[name=extra3]");

const displayPrice4 = function () {
  if (checkbox3.checked && selectDestFld.value == cruiseDestinations[0]) {
    priceSection4.innerHTML = `VIP Lounge : ${(mealPackages[0] / 2) * 1.2}`;
    fp4 = (mealPackages[0] / 2) * 1.2;
  } else if (
    checkbox3.checked &&
    selectDestFld.value == cruiseDestinations[1]
  ) {
    priceSection4.innerHTML = `VIP Lounge :${(mealPackages[1] / 2) * 1.3}`;
    fp4 = (mealPackages[1] / 2) * 1.2;
  } else if (
    checkbox3.checked &&
    selectDestFld.value == cruiseDestinations[2]
  ) {
    priceSection4.innerHTML = `VIP Lounge : ${(mealPackages[2] / 2) * 1.2}`;
    fp4 = (mealPackages[2] / 2) * 1.2;
  } else {
    priceSection4.innerHTML = `VIP Lounge : 0`;
    fp4 = 0;
  }
};

displayPrice4();

//calculates total price

const priceSection5 = document.querySelector(".displayPrice5");

const displayPrice5 = function () {
  finalPriceField = fp1 + fp2 + fp3 + fp4;
  priceSection5.innerHTML = `Total Price Per Person: ${finalPriceField}`;
};

displayPrice5();

// the part which makes the selections call each other and dynamically update the price

//meal package and destination
checkbox.addEventListener("change", displayPrice1);
checkbox.addEventListener("change", displayPrice2);
checkbox.addEventListener("change", displayPrice5);

// destination and all others checkboxes
selectDestFld.addEventListener("change", displayPrice1);
selectDestFld.addEventListener("change", displayPrice2);
selectDestFld.addEventListener("change", displayPrice3);
selectDestFld.addEventListener("change", displayPrice4);
selectDestFld.addEventListener("change", displayPrice5);

// alcohol package and destination
checkbox2.addEventListener("change", displayPrice1);
checkbox2.addEventListener("change", displayPrice3);
checkbox2.addEventListener("change", displayPrice5);

//vip lounge package and destination
checkbox3.addEventListener("change", displayPrice1);
checkbox3.addEventListener("change", displayPrice4);
checkbox3.addEventListener("change", displayPrice5);

//this code block sets the minimum date selection for cruise

let today = new Date();
let tomorrow = new Date();
let dd = today.getDate() + 1;
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

const destinationLen = [10, 20, 9];

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;

const bookingStart = document.querySelector(".bookingstart");
bookingStart.setAttribute("min", today);

let bookingEnd = document.querySelector(".bookingend");

bookingEnd.setAttribute("min", today);

// const setMinDate = function () {
//   if (selectDestFld.value == cruiseDestinations[0]) {
//     tomorrow = yyyy + "-" + mm + "-" + destinationLen[0];
//   } else if (selectDestFld.value == cruiseDestinations[1]) {
//     tomorrow = yyyy + "-" + mm + "-" + destinationLen[1];
//   } else if (selectDestFld.value == cruiseDestinations[2]) {
//     tomorrow = yyyy + "-" + mm + "-" + destinationLen[2];
//   }
// };

// setMinDate();

// bookingStart.addEventListener("change", setMinDate);
// bookingEnd.addEventListener("change", setMinDate);
// selectDestFld.addEventListener("change", setMinDate);

// bookingEnd.setAttribute("min", tomorrow);

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
