var questionsEl = document.getElementById("questions"); //references the different questions with the choices
var questionChoices = document.getElementById("choices"); //references the different choices, choices will act like submit button as well
var titleEl = document.getElementById("question-title");
var startButtonEl = document.getElementById("start-btn");
var questionsIndex = 0;
var genreContainer = document.getElementById("game-container");


var questions = [
  {
    title: "Which one do you prefer?",
    choices: ["Adventure", "RPG", "Shooter", "Simulation", "Sports", "Racing"]
  }
  // {
  //   title: "Do you prefer a console or a PC?",
  //   choices: ["Console", "PC"],
  // },
  // {
  //   title: "How much time do you spend per week gaming?",
  //   choices: ["Less than 2 hours", "2-4 hours", "4-6 hours", "6+ hours"],
  // },
  //  {
  //   title: "On a scale of 1-5 (1 = dislike, 5 = like) rate the following genre: Adventure",
  //   choices: ["1", "2", "3", "4", "5"],
  //   answer: 5
  // },
  // {
  //   title: "On a scale of 1-5 (1 = dislike, 5 = like) rate the following genre: RPG",
  //   choices: ["1", "2", "3", "4", "5"],
  // },
  // {
  //   title: "On a scale of 1-5 (1 = dislike, 5 = like) rate the following genre: First-Person Shooter",
  //   choices: ["1", "2", "3", "4", "5"],
  // },
  // {
  //   title: "On a scale of 1-5 (1 = dislike, 5 = like) rate the following genre: Simulation",
  //   choices: ["1", "2", "3", "4", "5"],
  // },
  // {
  //   title: "On a scale of 1-5 (1 = dislike, 5 = like) rate the following genre: Sports",
  //   choices: ["1", "2", "3", "4", "5"],
  // },
  // {
  //   title: "On a scale of 1-5 (1 = dislike, 5 = like) rate the following genre: Racing",
  //   choices: ["1", "2", "3", "4", "5"],
  // },
  // {
  //   title: "What is your age?",
  //   choices: ["Younger than 15", "15-20", "20-25", "25-30", "30+"],
  // },
  // {
  //   title: "What level of difficulty are you looking for?",
  //   choices: ["Easy", "Moderate", "Hard"],
  // }
];


//var submitButton = document.getElementById("submit"); //XXXXXXXXXX JESSIE AND TRENT XXXXXXXXXXX IF YOU WANT TO LINK TO ANOTHER HTML PAGE

function startQuiz() { //what happens when you press the start quiz button
  var startScreenEl = document.getElementById("start-screen"); //select the first page html
  startScreenEl.setAttribute("class", "hide"); // references the css stylesheet, display: none .....so this hides the initial page
  questionsEl.removeAttribute("class", "hide"); // this will display the questions
  questionsEl.setAttribute("class", "questions");

  getQuestion();  //transitional function to next function
}

function getQuestion() {
  var currentQuestion = questions[questionsIndex]; //XXXXXXXXXX JESSIE AND TRENT XXXXXXXXXXX this is for the api's YOU CAN CHANGE THE QUESTION INDEX TO YOUR API

  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  titleEl.setAttribute("class", "content questions");
  titleEl.setAttribute("class", "question-title has-text-white");

  //questionChoices.innerHTML = ""; //delete old choices



  currentQuestion.choices.forEach(function (choices, i) {  // create a loop to actually add in the new choices https://stackoverflow.com/questions/56024232/use-the-foreach-function-to-add-option-elements-to-select-html-element    
    //because the old choices are deleted this will add brand new choices into the mix, it doesnt replace the values, rather it hides the values and unhides new values which are in the array https://utah.bootcampcontent.com/utah-coding-bootcamp/uofu-virt-bo-fsf-pt-06-2021-u-b/-/tree/master/04-Web-APIs/02-Challenge
    var loopChoices = document.createElement("button");
    loopChoices.setAttribute("class", "choice button is-danger");
    loopChoices.setAttribute("value", choices);

    loopChoices.textContent = i + 1 + ". " + choices;   //https://www.youtube.com/watch?v=49pYIMygIcU  its like 40 minutes long and they didn't section it out but its full of good information


    loopChoices.onclick = onButtonClick;

    console.log(questionChoices);

    // let attribute = questionChoices.getAttribute(choices);
    // console.log(attribute)
    $("button").click(function () {
      var fired_button = $(this).val();
      console.log(fired_button)
    });



    questionChoices.appendChild(loopChoices); // puts the values on the page //XXXXXXXXXX JESSIE AND TRENT XXXXXXXXXXX PROBABLY GOING TO NEED TO CHANGE/DELETE THIS FOR API

  });
}


function onButtonClick() {

  //XXXXXXXXXX JESSIE AND TRENT XXXXXXXXXXX this is for the api's

  questionsIndex++; // this moves the question along!!!!!!

  if (questionsIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

function endQuiz() {

  var finalResults = document.getElementById("final-results");
  finalResults.removeAttribute("class"); // this will display the final results
  finalResults.setAttribute("class", "results");

  questionsEl.setAttribute("class", "hide");   //hide questions


  //XXXXXXXXXX PLACE HOLDER FOR JESSIE AND TRENT XXXXXXXXXXX 
  //var scoreEl = document.getElementById("score");   //display final score
  //scoreEl.textContent = time;

  //gets results for adventure genre onto page
  genreAdventure();

}

function genreAdventure() {

  var genreApi = "https://api.rawg.io/api/genres?key=63a5c26330c14fde8375dae993498847"

  fetch(genreApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // var genreContainer = document.getElementById("game-container");

      // var gameName = document.createElement("span");
      // var rpgResult = data.results[3].name;
      // //results[2].games[0].name
      // //console.log(data.results[2].games[2].name);
      // if (rpgResult === "RPG") {
      //   gameName.textContent = data.results[3].games[1].name;
      // } else {
      //   console.log(data.results[3].name)
      // };
      // console.log(data.results[i].name)
      for (var i = 0; i < data.results.length; i++) {
        //format repo name
        var gameName = data.results[i].name;

        //create a span element to hold repository name 
        var titleEL = document.createElement("span");
        titleEL.textContent = gameName;

        //append container to the dom 
        genreContainer.appendChild(titleEL);
        console.log(titleEL);

      }

    });
}






//XXXXXXXXXX JESSIE AND TRENT XXXXXXXXXXX IF YOU WOULD LIKE TO LINK TO ANOTHER HTML FILE FOR THE GOOGLE MAPS 
//function showHighScores() {
//this is where we GET the highscores from localstorage
//var highScores = JSON.parse(window.localStorage.getItem("highScores")) || []; //https://stackoverflow.com/questions/60037063/how-to-save-scores-in-javascript-quiz
//formats the scores into two different sections to store them appropriately 
//var quizResults = {
//  score: time, 
//  initials: initials
//};
//this pushes the newly formatted scores to local storage for future reference 
//highScores.push(quizResults);
//window.localStorage.setItem("highScores", JSON.stringify(highScores));

//window.location.href = "highscore.html";   //this will take us to the separate html page
//}
//oneButton.onclick = showHighScores;


startButtonEl.onclick = startQuiz; //this starts the quiz



//localStore api response 


