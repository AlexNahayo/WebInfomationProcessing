//help from https://www.youtube.com/watch?v=jvk1pFNqXaw&list=LL-xfkJucUlh8CFV3s5XbU5w&index=3&t=0s

//created a Question object with three different parameters.
function Question( text, choices, answer) {
   // this.id = id
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//return choice made by user
Question.prototype.CorrectAnswer = function(choice) {
    return this.answer === choice;
}
