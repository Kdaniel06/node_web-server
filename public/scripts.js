const display = document.querySelector("#display"); // ? The calculatos screen
const buttons = document.querySelectorAll("button"); // ? All the buttons

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value); // * The computer already recognize the operations
        } else if (btn.id === "ac"){
            display.value = ""; // * Clean screen
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);  // * Delete the last input
        } else {
            display.value += btn.id; // * Add the inputs
        }
    })
})