/* decreaseValue - Decrease the counter value */
const decreaseValue = () => {
    counter--;
    number_text.textContent = counter;
    checkButtonValueAndChangeColor();
    checkForEasterEgg();
};

/* resetValue - Resets the counter value */
const resetValue = () => {
    counter = 0;
    number_text.textContent = counter;
    checkButtonValueAndChangeColor();
    checkForEasterEgg();
};

/* increaseValue - Increases the counter value */
const increaseValue = () => {
    counter++;
    number_text.textContent = counter;
    checkButtonValueAndChangeColor();
    checkForEasterEgg();
};

/* confirmReset - Shows the confirm reset window */
const confirmReset = () => {
    background.classList.add("show");
};

/* checkButtonValueAndChangeColor - Check for the current counter value and changes
   the number color based if the number is posite or negative */
const checkButtonValueAndChangeColor = () => {
    if (counter > 0) {
        number_text.style.color = "#65dd75";
    } else if (counter < 0) {
        number_text.style.color = "#dd6565";
    } else if (counter == 0) {
        number_text.style.color = "#e2e0ff";
    }
};

/* checkForEasterEgg  - Enables or disables the CAPYBARA easter egg */
const checkForEasterEgg = () => {
    if (counter == 100 || counter == -100) {
        easter_egg_background.classList.remove("display-none");
        counter_text.textContent = "CAPYBARA";
        btn_decrease.textContent = "CAPYBARA";
        btn_increase.textContent = "CAPYBARA";
        btn_reset.textContent = "CAPYBARA";
        btn_no.textContent = "CAPYBARA";
        btn_yes.textContent = "CAPYBARA";
        confirmation_text.textContent = "CAPYBARA";
        document.title = "CAPYBARA";
    } else if (counter != 100 || counter != -100) {
        easter_egg_background.classList.add("display-none");
        counter_text.textContent = "counter";
        btn_decrease.textContent = "decrease";
        btn_increase.textContent = "increase";
        btn_reset.textContent = "reset";
        btn_no.textContent = "no";
        btn_yes.textContent = "yes";
        confirmation_text.textContent = "do you want to reset the counter to zero?";
        document.title = "Counter";
    }
};

/* General Variables */
const btn_decrease = document.querySelector(".btn-decrease");
const btn_reset = document.querySelector(".btn-reset");
const btn_increase = document.querySelector(".btn-increase");
const number_text = document.querySelector(".number-text");
const counter_text = document.querySelector(".counter-text");
const background = document.querySelector(".background");
const btn_no = document.querySelector(".btn-no");
const btn_yes = document.querySelector(".btn-yes");
const confirmation_text = document.querySelector(".confirmation-container-center > p");
const easter_egg_background = document.querySelector(".easter-egg");
let counter = 0;

/* Events */
btn_decrease.addEventListener("click", () => {
    decreaseValue();
});
btn_reset.addEventListener("click", () => {
    confirmReset();
});
btn_increase.addEventListener("click", () => {
    increaseValue();
});

btn_no.addEventListener("click", () => {
    background.classList.remove("show");
});

btn_yes.addEventListener("click", () => {
    resetValue();
    background.classList.remove("show");
});
