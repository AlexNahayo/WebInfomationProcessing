//help from https://www.youtube.com/watch?v=jvk1pFNqXaw&list=LL-xfkJucUlh8CFV3s5XbU5w&index=3&t=0s

//containing the scores and question.
function Quiz(questions){
    // this.id = id;
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
// 1). function to get the index of the current question
// 2). function to get check if the quiz has ended or not
// 3). function to check if the current answer is equal to the actual answer

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function (){
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer){
   
    //navagate to new question even if the user has seleted the wrong aswer.
    if(this.getQuestionIndex().CorrectAnswer(answer)){
        this.score++;
    }

    this.questionIndex++;
}