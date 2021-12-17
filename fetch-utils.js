import { renderPoll } from './render-utils.js';

const supabase_Url = 'https://osvbnemrpkxnsdboazbe.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODkwMywiZXhwIjoxOTU1MDg0OTAzfQ.WbfpkieH6xyID6pt237Vr_Y78Fs1wnkmUdHXoHg5twU';
const client = supabase.createClient(supabase_Url, SUPABASE_KEY);


export async function getUser(){
    return client.auth.session();

}
export async function checkAuth(){
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectToPolls(){
    if (await getUser()) {
        location.replace('./polls');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout(){
    await client.auth.signOut();

    return window.location.href = '/';
}

export async function getPolls() {
    const response = await client
        .from('polls')
        .select()
        .match({ user_id: client.auth.user().id, });
    console.log(response.data);
    return response.data;
}

export async function createPoll(question, optionATitle, optionBTitle, optionAVotes, optionBVotes) {
    const response = await client
        .from('polls')
        .insert({
            
            question: question,
            option_a_title: optionATitle,
            option_a_votes: optionAVotes,
            option_b_title: optionBTitle,
            option_b_votes: optionBVotes,

            user_id: client.auth.user().id, 
        });
      
        
        // .select('*');
   
    console.log(response.data);

    return response.data;
}



