

var questionBank= [
    {
        question: "Commonly used data types do NOT include:",
        choices: ["a. booleans", "b. alerts", "c. numbers", "d. strings"],
        answer: "b. alerts"
    },
    
    {
        question: "The first index of an array is labeled ______:",
        choices: ["a. value", "b. 0", "c. 1", "d. none"],
        answer: "b. 0"
    },
    {
        question: "Arrays can be used to store _______",
        choices: ["a. numbers", "b. strings", "c. arrays", "d. all of the above"],
        answer: "d. all of the above"
    },
    
    {
        question: "Inside which HTML element do we put the javascript file?",
        choices: ["a. <js>", "b. <javascript>", "c. <script>", "d. <java>"],
        answer: "c. <script>"
    },
    
    {
        question: "How to note that two variables are equal in value in an if/else statement?",
        choices: ["a. =", "b. equals", "c. !=", "d. =="],
      answer: "d. =="
    },
    
    {
        question: "How do you add a comment in Javascript?",
        choices: ["a. //This is a comment", "b. ==This is a comment.", "c. This is a comment.", "d. !This is a comment."],
        answer: "a. //This is a comment."
    },
    
    {
        question: "How to write an IF statement in Javascript?",
        choices: ["a. if i==5 then", "b. if i=5 then", "c. if(i==5)", "d. if i=5"],
        answer: "c. if(i==5)"
    },
    
    {
        question: "What HTML tag is not included in the HEAD tag?",
        choices: ["a. link", "b. meta", "c. title", "d. header"],
        answer: "b. header"
    },
    
    {
        question: "In HTML, what attribute is used to 'decorate content'?",
        choices: ["a. css", "b. class", "c. src", "d. style"],
        answer: "d. style"
    },
    
    {
        question: "When assigned to variables, what are string values enclosed in?",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    
    },
    ]
    
       
    //   for (var i=o, i=questionBank.length, i++);
    //     var random1 = Math.floor(Math.random() * questionBank.length) ;
    // var choice1 = questions[random1];
        
    
    var currentIndex=0
        questionBank[currentIndex].choices
        var questionArea = document.querySelector("#question")
        var startButton = document.querySelector("#start") 
    
        // startButton.addEventListener("click", function (){
        //     console.log ("Hello")
        // });
    
        // Alternative to the addeventlistener
    

    
    function start (){
        console.log ("Hello")
            
        createQuiz ()
    
    }
    startButton.onclick = start

    function createQuiz () {
        questionArea.textContent=questionBank[currentIndex].question
    
        for (i=0; i<questionBank[currentIndex].choices.length; i++) {
            console.log (questionBank[currentIndex].choices[i])
            var currentAnswer=document.querySelector("#answer-" + (i+1).toString())
            console.log (currentAnswer)
            currentAnswer.textContent = questionBank[currentIndex].choices[i]
            
        }
        currentAnswer.addEventListener('click', CheckAnswer(currentAnswer.textContent))
    }
    
        function CheckAnswer (rightAnswer){
            console.log (rightAnswer)
        console.log (questionBank[currentIndex].answer)
           
    //           if (rightAnswer == questionBank[currentIndex].answer) {
    //          score++
    //          alert("Correct!")
    //          console.log("Correct")
    //          currentIndex++
    //      }
    
    //          else { 
    //              alert("That is Incorrect!")
    //              console.log("incorrect")
    //              currentIndex++
    // }
}
    // recalling the function to move to the next question
    
    createQuiz ()
    
    // setInterval(function () {
    
    // }, 1000
    
    // if (timeleft>0) {
    // // timerEl.textContent=timeleft + "seconds remaining"
    
    // var countdown = document.querySelector("countdown")
    
    // function countdown() {
    //     var timeLeft = 30;
    
    //     var countdown = document.querySelector("#countdown")
    
    // var timeInterval = setInterval(function countdown() {
    //     // As long as the `timeLeft` is greater than 1
    //     if (timeLeft > 1) {
    //       // Set the `textContent` of `timerEl` to show the remaining seconds
    //       timerEl.textContent = timeLeft + ' seconds remaining';
    //       // Decrement `timeLeft` by 1
    //       timeLeft--;
    //     } else if (timeLeft === 1) {
    //       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
    //       timerEl.textContent = timeLeft + ' second remaining';
    //       timeLeft--;
    //     } else {
    //       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
    //       timerEl.textContent = '';
    //       // Use `clearInterval()` to stop the timer
    //       clearInterval(timeInterval);
    //       // Call the `displayMessage()` function
    //       displayMessage();
    //     }
    //   }, 1000);
    
    
     
    //     // if (console.log) == answer) {
    //     //     console.log ("Correct")
    //     // }
    
    
    // //  check answer, recall function,     
    
    
    
    //     // create button/li, or whatever for each choice and put in the html
    
    
    
    // // currentIndex++, then call the function, which will create a new question and answer set.
    // }