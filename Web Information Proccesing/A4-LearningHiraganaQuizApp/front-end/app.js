//help from https://www.youtube.com/watch?v=jvk1pFNqXaw&list=LL-xfkJucUlh8CFV3s5XbU5w&index=3&t=0s

function populate() {

    if(quiz.isEnded()){
        showUserScore();
        // showUserNav();
    }
    else {
        //show questions
        var element = document.getElementById("question");
        // set emails of paragraph to the current question.

        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i<choices.length; i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            //determening the correct answer and also moving to the next answer.
            guess("btn"+i, choices[i]);

        }

        showProgres();
    }

};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        //it's also checking if has ended - hence move on to the next question.
        populate();
    }
}

//this function allows us to display the 
function showUserScore(){
    //will replace all the elements from the id= quiz once the user completes the game.
    var gameOverHTMLSwitch = "<h1 >Results</h1>";
    // var gameOverHTMLSwitch2 = "<button>hello</button>";
        gameOverHTMLSwitch += "<h2 id='score' align='center'> Your Score:" +" "+ quiz.score + "0%" +" "+  "<br><button  class='mbtn2'> <a href='index.html'> Go Back</a></button></button>";
            //getting quiz element and replace as stated above.
            var element = document.getElementById("quiz");
        element.innerHTML = gameOverHTMLSwitch;
}


//this will go in effect in the footer of the quiz.
function showProgres(){
    var currentQuestionNumb = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + " " + currentQuestionNumb + " " + " of " + " "+ quiz.questions.length;
}





//question array.
var questions = [
    new Question ("あ", ["a", "e","o", "i"], "a"),
    new Question ("い", ["i", "e","nu", "p"], "i"),
    new Question ("う", ["yo","u","o", "i"], "u"),
    new Question ("え", ["a", "u","e", "i"], "e"),
    new Question ("お", ["no", "u","o", "i"], "o"),
    new Question ("a", ["い", "え","お", "あ"], "あ"),
    new Question ("e", ["い", "え","お", "あ"], "え"),
    new Question ("i", ["い", "え","お", "あ"], "い"),
    new Question ("u", ["い", "え","お", "あ"], "う"),
    new Question ("o", ["い", "え","お", "あ"], "お"),  
];

// var selectedQs = [

// ];

// function currentQuestion(symbol) {
//     for(var i = 0; i<=questions.length ;){
//         if(questions[i].getSymbol=== symbol){
//             selectedQs.push(questions[i]);
//             console.log(selectedQs);

//         }

//     }
// }


//we need to populate the question/check the scores.
var quiz = new Quiz(questions);
populate();

//Gif hovering function
// With help from  https://stackoverflow.com/questions/20249401/onclick-play-gif-image-with-jquery-and-start-from-beginning 
$(document).ready(function()
{
    $(".gif").hover(
        function()
        {
          console.log('rrgvrgvrv');
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.png$/i, ".gif"));
          
        },
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.gif$/i, ".png"));
        });   
       
});  
    
//46 function for audio player mouse clicked.
// From : https://www.quora.com/How-do-you-play-audio-files-on-Javascript
function play42(){
  
  var audio = document.getElementById("player_audio42");
      audio.play();
            }           
function play43(){
  
  var audio = document.getElementById("player_audio43");
      audio.play();
            }           
function play44(){
  
  var audio = document.getElementById("player_audio44");
      audio.play();
            }    
function play45(){
  
  var audio = document.getElementById("player_audio45");
      audio.play();
            }                    
function play46(){
  
  var audio = document.getElementById("player_audio46");
      audio.play();
            }            
function play1(){
  
  var audio = document.getElementById("player_audio1");
      audio.play();
            }           
function play2(){
  
  var audio = document.getElementById("player_audio2");
      audio.play();
            }        
function play3(){
  
  var audio = document.getElementById("player_audio3");
      audio.play();
            } 
function play4(){
  
  var audio = document.getElementById("player_audio4");
      audio.play();
            }                    
function play5(){
  
  var audio = document.getElementById("player_audio5");
      audio.play();
            }                    
function play6(){
  
  var audio = document.getElementById("player_audio6");
      audio.play();
            } 
function play7(){
  
  var audio = document.getElementById("player_audio7");
      audio.play();
            } 
function play8(){
  
  var audio = document.getElementById("player_audio8");
      audio.play();
            }             
function play9(){
  
  var audio = document.getElementById("player_audio9");
      audio.play();
            }            
 function play10(){
  
  var audio = document.getElementById("player_audio10");
      audio.play();
            }            
function play11(){
  
  var audio = document.getElementById("player_audio11");
      audio.play();
            }           
function play12(){
  
  var audio = document.getElementById("player_audio12");
      audio.play();
            } 
function play13(){
  
  var audio = document.getElementById("player_audio13");
      audio.play();
            } 
function play14(){
  
  var audio = document.getElementById("player_audio14");
      audio.play();
            }            
function play15(){
  
  var audio = document.getElementById("player_audio15");
      audio.play();
            }                      
 function play16(){
  
  var audio = document.getElementById("player_audio16");
      audio.play();
            }                       
function play17(){
  
  var audio = document.getElementById("player_audio17");
      audio.play();
            } 
function play18(){
  
  var audio = document.getElementById("player_audio18");
      audio.play();
            } 
function play19(){
  
  var audio = document.getElementById("player_audio19");
      audio.play();
            } 
function play20(){
  
  var audio = document.getElementById("player_audio20");
      audio.play();
            }            
function play21(){
  
  var audio = document.getElementById("player_audio21");
      audio.play();
            }            
 function play22(){
  
  var audio = document.getElementById("player_audio22");
      audio.play();
            }             
function play23(){
  
  var audio = document.getElementById("player_audio23");
      audio.play();
            }                    
function play24(){
  
  var audio = document.getElementById("player_audio24");
      audio.play();
            }                    
function play25(){
  
  var audio = document.getElementById("player_audio25");
      audio.play();
            }                     
function play26(){
  
  var audio = document.getElementById("player_audio26");
      audio.play();
            } 
function play27(){
  
  var audio = document.getElementById("player_audio27");
      audio.play();
            } 
function play28(){
  
  var audio = document.getElementById("player_audio28");
      audio.play();
            }            
function play29(){
  
  var audio = document.getElementById("player_audio29");
      audio.play();
            }           
 function play30(){
  
  var audio = document.getElementById("player_audio30");
      audio.play();
            }           
function play31(){
  
  var audio = document.getElementById("player_audio31");
      audio.play();
            }            
function play32(){
  
  var audio = document.getElementById("player_audio32");
      audio.play();
            } 
function play33(){
  
  var audio = document.getElementById("player_audio33");
      audio.play();
            } 
function play34(){
  
  var audio = document.getElementById("player_audio34");
      audio.play();
            }            
function play35(){
  
  var audio = document.getElementById("player_audio35");
      audio.play();
            }            
 function play36(){
  
  var audio = document.getElementById("player_audio36");
      audio.play();
            }            
function play37(){
  
  var audio = document.getElementById("player_audio37");
      audio.play();
            } 
function play38(){
  
  var audio = document.getElementById("player_audio38");
      audio.play();
            } 
function play39(){
  
  var audio = document.getElementById("player_audio39");
      audio.play();
            } 
function play40(){
  
  var audio = document.getElementById("player_audio40");
      audio.play();
            }           
function play41(){
  
  var audio = document.getElementById("player_audio41");
      audio.play();
            } 


