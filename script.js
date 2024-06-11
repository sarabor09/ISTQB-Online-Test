let correctAnswerArray = ["option1", "option3","option3", "option2", "option1", "option3", "option3", "option2","option3", "option2"];


function welcome(){ 
    let name = document.getElementById("name").value;
    let welcomeName = document.getElementById("welcomeName")
    if (name.length > 0){
        let message = "Welcome to ISTQB Online Test " + name;
        welcomeName.innerText = message;
    }
}

function send(numQuestion){
    let correctAnswer;
    let option = document.querySelector('input[name="option'+numQuestion+'"]:checked');
    let messageCorrect = "Correct answer 2 points";
    let messageWrong = "Wrong answer";
    let answerText = document.getElementById("answerText"+numQuestion);

    correctAnswer = correctAnswerArray[numQuestion - 1];

    if(option == null){
        answerText.innerText = messageWrong + " 0 points";
    } 
    else if (correctAnswer == option.id){
        answerText.innerText = messageCorrect;
    } else {
        answerText.innerText = messageWrong + " -1 points";
    }

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
