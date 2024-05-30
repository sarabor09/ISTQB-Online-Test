function welcome(){ 
    let name = document.getElementById("name").value;
    let welcomeName = document.getElementById("welcomeName")
    if (name.length > 0){
        let message = "Welcome to ISTQB Online Test " + name;
        welcomeName.innerText = message;
    }
}

function send(){
    let correctAnswer = "option1";
    let answer = document.getElementsByName("option").value;
    let messageCorrect = "Correct answer";
    let messageWrong = "Wrong answer";
    
    if (correctAnswer == answer){
        alert (messageCorrect);
    } else {
        alert (messageWrong);
    }


}