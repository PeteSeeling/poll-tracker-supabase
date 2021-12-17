

export function renderPoll(poll){

    const newPollEl = document.createElement ('div');
    const newQuestionEl = document.createElement ('p');
    const newOptionAEl = document.createElement ('p');
    const newOptionBEl = document.createElement ('p');
    const newVotesAEl = document.createElement ('p');
    const newVotesBEl = document.createElement ('p');

    newQuestionEl.textContent = poll.question;
    newOptionAEl.textContent = poll.option_a_title;
    newOptionBEl.textContent = poll.option_b_title;
    
    newVotesAEl.textContent = poll.option_a_votes;
    newVotesBEl.textContent = poll.option_b_votes;

    newPollEl.append(newQuestionEl, newOptionAEl, newOptionBEl, newVotesAEl, newVotesBEl);

    return newPollEl;

}