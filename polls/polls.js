// import functions and grab DOM elements
import { getPolls, createPoll } from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';


const form = document.getElementById('form');
const questionEl = document.querySelector('.question');
const optionATitleEl = document.getElementById('option-a-title');
const optionAVotesEl = document.getElementById('option-a-votes');

const optionBTitleEl = document.getElementById('option-b-title');
const optionBVotesEl = document.getElementById('option-b-votes');
const optionAAddButton = document.getElementById('option-a-add');
const optionBAddButton = document.getElementById('option-b-add');
const closePollButton = document.getElementById('close-poll');
const currentPollEl = document.querySelector('.current-poll');

// let state

let question = '';
let optionATitle = '';
let optionAVotes = 0;
let optionBTitle = '';
let optionBVotes = 0;

let pastPollsArray = [];

// set event listeners 
  // get user input
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    question = data.get('form-question');
    optionATitle = data.get('option-a');
    optionBTitle = data.get('option-b');
   

    questionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
   
    console.log(question, optionATitle, optionBTitle);
    form.reset();
    displayCurrentPollEl();
});



optionAAddButton.addEventListener('click', () => {
    optionAVotes++;

    optionAVotesEl.textContent = optionAVotes;
});


optionBAddButton.addEventListener('click', () => {
    optionBVotes++;

    optionBVotesEl.textContent = optionBVotes;
});

closePollButton.addEventListener('click', async() =>{
    currentPollEl.textContent = '';

    const poll = makePoll();

    await createPoll(poll);
    
    
    const polls = await getPolls();
    console.log(polls);
    

});


  // use user input to update state 
  // update DOM to reflect the new state
function makePoll(){
    return {
        question: question,
        optionAtitle: optionATitle,
        optionBTitle: optionBTitle,
        optionAVotes: optionAVotes,
        optionBVotes: optionBVotes,
    };
}
function resetState(){
    question = '';
    optionATitle = '';
    optionBTitle = '';
    optionAVotes = 0;
    optionBVotes = '';

}

function displayCurrentPollEl(){
    
    const currentPollEl = makeCurrentPoll();

    questionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;

    const newPollEl = renderPoll(currentPollEl);

    // newPollEl.append(currentPollEl);

}

function makeCurrentPoll(){
    return {
        question, optionATitle, optionBTitle, optionAVotes, optionBVotes
    };
}