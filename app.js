const form = document.querySelector("#shelterForm");
const input = document.querySelector("#userInput");
const list = document.querySelector('#user')
form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(input.value)
        const userInput = input.value;
        const newLI = document.createElement("LI");
        newLI.innerText = userInput;
        list.append(newLI);
        input.value = '';
    })