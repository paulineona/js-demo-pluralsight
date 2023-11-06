'use strict';

//This function changes the message on the page with an id of 'message'
function showMesssage(message) {
    document.getElementById("message").textContent = message;
}

// document  - javascript object that represents the html document
// getElementById - function that returns an element from the html document
// message - the id of the element we want to return
// textContent - property of the element we want to change
// mesaage - the value we want to set the textContent property to

//This function changes the percentage off on the page with an id of 'percent-off'
function changePercentOff(percentage) {
    document.getElementById("percent-off").textContent = percentage + "% OFF";
}