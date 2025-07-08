const button=document.getElementById('button');
const ans=document.getElementById('ans');

const apiUrl="https://official-joke-api.appspot.com/random_joke";
button.addEventListener('click',async function(){    // here asyn is imp bcs of await keyword and await is imp while fetching we have to wait
  const data= await getJoke(apiUrl);
   // ans.innerHTML= `${data}`;//show only object object
   ans.innerHTML= `${data.setup}<br>${data.punchline}`;   // api have many things in data we want to access only setup and punchline
})

async function getJoke(apiUrl) {
    const joke= await fetch(apiUrl);
    const jokeObj= await joke.json(); // convert data string to object
    return jokeObj;
}