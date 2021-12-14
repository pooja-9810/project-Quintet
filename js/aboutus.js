"use strict";
// constants for the message from ceo visible / invisible
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const picsShowModal = document.querySelectorAll(".imaj");
const btnCloseModal = document.querySelector(".close-modal");

//function to make the message visible
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//function to make the message invisible
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//loop for selecting all images and activating event listeners to call openModal function
for (let i = 0; i < picsShowModal.length; i++)
  picsShowModal[i].addEventListener("click", openModal);

//closes the ceo message window
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//listens for esc key to close to ceo message window
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
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
