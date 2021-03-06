// document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

// document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandler);

// function flightHandlerFunction(){
//     const flightSection = document.querySelector("#flight");
//     flightSection.classList.replace("disabled", "enabled");
// }

// function mindReaderFunction(){
//     const mindReadingSection = document.querySelector("#mindreading");
//     mindReadingSection.classList.replace("disabled", "enabled");
// }


document.querySelector("#activate-flight").addEventListener("click", activatePower);

document.querySelector("#activate-mindreading").addEventListener("click", activatePower);

document.querySelector("#activate-xray").addEventListener("click", activatePower);

const activateAllPowers = () => {
    const allSections = document.querySelectorAll(".power");
    allSections.forEach(singleSection => {
        singleSection.classList.replace("disabled", "enabled");
    })
    // for(let i = 0; i < allSections.length, i++){
    //     console.log(allSections[i])
    // }
}

const deactivateAllPowers = () => {
    const allSections = document.querySelectorAll(".power");
    allSections.forEach(singleSection => {
        singleSection.classList.replace("enabled", "disabled");
    })
}

// const activateOrDeacti

document.querySelector("#activate-all").addEventListener("click", activateAllPowers);

document.querySelector("#deactivate-all").addEventListener("click", deactivateAllPowers);

function activatePower(event){
    const idOfSection = event.target.id.split("-")[1];
    const sectionToChange = document.querySelector(`#${idOfSection}`)
    sectionToChange.classList.replace("disabled", "enabled");
    // const sectionToChange = 
    // select correct section ^^^^
}

// 1. Add the correct string as the first argument to addEventListener()
// 2. Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// 3. Have your developer tools open. When you click the button, the following element:
/* <section id="flight" class="power disabled">
Should then look like this:
<section id="flight" class="power enabled"> */


// Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements

// document.querySelector("#activate-mindreading").addEventListener()
// document.querySelector("#activate-xray").addEventListener()


// Once that is complete, add two more buttons

// Enable All Powers
// Disable All Powers


// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.

// Googling Tip: Adding classes to DOM components

// Googling Tip: Iterating over DOM components identified with querySelectorAll