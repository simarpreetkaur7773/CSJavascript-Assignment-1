// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var btnNoun1 = document.querySelector("#noun1");
var btnVerb = document.querySelector("#verb");
var btnAdjective = document.querySelector("#adjective");
var btnNoun2 = document.querySelector("#noun2");
var btnSetting = document.querySelector("#setting");

// constants for p tag to display query selectors
var displayNoun1 = document.querySelector("#choosenNoun1");
var displayVerb = document.querySelector("#choosenVerb");
var displayAdjective = document.querySelector("#choosenAdjective");
var displayNoun2 = document.querySelector("#choosenNoun2");
var displaySetting = document.querySelector("#choosenSetting");

// constants for final buttons and p tags
var btnPlayback = document.querySelector("#playback");
var btnRandom = document.querySelector("#random");
var displayStory = document.querySelector("#story");

// Variables for pre-defined arrays
let nouns1 = ["The turkey", "The dog", "Mom", "Dad", "My Teacher", "The Elephant", "The Cat"];
let verbs = ["ate", "kissed", "saw", "danced", "with", "doesn't like", "sat on"];
let adjectives = ["a scary", "a sad", "a goofy", "a slimy", "a fat", "a barking"];
let nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let settings = ["in my spaghetti", "on the moon", "in my soup", "on the grass", "on the chair"];

// Variables for storing chosen words
let chosenNoun1 = '';
let chosenVerb = '';
let chosenAdjective = '';
let chosenNoun2 = '';
let chosenSetting = '';

/* Functions
-------------------------------------------------- */
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function noun1_on_click() {
    if (nouns1.length > 0) {
        chosenNoun1 = getRandomElement(nouns1);
        displayNoun1.innerText = chosenNoun1;
    } else {
        console.warn("The nouns1 array is empty!");
    }
}

function verb_on_click() {
    chosenVerb = getRandomElement(verbs);
    displayVerb.innerText = chosenVerb;
}

function adjective_on_click() {
    chosenAdjective = getRandomElement(adjectives);
    displayAdjective.innerText = chosenAdjective;
}

function noun2_on_click() {
    chosenNoun2 = getRandomElement(nouns2);
    displayNoun2.innerText = chosenNoun2;
}

function setting_on_click() {
    chosenSetting = getRandomElement(settings);
    displaySetting.innerText = chosenSetting;
}

function playback_on_click() {
    if (chosenNoun1 && chosenVerb && chosenAdjective && chosenNoun2 && chosenSetting) {
        displayStory.innerText = `${chosenNoun1} ${chosenVerb} ${chosenAdjective} ${chosenNoun2} ${chosenSetting}.`;
    } else {
        displayStory.innerText = "Please select all words before playing back the story.";
    }
}

function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

function resetStory() {
    chosenNoun1 = '';
    chosenVerb = '';
    chosenAdjective = '';
    chosenNoun2 = '';
    chosenSetting = '';

    displayNoun1.innerText = '';
    displayVerb.innerText = '';
    displayAdjective.innerText = '';
    displayNoun2.innerText = '';
    displaySetting.innerText = '';
    displayStory.innerText = '';
}
function studentInfo() {
    var studentName = "Simarpreet Kaur";
    document.querySelector("#studentId").innerText = "Student ID:200520470 " + studentName;
}


/* Event Listeners
-------------------------------------------------- */
btnNoun1.addEventListener("click", noun1_on_click);
btnVerb.addEventListener("click", verb_on_click);
btnAdjective.addEventListener("click", adjective_on_click);
btnNoun2.addEventListener("click", noun2_on_click);
btnSetting.addEventListener("click", setting_on_click);
btnPlayback.addEventListener("click", playback_on_click);
btnRandom.addEventListener("click", random_on_click);
document.querySelector("#studentInfo").addEventListener("click", studentInfo);


// Creating and appending the reset button
var btnReset = document.createElement("button");
btnReset.id = "reset";
btnReset.innerText = "Reset Story";
btnReset.addEventListener("click", resetStory);
document.querySelector("section:nth-of-type(2)").appendChild(btnReset);