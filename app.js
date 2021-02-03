const displayChar = document.querySelector("h2")
const eventKey = document.querySelector("#eventKey");
const eventCode = document.querySelector("#eventCode");
const eventWhich = document.querySelector("#eventWhich");

// Display .event which in middle of the screen
document.addEventListener("keypress", event => {
    let key = event.which;
    displayChar.innerHTML = key;
});

// Display event.key
document.addEventListener("keypress", event => {
    let key = event.which;
    eventKey.innerHTML = key;
});

// Display & event.code
document.addEventListener("keypress", event => {
    let key = event.code;
    eventCode.innerHTML = key;
});

// Display  event.wich
document.addEventListener("keypress", event => {
    let key = event.which;
    eventWhich.innerHTML = key;
});
