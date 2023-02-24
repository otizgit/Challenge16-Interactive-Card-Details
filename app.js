const btn = document.querySelector(".submit-btn");
const input = document.querySelectorAll("input");
const notif = document.querySelectorAll(".notif");
const cardPattern = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/;
const namePattern = /[a-z]{2}/;
const expiryPattern1 = /[0-9]{2}/;
const expiryPattern2 = /[0-9]{2}/;
const cvcPattern = /[0-9]{3}/;

const person = document.getElementById("name");
const cardNumber = document.getElementById("card-number");
const expiry1 = document.querySelector(".expiry1");
const expiry2 = document.querySelector(".expiry2");
const cvc = document.getElementById("cvc");

const notif1 = document.querySelector(".notif1");
const notif2 = document.querySelector(".notif2");
const notif3 = document.querySelector(".notif3");
const notif4 = document.querySelector(".notif4");
const notif5 = document.querySelector(".notif5");

const user = document.querySelector(".user");
const numbers = document.querySelector(".numbers");
const exp1 = document.querySelector(".exp-date-info1");
const exp2 = document.querySelector(".exp-date-info2");
const cvcInfo = document.querySelector(".cvc-info");

const success = document.querySelector(".success");
const form = document.querySelector("form");
const cont = document.querySelector(".continue");
const spanny = document.querySelector(".spanny");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  checkInput();

  if (
    notif1.innerHTML === "" &&
    notif2.innerHTML === "" &&
    notif3.innerHTML === "" &&
    notif4.innerHTML === "" &&
    notif5.innerHTML === ""
  ) {
    success.classList.add("swipe");
    form.classList.add("form-swipe");
    spanny.innerHTML = person.value.toUpperCase() + "" + "!";
  }
});

function checkInput() {
  first();
  second();
  third();
  forth();
  fifth();
}

cont.addEventListener("click", function () {
  success.classList.remove("swipe");
  form.classList.remove("form-swipe");
  input.forEach(function (inputField) {
    inputField.value = "";
    inputField.classList.remove("valid");
    inputField.classList.remove("invalid");
  });
  user.innerHTML = "JANE APPLESEED";
  numbers.innerHTML = "0000 0000 0000 0000";
  exp1.innerHTML = "00";
  exp2.innerHTML = "00";
  cvcInfo.innerHTML = "000";
});

function first() {
  if (person.value === "") {
    person.classList.add("invalid");
    notif1.classList.add("display");
    notif1.innerHTML = "Can't be blank";
  } else if (person.value.match(namePattern)) {
    person.classList.add("valid");
    user.innerHTML = person.value;
    notif1.innerHTML = "";
  } else {
    person.classList.add("invalid");
    notif1.innerHTML = "Wrong format";
  }
}

function second() {
  if (cardNumber.value === "") {
    cardNumber.classList.add("invalid");
    notif2.classList.add("display");
    notif2.innerHTML = "Can't be blank";
  } else if (cardNumber.value.match(cardPattern)) {
    cardNumber.classList.add("valid");
    notif2.innerHTML = "";
    numbers.innerHTML = cardNumber.value;
  } else {
    cardNumber.classList.add("invalid");
    notif2.classList.add("display");
    notif2.innerHTML = "Wrong format";
  }
}

function third() {
  if (expiry1.value === "") {
    expiry1.classList.add("invalid");
    notif3.classList.add("display");
    notif3.innerHTML = "Can't be blank";
  } else if (expiry1.value.match(expiryPattern1)) {
    expiry1.classList.add("valid");
    exp1.innerHTML = expiry1.value;
    notif3.innerHTML = "";
  } else {
    expiry1.classList.add("invalid");
    notif3.innerHTML = "Wrong format";
  }
}

function forth() {
  if (expiry2.value === "") {
    expiry2.classList.add("invalid");
    notif5.classList.add("display");
    notif5.innerHTML = "Can't be blank";
  } else if (expiry2.value.match(expiryPattern2)) {
    expiry2.classList.add("valid");
    exp2.innerHTML = expiry2.value;
    notif5.innerHTML = "";
  } else if (expiry2.value.match(!expiryPattern2)) {
    expiry2.classList.add("invalid");
    notif5.innerHTML = "Wrong format";
  } else {
    expiry2.classList.add("invalid");
    notif5.innerHTML = "Wrong format";
  }
}

function fifth() {
  if (cvc.value === "") {
    cvc.classList.add("invalid");
    notif4.classList.add("display");
    notif4.innerHTML = "Can't be blank";
  } else if (cvc.value.match(cvcPattern)) {
    cvc.classList.add("valid");
    notif4.innerHTML = "";
    cvcInfo.innerHTML = cvc.value;
  } else {
    cvc.classList.add("invalid");
    notif4.innerHTML = "Wrong format";
  }
}

person.addEventListener("keyup", function () {
  if (person.value.match(namePattern)) {
    person.classList.add("valid");
    notif1.innerHTML = "";
    localStorage.setItem("name", JSON.stringify(person.value.trim()));
    user.innerHTML = JSON.parse(localStorage.getItem("name"));
  }
});
user.innerHTML = JSON.parse(localStorage.getItem("name"));

cardNumber.addEventListener("keyup", function () {
  if (cardNumber.value.match(cardPattern)) {
    cardNumber.classList.add("valid");
    notif2.innerHTML = "";
    localStorage.setItem("card", JSON.stringify(cardNumber.value));
    numbers.innerHTML = JSON.parse(localStorage.getItem("card"));
  } else {
    numbers.innerHTML = cardNumber.value;
  }
});
numbers.innerHTML = JSON.parse(localStorage.getItem("card"));

expiry1.addEventListener("keyup", function () {
  if (expiry1.value.match(expiryPattern1)) {
    expiry1.classList.add("valid");
    notif3.innerHTML = "";
    localStorage.setItem("exp1", JSON.stringify(expiry1.value));
    exp1.innerHTML = JSON.parse(localStorage.getItem("exp1"));
  }
  if (expiry1.value > 12 || expiry1.value === "00") {
    expiry1.value = 12;
    expiry1.classList.add("valid");
    exp1.innerHTML = expiry1.value;
  }
});
exp1.innerHTML = JSON.parse(localStorage.getItem("exp1"));

expiry2.addEventListener("keyup", function () {
  if (expiry2.value.match(expiryPattern2)) {
    expiry2.classList.add("valid");
    notif5.innerHTML = "";
    localStorage.setItem("exp2", JSON.stringify(expiry2.value));
    exp2.innerHTML = JSON.parse(localStorage.getItem("exp2"));
  } else {
    expiry2.classList.add("invalid");
    exp2.innerHTML = expiry2.value;
  }
});
exp2.innerHTML = JSON.parse(localStorage.getItem("exp2"));

cvc.addEventListener("keyup", function () {
  if (cvc.value.match(cvcPattern)) {
    cvc.classList.add("valid");
    notif4.innerHTML = "";
    localStorage.setItem("cvc", JSON.stringify(cvc.value));
    cvcInfo.innerHTML = JSON.parse(localStorage.getItem("cvc"));
  } else {
    cvc.classList.add("invalid");
    cvcInfo.innerHTML = cvc.value;
  }
});
cvcInfo.innerHTML = JSON.parse(localStorage.getItem("cvc"));