const button = document.getElementById('button');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const eight = document.getElementById('eight');
const options = [  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes – definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don’t count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again"];

button.addEventListener('click', function(){
  if (question.value.length < 1) {
    alert("Please enter a question");
  } else {
    eight.innerHTML = "";
    const num = question.value.length % options.length;
    answer.innerHTML = options[num];
  }
});

document.getElementById('answer').style.color = white;
