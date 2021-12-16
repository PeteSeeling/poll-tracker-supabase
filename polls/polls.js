// import functions and grab DOM elements
import { createPoll } from '../fetch-utils.js';


const form = document.getElementById('form');
const questionEl = document.getElementById('question');
const optionATitleEl = document.getElementById('option-a-title');
const optionAVotesEl = document.getElementById('option-a-votes');

const optionBTitleEl = document.getElementById('option-b-title');
const optionBVotesEl = document.getElementById('option-b-votes');
const optionAAddButton = document.getElementById('option-a-add');
const optionBAddButton = document.getElementById('option-b-add');
const closePollButton = document.getElementById('close-poll');
const currentPollEl = document.getElementById('current-poll');

// let state
let pastPollsArray = [];


// set event listeners 
  // get user input
form.addEventListener('sibmit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const question = formData.get('question');
    const optionA = formData.get('option-a');
    const optionB = formData.get('option-b');

    

    console.log(question);
    form.reset();

    displayCurrentPollEl();

});

function displayCurrentPollEl(){

    currentPollEl.textContent = '';


}

  // use user input to update state 
  // update DOM to reflect the new state
