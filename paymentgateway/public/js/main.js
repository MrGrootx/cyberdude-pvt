// PAYMENT ADDRESS
const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipcode = document.getElementById("zipcode");

// PAYMENT METHOD
const cardnumber = document.getElementById("cardnumber");
const expmth = document.getElementById("exp");
console.log(expmth.value);
const cvc = document.getElementById("CVC");

// sub
const isValid = `this is not an valid email address`;
const isName = `username must be alphabets`;
const isPinCode = `pincode must be an number`;
const isPin = `you entered worng number`;
const isCard = `card number must be an number`;
const iscvc = `cvc must be an number`;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  CheckRequired([
    username,
    email,
    address,
    city,
    state,
    zipcode,
    cardnumber,
    expmth,
    cvc,
  ]);
  checkEmail(email); // Email Check
  checkUsername(username); // Username Check
  CheckPinCode(zipcode); // Check pin number
  checkCardNumber(cardnumber); // Check card Number
  checkcvc(cvc); // Check cvc number
});

// Function

// Name Check
String.prototype.CorrectName = function () {
  return !!this.match(/^[a-zA-Z]+$/);
};

// Email Check
String.prototype.Email = function () {
  return !!this.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

String.prototype.PinCode = function () {
  return !!this.match(/\d+/g);
};

// req
function CheckRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      //error Message
      // console.dir(input);
      errorInput(input, `${input.placeholder}`);
    } else {
      //success Message

      successInput(input);
    }
  });
}

// error input
function errorInput(input, message) {
  const formParent = input.parentElement;
  formParent.className = "form-group error";
  const p = formParent.querySelector("p");
  p.innerHTML = message;
}
// success input
function successInput(input) {
  const formParent = input.parentElement;
  formParent.className = "form-group success";
}

// username
function checkUsername(input) {
  if (!input.value.trim().CorrectName()) {
    errorInput(input, `${isName}`);
  }
}

// email
function checkEmail(input) {
  if (!input.value.trim().Email()) {
    errorInput(input, `${isValid}`);
  }
}

// Check PinCode
function CheckPinCode(input) {
  if (!input.value.trim().PinCode()) {
    errorInput(input, `${isPinCode}`);
  } else if (input.value.length > 6) {
    errorInput(input, `${isPin}`);
  } else if (input.value.length < 6) {
    errorInput(input, `${isPin}`);
  }
}
// Check Card Number is Valid
function checkCardNumber(input) {
  if (!input.value.trim().PinCode()) {
    errorInput(input, isCard);
  } else if (input.value.length > 16) {
    errorInput(input, isPin);
  } else if (input.value.length < 16) {
    errorInput(input, isPin);
  }
}

// Check CVC
function checkcvc(input) {
  if (!input.value.trim().PinCode()) {
    errorInput(input, iscvc);
  } else if (input.value.length > 3) {
    errorInput(input, isPin);
  } else if (input.value.length < 3) {
    errorInput(input, isPin);
  }
}

// Popup Buttons
const submitbtn = document.getElementById("submitbtn");
const confirmBtn = document.getElementById("confirmBtn");
const popupcloseBtn = document.getElementById("popupcloseBtn");

//popupDiv
const popupdiv = document.getElementById("popupdiv");

function inputfield(inputs) {
  for (const input of inputs) {
    if (input.value.trim() === "") {
      return false;
    }
  }
  return true;
}

submitbtn.addEventListener("click", () => {
  const rawdata = [
    username,
    email,
    address,
    city,
    state,
    zipcode,
    cardnumber,
    expmth,
    cvc,
  ];

  if (cardnumber.value.length > 16) {
    return;
  } else if (cardnumber.value.length < 16) {
    return;
  } else if (cvc.value.length < 3) {
    return;
  } else if (cvc.value.length > 3) {
    return;
  }

  if (inputfield(rawdata)) {
    popupdiv.classList.remove("hidden");
  }

  // display popup Message
  const preusername = document.getElementById("preusername");
  const precardnumber = document.getElementById("precardnumber");
  const precvc = document.getElementById("precvc");

  preusername.textContent = username.value;
  precardnumber.textContent = cardnumber.value;
  precvc.textContent = cvc.value;
});

popupcloseBtn.addEventListener("click", () => {
  popupdiv.classList.add("hidden");
});

confirmBtn.addEventListener("click", () => {
  popupdiv.classList.add("hidden");

  setTimeout(() => {
    alert("Your card Details has success fully submited");
  },3000);
});
