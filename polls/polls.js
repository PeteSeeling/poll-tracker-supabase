// import functions and grab DOM elements
import { getPolls, createPoll, logout, checkAuth } from '../fetch-utils.js';
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
const pastPollsEl = document.querySelector('.past-polls');
const logoutButtonEl = document.getElementById('logout');


let question = '';
let optionATitle = '';
let optionAVotes = 0;
let optionBTitle = '';
let optionBVotes = 0;

checkAuth();

window.addEventListener('load', async() =>{
    await displayPastPolls();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    question = data.get('form-question');
    optionATitle = data.get('option-a');
    optionBTitle = data.get('option-b');
   
    questionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
   
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
    
    displayPastPolls();
    displayCurrentPollEl();
    resetState();
});

logoutButtonEl.addEventListener('click', () =>{
    logout();
});

function makePoll(){
    return {
        question: question,
        optionATitle: optionATitle,
        optionAVotes: optionAVotes,
        optionBTitle: optionBTitle,
        optionBVotes: optionBVotes,
    };
}
function resetState(){
    question = '';
    optionATitle = '';
    optionBTitle = '';
    optionAVotes = 0;
    optionBVotes = 0;

}
function displayCurrentPollEl(){
    const currentPollEl = makeCurrentPoll();

    questionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBTitleEl.textContent = optionBTitle;
    optionBVotesEl.textContent = optionBVotes;

    const newPollEl = renderPoll(currentPollEl);
    console.log(newPollEl);
}
function makeCurrentPoll(){
    return {
        question, optionATitle, optionAVotes, optionBTitle, optionBVotes
    };
}
async function displayPastPolls(){
    const polls = await getPolls();

    pastPollsEl.textContent = '';

    for (let poll of polls){
        const newPollEl = renderPoll(poll);

        pastPollsEl.append(newPollEl);
    }}