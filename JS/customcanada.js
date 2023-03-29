//This the currency converter, it uses the rates at off 1:55am 28/01/2018
function poundConverter(){
document.converter.cad.value = document.converter.pound.value * 1.74278
}
function cadConverter(){
document.converter.pound.value = document.converter.cad.value * 0.573797
}
//This sets all my questions for the country so it can later output them on the website
(function() {
  const canadaQuestions = [
    {
      question: "What is the Capital of Canada?",
      answers: {
        a: "Ontario",
        b: "Ottawa",
        c: "Toronto",
        d: "Saskatchewan"
      },
	  //This line is to set the answer
      correctAnswer: "b"
    },
    {
      question: "How many provinces are in Canada?",
      answers: {
        a: "10",
        b: "13",
        c: "5",
        d: "8"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the currency often referred to?",
      answers: {
        a: "Bob",
        b: "Loonie",
        c: "Tanner",
        d: "Tohoku"
      },
      correctAnswer: "b"
    },
    {
      question: "What currency is used in Canada?",
      answers: {
        a: "Yen",
        b: "Canadian Dollar",
        c: "Pound",
        d: "Euro"
      },
      correctAnswer: "b"
    },
    {
      question: "Canada is the world's second largest country by what?",
      answers: {
        a: "Population",
        b: "Land Area",
        c: "Total area",
        d: "Water area"
      },
      correctAnswer: "c"
    },
    {
      question: "What province has is the largest?",
      answers: {
        a: "Quebec",
        b: "Ontario",
        c: "British Columbia",
        d: "Nova Scotia"
      },
      correctAnswer: "a"
    }
  ];

  function buildQuiz() {
	  // This stores the HTML output
    const output = [];

	// for each question this lists the answer choices.
    canadaQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
		  // For the available answers it adds a radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

	  // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

	// finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
	  // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

	 // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    canadaQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // Shows how many answers you get correct out of the total amount of questions
    resultsContainer.innerHTML = `${numCorrect} out of ${canadaQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // Display the quiz
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // Shows the results when you click Submit.
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
