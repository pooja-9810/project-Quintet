$(function() {
  $('input[name="sta"]').on('click', function() {
      if ($(this).val() == 'star1') {
          $('#textboxes').show();

      }
      else  {
          $('#textboxes').hide();
      }
  });
});


const form = document.getElementById('form');
const title1 = document.getElementById('title1');
const review1 = document.getElementById('review1');


form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs(0);

  /*Function to display the successful submission message after review is given by client */
  $(document).ready(function(){
      $("#submit").click(function(){
        $('#textboxes').hide();
        document.getElementById('demo').innerHTML = "&nbsp &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp Thanks for your review! <br>&nbsp &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp Think of the travellers you've helped. Nice job!";
        document.getElementById('demo').style.color = "rgb(48,179,137)";
      });
    });
/*Timeout functionality to reload the page after the review is successfully submitted*/
    setTimeout(function(){
      window.location.reload(1);
   }, 10000);
});





const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};



const validateInputs = () => {
  const title1Value = title1.value.trim();
  const review1Value = review1.value.trim();
  

  if(title1Value === '') {
      setError(title1, 'Title is required');
  } else {
      setSuccess(title1);
  }

  if(review1Value === '') {
      setError(review1, 'Review is required');
  } else {
      setSuccess(review1);
  }

  
  

};




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