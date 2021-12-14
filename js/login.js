"use strict"
document.addEventListener("DOMContentLoaded", () => {
  //List of dummmy users & password
  const DUMMY_USERS = [
    {
      user: "User_1",
      password: "Welcome@123",
    },
    {
      user: "User_2",
      password: "Welcome@123",
    },
    {
      user: "User_3",
      password: "Welcome@123",
    },
    {
      user: "User_4",
      password: "Welcome@123",
    },
    {
      user: "User_5",
      password: "Welcome@123",
    },
  ];

  const loginForm = document.querySelector("#login__form");
  const createAccount = document.querySelector("#create__account__form");

  //Check if User is already logged in and redirect to home page
  function checkIsLoggedIn() {
    if (localStorage.getItem("isLoggedIn") == 1) {
      window.location = "./home.html";
    }
  }
  checkIsLoggedIn();

  //Display messages
  function setFormMessage(formElement, errorType, message) {
    const messageElement = formElement.querySelector(".login__form__message");

    messageElement.textContent = message;
    messageElement.classList.remove(
      "login__form__message__error",
      "login__form__message__success"
    );
    messageElement.classList.add(`login__form__message__${errorType}`);
  }
  setFormMessage(createAccount, "error", "");

  //On click of sign in link, display login form and hide create account form
  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (event) => {
      event.preventDefault();
      loginFormInitialise();

      createAccount.classList.add("login__form__hidden");
      loginForm.classList.remove("login__form__hidden");
    });

  //On click of create account link, display create account form and hide login form
  document.querySelector("#linkLogin").addEventListener("click", (event) => {
    event.preventDefault();
    createAccountInitialiase();

    loginForm.classList.add("login__form__hidden");
    createAccount.classList.remove("login__form__hidden");
  });

  //Submit Login Form
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = document.querySelector("#user");
    const pwd = document.querySelector("#pwd");
    const enteredUser = user.value;
    const enteredPwd = pwd.value;

    pwd.classList.remove("error__border");
    user.classList.remove("error__border");

    const filteredUser = DUMMY_USERS.filter(
      (user) => user.user === enteredUser && user.password === enteredPwd
    );

    if (filteredUser.length > 0) {
      localStorage.setItem("isLoggedIn", 1);
      setFormMessage(loginForm, "success", "User Logged in");
      window.user = filteredUser[0].user;
      window.location = "./home.html";
    } else {
      setFormMessage(
        loginForm,
        "error",
        "Invalid username/password combination."
      );
      //Highlight errors
      pwd.classList.add("error__border");
      user.classList.add("error__border");
    }
  });

  //Submit Create Account Form
  createAccount.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = document.querySelector("#ca_usr");
    const confirmPwd = document.querySelector("#ca_confirm_pwd");
    const pwd = document.querySelector("#ca_pwd");

    //Remove all error
    pwd.classList.remove("error__border");
    confirmPwd.classList.remove("error__border");
    user.classList.remove("error__border");

    //User entered values
    const enteredUser = user.value;
    const enteredPwd = pwd.value;
    const enteredConfirmPwd = confirmPwd.value;

    if (enteredPwd === "" || enteredConfirmPwd === "" || enteredUser === "") {
      setFormMessage(createAccount, "error", "Fill mandatory fields.");

      if (!enteredPwd) pwd.classList.add("error__border");
      if (!enteredConfirmPwd) confirmPwd.classList.add("error__border");
      if (!enteredUser) user.classList.add("error__border");
    } else if (enteredPwd === enteredConfirmPwd) {
      DUMMY_USERS.push({
        user: enteredUser,
        password: enteredPwd,
      });
      loginForm.classList.remove("login__form__hidden");
      createAccount.classList.add("login__form__hidden");
      loginFormInitialise();
      setFormMessage(loginForm, "success", "User created succesfully.");
    } else {
      setFormMessage(createAccount, "error", "Password missmatch.");
      //Highlight errors
      pwd.classList.add("error__border");
      confirmPwd.classList.add("error__border");
      confirmPwd.value = "";
      pwd.value = "";
    }
  });

  function createAccountInitialiase() {
    document.querySelector("#ca_usr").value = "";
    document.querySelector("#ca_pwd").value = "";
    document.querySelector("#ca_confirm_pwd").value = "";
    document.querySelector("#ca_usr").classList.remove("error__border");
    document.querySelector("#ca_pwd").classList.remove("error__border");
    document.querySelector("#ca_confirm_pwd").classList.remove("error__border");
    setFormMessage(createAccount, "success", "");
  }

  function loginFormInitialise() {
    document.querySelector("#user").value = "";
    document.querySelector("#pwd").value = "";
    setFormMessage(loginForm, "success", "");
    document.querySelector("#user").classList.remove("error__border");
    document.querySelector("#pwd").classList.remove("error__border");
  }
});
