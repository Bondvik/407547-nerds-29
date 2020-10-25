"use strict"

const contactSend = document.querySelector(".contact-send");
const sendPopup = document.querySelector(".modal-send");
const sendClose = sendPopup.querySelector(".modal-close");
const sendForm = sendPopup.querySelector(".send-form");
const sendName = sendPopup.querySelector(".form-name");
const sendEmail = sendPopup.querySelector(".form-email");
const sendMessage = sendPopup.querySelector(".form-message");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

contactSend.addEventListener("click", function (evt) {
  evt.preventDefault();
  sendPopup.classList.add("modal-show");
  if (storage) {
    sendName.value = storage;
    sendEmail.focus();
  } else {
    sendName.focus();
  }

});

sendClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  sendPopup.classList.remove("modal-show");
  sendPopup.classList.remove("modal-error");
});

sendName.addEventListener('focusout', function (evt) {
  if(evt.target.value.trim() === '') {
    sendName.classList.add("notValid");
  } else {
    sendName.classList.remove("notValid");
  }
})

sendEmail.addEventListener('focusout', function (evt) {
  if(evt.target.value.trim() === '') {
    sendEmail.classList.add("notValid");
  } else {
    sendEmail.classList.remove("notValid");
  }
})

sendMessage.addEventListener('focusout', function (evt) {
  if(evt.target.value.trim() === '') {
    sendMessage.classList.add("notValid");
  } else {
    sendMessage.classList.remove("notValid");
  }
})

sendForm.addEventListener("submit", function (evt) {
  if (!sendName.value || !sendEmail.value || !sendMessage.value) {
    if (sendName.value.trim() === '') {
      sendName.classList.add("notValid");
    }
    if (sendEmail.value.trim() === '') {
      sendEmail.classList.add("notValid");
    }
    if (sendMessage.value.trim() === '') {
      sendMessage.classList.add("notValid");
    }
    evt.preventDefault();
    sendPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", sendName.value);
    }
    
  }
});



window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (sendPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      sendPopup.classList.remove("modal-show");
      sendPopup.classList.remove("modal-error");
    }
  }
});