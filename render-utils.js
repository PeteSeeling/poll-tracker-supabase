

export function renderPoll(polls){

    const newPollEl = document.createElement ('div');
    const newQuestionEl = document.createElement ('p');
    const newOptionAEl = document.createElement ('p');
    const newOptionBEl = document.createElement ('p');
    const newVotesAEl = document.createElement ('p');
    const newVotesBEl = document.createElement ('p');

    newQuestionEl.textContent = polls.question;
    newOptionAEl.textContent = polls.option_a_title;
    newOptionBEl.textContent = polls.option_b_title;
    
    newVotesAEl.textContent = polls.option_a_votes;
    newVotesBEl.textContent = polls.option_b_votes;

    newPollEl.append(newQuestionEl, newOptionAEl, newOptionBEl, newVotesAEl, newVotesBEl);

    return newPollEl;

}



