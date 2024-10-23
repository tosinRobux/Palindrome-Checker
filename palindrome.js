
const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;
checkBtn.addEventListener("click", () => {
    // splitting user input character, reversing them,
    // and joining them into a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
});
txtInput.addEventListener("keyup", () => {
    //The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement.
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    // removing all spaces & all special characters from entered value
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});
