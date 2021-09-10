var readlineSync = require("readline-sync");
let userScore=0;
var scoreboard=
[
  {
    user:"John",
    score:2
  }
]
let HighestScore= scoreboard[0].score;
var userName= readlineSync.question('What is your name? ');
console.log(`Welcome ${userName}! This is Anime Knowledge Quiz with 10 questions and no negative marking to check your Anime knowledge\nType A, B, C or D to choose your answer\n`);

var questionsAndAnswers = 
[
    {
      question:"\n1.Anime- Naruto \nWhich jutsu did reanimated Itachi used on Kabuto to stop him?  \nA:Izanagi  \nB:Izanami  \nC:Yata Mirror  \nD:Tsukuyomi \nAnswer:",
      answer:"B"
    },
    {
      question:"\n2.Anime- Death Note \nWho wrote Light Yagami's name in Death Note?  \nA:L  \nB:Matsuda  \nC:Near  \nD:Ryuk \nAnswer:",
      answer:"D"
    },
    {
      question:"\n3.Anime- Black Clover \nAsta's grimoire have how many leaves on it?  \nA:3  \nB:4  \nC:5  \nD:6 \nAnswer:",
      answer:"C"
    },
    {
      question:"\n4.Anime- Steins Gate \nWhat is the name of the ability to retain memories across world lines?  \nA:Steins Gate  \nB:Reading Steiner  \nC:Divergence Paradox  \nD:Quantum Deviant Effect \nAnswer:",
      answer:"B"
    },
    {
      question:"\n5.Anime- Code Geass \nWhat is Lelouch Geass's power called?  \nA:Geass Cancel  \nB:Seal of Absolute Suspension  \nC:Memory Alteration  \nD:Power of Absolute Obedience \nAnswer:",
      answer:"D"
    },
    {
      question:"\n6.Anime- Erased \nWhat is Satoru's ability to travel through time to prevent mishap called?  \nA:Revival  \nB:Premonitions  \nC:Anti-Matter Manipulation  \nD:Interdimensional Travel \nAnswer:",
      answer:"A"
    },
    {
      question:"\n7.Anime- Sword Art Online \nWhich sword has NOT been weilded by Kirito?  \nA:The Time Piercing Sword  \nB:The Elucidator  \nC:The Dark Repulser  \nD:The Night Sky Sword \nAnswer:",
      answer:"A"
    },
    {
      question:"\n8.Anime- Attack on Titan \nWho received the power of the Founding Titan in 104th Cadet Corps?  \nA:Armin  \nB:Anne  \nC:Eren  \nD:Reiner \nAnswer:",
      answer:"C"
    },
    {
      question:"\n9.Anime- Black Clover \nWhich type of power does Asta's grimoire gives?  \nA:Blood Magic  \nB:Fire Magic  \nC:Time Magic  \nD:Anti Magic \nAnswer:",
      answer:"D"
    },
    {
      question:"\n10.Anime- Naruto \nWho was declared the strongest shinobi by Madara Uchiha?  \nA:Naruto \nB:Sasuke  \nC:Might Guy  \nD:Itachi \nAnswer:",
      answer:"C"
    }
]

function play(question,answer)
{
  var userAnswer= readlineSync.question(question);
  if((userAnswer.toUpperCase())===(answer.toUpperCase()))
  {
    console.log("Correct Answer! :D\n");
    userScore++;
  }
  else
  {
    console.log("Wrong Answer! :(\n");
  }
}

questionsAndAnswers.forEach(currentQuestion=>
{
  play(currentQuestion.question,currentQuestion.answer)
});

console.log(`\n--------------------------------------------------`);
console.log(`Great, you completed the quiz!\nYour final score : ${userScore} \n`);

if(userScore>HighestScore)
{
  console.log("New High Score!!!")
  HighestScore=userScore;
}


console.log(`Highest Score : ${HighestScore}`);
