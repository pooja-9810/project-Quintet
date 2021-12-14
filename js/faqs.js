
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}




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
    if (buttonText === "Holiday Homes") window.location = "../";
    if (buttonText === "Restaurants") window.location = "../restaurant.html";
   
  }
  
  function signout(){
    // On signing out set local storage to 0 and redirect to login page
    localStorage.setItem("isLoggedIn", 0);
    window.location = "./login.html";
    }
