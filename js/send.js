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

sendForm.addEventListener("submit", function (evt) {
  if (!sendName.value || !sendEmail.value || !sendMessage.value) {
    evt.preventDefault();
    sendPopup.classList.add("modal-error");
    sendPopup.offsetWidth = loginPopup.offsetWidth;
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