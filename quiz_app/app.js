function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the world's largest continent?", ["Europe", "Antartica","Asia", "Australia"], "Asia"),
    new Question("What percentage of the River Nile is located in Egypt?", ["2%", "5%", "10%", "3%"], "5%"),
    new Question("What is the largest country in South America?", ["Argentina", "Guyana","brazil", "Peru"], "brazil"),
    new Question("What is the oldest active volcano on Earth?", ["Admas", "Agua", "Etna", "Adwa"], "Etna"),
    new Question("What Hawaiian island is known as 'Bird Island'", ["Coconut Island", "Nihoa", "Maui", "Kuai"], "Nihoa")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





