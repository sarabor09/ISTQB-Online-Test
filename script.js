const correctAnswerArray = ["option1", "option6","option9", "option11", "option13", 
"option18", "option21", "option23","option27", "option29"];
let rankingList = [];

function welcome(){ 
    let userName = document.getElementById("name").value;
    let welcomeName = document.getElementById("welcomeName")
    let finishButton = document.getElementById("finishButton");

    if (userName.length > 0){
        let message = "Welcome to ISTQB Online Test " + userName;
        welcomeName.innerText = message;
        finishButton.disabled = false;

    } else {
        finishButton.disabled = true;
        welcomeName.innerText = "";
    }
}

function send(numQuestion){
    let correctAnswer;
    let option = document.querySelector('input[name="option'+numQuestion+'"]:checked');
    let messageCorrect = "Correct answer 2 points";
    let messageWrong = "Wrong answer";
    let answerText = document.getElementById("answerText"+numQuestion);
    let points = 0;

    correctAnswer = correctAnswerArray[numQuestion - 1];

    if(option == null){
        answerText.innerText = messageWrong + " 0 points";
    } 
    else if (correctAnswer == option.id){
        answerText.innerText = messageCorrect;
        points = 2;
    } else {
        answerText.innerText = messageWrong + " -1 points";
        points = -1;
    }

    return points;
}

function showAnswerText(numQuestion, solution){
    let answerText = document.getElementById("answerText"+numQuestion);
    answerText.innerText = "Correct answer is " + solution;
}

function reset(numQuestion){
    let option = document.querySelector('input[name="option'+numQuestion+'"]:checked');
    if(option != null){
        option.checked = false;
    }
    let answerText = document.getElementById("answerText"+numQuestion);
    answerText.innerText = "";
}

function finish() {

    let userResult = 0;
    let resultText = document.getElementById("result");
    let userName = document.getElementById("name").value;

    for (let numQuestion = 1; numQuestion <= 10; numQuestion++) {

        userResult = userResult + send(numQuestion);
    }

    resultText.innerText = "You're result is " + userResult + " points."

    let newUser = {
        name : userName,
        result : userResult
    }

    rankingList.push(newUser);

}

function resetAll() {

    let resultText = document.getElementById("result");

    for (let numQuestion = 1; numQuestion <= 10; numQuestion++) {

        reset(numQuestion);
    }

    resultText.innerText = "";
}

function showRanking() {
    let rankingListContainer = document.getElementById("rankingList");
    rankingListContainer.innerHTML = "";

    rankingList.sort((a, b) => b.result - a.result)

    let row ="<ol>"
    rankingList.forEach( user => {
         row = row + "<li>" + user.name + " --> " + user.result + "</li>";
        
    })

    row = row + "<ol>"
    rankingListContainer.innerHTML = row;

    let rankingContainer = document.getElementById("ranking");
    rankingContainer.hidden = false;
}
