let descEl = document.getElementById("desc")

function description() {
    let headingEl = document.createElement("h1");
    headingEl.textContent = "Personal-info";
    headingEl.classList.add("text-center")
    descEl.appendChild(headingEl);

    let paraEl = document.createElement("p")
    paraEl.textContent = "Hii I am Hariom Gupta,A b-tech 3rd year student from iilm-cet, Greater Noida.I am currently working as an intern with Bharat Intern.";
    descEl.appendChild(paraEl)

    let headingSecondEl = document.createElement("h1")
    headingSecondEl.textContent = "Project-details";
    headingSecondEl.classList.add("text-center")
    descEl.appendChild(headingSecondEl)


    let paraSecondEl = document.createElement("p")
    paraSecondEl.textContent = "Have worked on several projects like: Typing speed counter,Todolist,website for plant selling.";
    descEl.appendChild(paraSecondEl)

}