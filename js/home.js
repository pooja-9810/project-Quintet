"use strict"
const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs div");
console.log(img);
let idx = 0;

//Method to move the images carousel on click of the next arrow buttons
function changeImage() {
  if (idx > Math.ceil(img.length / 3) - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = Math.ceil(img.length / 3) - 1;
  }

  imgs.style.transform = `translateX(${-idx * 100}%)`;
}

//Event Listener to move carousel images to right
rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
});

//Event Listener to move carousel images to left
leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
});

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
  if (!(event.target.parentElement.matches(".dropdown")||event.target.matches(".dropdown"))) {
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
  if (buttonText === "Holiday Homes") window.location = "../homes.html";
  if (buttonText === "Restaurants") window.location = "../restaurant.html";
 
}

function signout(){
  // On signing out set local storage to 0 and redirect to login page
  localStorage.setItem("isLoggedIn", 0);
  window.location = "./login.html";
  }
