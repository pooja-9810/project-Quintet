"use strict"
//To open the hamburger sidepanel
function hamburgerClicked() {
  const sidepanel = document.getElementById("sidepanel");
  sidepanel.style.width = "90vw";
}
//To close the hamburger sidepanel
function closeHamburger() {
  const sidepanel = document.getElementById("sidepanel");
  sidepanel.style.width = "0vw";
}

document.querySelector("#signin").addEventListener("click", () => {
  // On signing out set local storage to 0 and redirect to login page
  localStorage.setItem("isLoggedIn", 0);
  window.location = "./login.html";
});

function signout() {
  // On signing out set local storage to 0 and redirect to login page
  localStorage.setItem("isLoggedIn", 0);
  window.location = "./login.html";
}


document.addEventListener("DOMContentLoaded", () => {
  //Dyanamic generating the contact info section using json file
  $.ajax({
    type: "GET", //rest Type
    dataType: "json",
    url: "../model/contact-us.json",
    async: false,
    contentType: "application/json; charset=utf-8",
    success: function (response) {
      let arr = response.data;
      let divTag = "",
        span1 = "",
        span2 = "",
        span3 = "",
        icon = "",
        text = "";
      //Dyanamic generating the contact info section
      for (let i = 0; i < arr.length; i++) {
        divTag = document.createElement("div");
        text = "";

        span1 = document.createElement("span");
        icon = document.createElement("i");

        icon.setAttribute("class", `${arr[i].iconClass}`);
        span2 = document.createElement("span");
        span3 = document.createElement("span");
        span3.setAttribute("class", "text");
        text = document.createTextNode(`${arr[i].iconText}`);
        span1.appendChild(icon);
        span2.appendChild(text);
        span3.appendChild(document.createTextNode(`${arr[i].iconValue}`));

        divTag.appendChild(span1);
        divTag.appendChild(span2);
        divTag.appendChild(span3);

        document.getElementById("contactInfo").appendChild(divTag);
      }
    },
  });
});
