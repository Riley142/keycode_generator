const displayChar = document.querySelector("h2")


// Display charcode & middle of the screen & event.wich

document.addEventListener("keypress", event => {
    let key = event.keyCode;
    console.log(key);
    displayChar.innerHTML = key;
});



// // need to get char code
// save it as variable?
// to be able to reuse iut and display it inside h2




// Display key & event.key
// Display keycode & event.code


// Get key & keycode
// document.addEventListener("keypress", event => {
//     console.log(event);
// })



