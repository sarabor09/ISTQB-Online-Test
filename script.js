let correctAnswer1 = "option1";
let correctAnswer2 = "option3";
let correctAnswer3 = "option3";
let correctAnswer4 = "option2";
let correctAnswer5 = "option1";
let correctAnswer6 = "option3";
let correctAnswer7 = "option3";
let correctAnswer8 = "option2";
let correctAnswer9 = "option3";
let correctAnswer10 = "option2";




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

    switch(numQuestion){
        case 1: 
            correctAnswer = correctAnswer1;
            break;
        case 2:
            correctAnswer = correctAnswer2;
            break;
        case 3:
            correctAnswer = correctAnswer3;
            break;
        case 4: 
            correctAnswer = correctAnswer4;
            break;
        case 5:
            correctAnswer = correctAnswer5;
            break;
        case 6:
            correctAnswer = correctAnswer6;
            break;
        case 7: 
            correctAnswer = correctAnswer7;
            break;
        case 8:
            correctAnswer = correctAnswer8;
            break;
        case 9:
            correctAnswer = correctAnswer9;
            break;
        case 10:
            correctAnswer = correctAnswer10;
            break;
    }
    
    if(option == null){
        alert(messageWrong + " 0 points");
    } 
    else if (correctAnswer == option.id){
        alert (messageCorrect);
    } else {
        alert (messageWrong + " -1 points");
    }

}
function showAnswer(numQuestion){
    let correctAnswer;

    switch(numQuestion){
        case 1: 
            correctAnswer = document.querySelector('input[name="option'+numQuestion+'"][id="'+correctAnswer1+'"]');
            break;
        case 2:
            correctAnswer = document.querySelector('input[name="option'+numQuestion+'"][id="'+correctAnswer2+'"]');
            break;
        case 3:
            correctAnswer = document.querySelector('input[name="option'+numQuestion+'"][id="'+correctAnswer3+'"]');
            break;
        case 4:
            correctAnswer = document.querySelector('input[name="option'+numQuestion+'"][id="'+correctAnswer4+'"]');
            break;
        case 5:
            correctAnswer = document.querySelector('input[name="option'+numQuestion+'"][id="'+correctAnswer5+'"]');
            break;
        case 6:
            correctAnswer = document.querySelector('input[name="option'+numQuestion+'"][id="'+correctAnswer6+'"]');
            break;
        case 7:
            correctAnswer = document.querySelector('input[name="option'+numQuestion+'"][id="'+correctAnswer7+'"]');
            break;
        case 8:
            correctAnswer = document.querySelector('input[name="option'+numQuestion+'"][id="'+correctAnswer8+'"]');
            break;
        case 9:
            correctAnswer = document.querySelector('input[name="option'+numQuestion+'"][id="'+correctAnswer9+'"]');
            break;
        case 10:
            correctAnswer = document.querySelector('input[name="option'+numQuestion+'"][id="'+correctAnswer10+'"]');
            break;
    }
    
    correctAnswer.checked = true;  

}