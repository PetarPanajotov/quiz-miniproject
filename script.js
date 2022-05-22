let boolean = true
var i = 0
var n = 0; 
let questions = [{
    n: 0,
    question: "What is capital of India?",
    answers: [{ text: "gandhinagar", correct: false },
        { text: "Surat", correct: false },
        { text: "Delhi", correct: true },
        { text: "mumbai", correct: false }
    ]
},
{  n: 1,
    question: "What is capital of Bulgaria?",
    answers: [{ text: "Sofia", correct: true },
        { text: "Plovdiv", correct: false },
        { text: "Varna", correct: false },
        { text: "Moscow", correct: false }
    ]
},
{  n: 2,
    question: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [{ text: "Humanity", correct: false },
        { text: "Health", correct: true },
        { text: "Honour", correct: false },
        { text: "Household", correct: false }
    ]
},
{  n: 3,
    question: "Which Disney character famously leaves a glass slipper behind at a royal ball?",
    answers: [{ text: "Pocahontas", correct: false },
        { text: "Sleeping Beauty", correct: false },
        { text: "Elsa", correct: false },
        { text: "Cinderella", correct: true }
    ]
},
{  n: 4,
    question: "What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
    answers: [{ text: "Hangar", correct: false },
        { text: "Terminal", correct: false },
        { text: "Concourse", correct: false },
        { text: "Carousel", correct: true }
    ]
},
{  n: 5,
    question: "What is capital of fsfs?",
    answers: [{ text: "bg", correct: false },
        { text: "vff", correct: false },
        { text: "bg", correct: true },
        { text: "fv", correct: false }
    ]
},
{  n: 6,
    question: "What is capital of fsfs?",
    answers: [{ text: "bg", correct: false },
        { text: "vff", correct: false },
        { text: "bg", correct: true },
        { text: "fv", correct: false }
    ]
},
{  n: 7,
    question: "What is capital of fsfs?",
    answers: [{ text: "bg", correct: false },
        { text: "vff", correct: false },
        { text: "bg", correct: true },
        { text: "fv", correct: false }
    ]
},
{  n: 8,
    question: "What is capital of fsfs?",
    answers: [{ text: "bg", correct: false },
        { text: "vff", correct: false },
        { text: "bg", correct: true },
        { text: "fv", correct: false }
    ]
},
{  n: 9,
    question: "What is capital of fsfs?",
    answers: [{ text: "bg", correct: false },
        { text: "vff", correct: false },
        { text: "bg", correct: true },
        { text: "fv", correct: false }
    ]
},
{  n: 10,
    question: "What is capital of fsfs?",
    answers: [{ text: "bg", correct: false },
        { text: "vff", correct: false },
        { text: "bg", correct: true },
        { text: "fv", correct: false }
    ]
}]
function game (n) {
    n = 0 + i;
    document.getElementById("question").innerText = questions[n].question;
    document.getElementById("btn1").innerHTML = questions[n].answers[0].text;
    document.getElementById("btn2").innerHTML = questions[n].answers[1].text;
    document.getElementById("btn3").innerHTML = questions[n].answers[2].text;
    document.getElementById("btn4").innerHTML = questions[n].answers[3].text;
    let option1 = questions[n].answers[0].correct;
    let option2 = questions[n].answers[1].correct;
    let option3 = questions[n].answers[2].correct;
    let option4 = questions[n].answers[3].correct;
    document.getElementById("btn1").addEventListener ("click", () => {
        if (option1 == true) {
            document.getElementById("btn1").style.backgroundColor = 'green';
            boolean = false;
        } else {
            document.getElementById("btn1").style.backgroundColor = 'red';
            boolean = false;
        }})
    document.getElementById("btn2").addEventListener ("click", () => {
        if (option2 == true) {
            document.getElementById("btn2").style.backgroundColor = 'green';
            boolean = false;
        } else {
            document.getElementById("btn2").style.backgroundColor = 'red'
            boolean = false;
        }})
    document.getElementById("btn3").addEventListener ("click", () => {
        if (option3 == true) {
            document.getElementById("btn3").style.backgroundColor = 'green';
            boolean = false;
            delay()
        } else {
            document.getElementById("btn3").style.backgroundColor = 'red'
            boolean = false;
            delay()
        }})
    document.getElementById("btn4").addEventListener ("click", () => {
        if (option4 == true) {
            document.getElementById("btn4").style.backgroundColor = 'green';
            boolean = false;
            delay()
        } else {
            document.getElementById("btn4").style.backgroundColor = 'red';
            boolean = false;
            delay()
        }})
} 
game()
function delay () {
    if (boolean = false) {
    setInterval(nextQuestion, 1500)
    }
}
function nextQuestion() {
    if (n < questions.length) {
        i++;
        game();
        document.getElementById("btn1").style.backgroundColor = '';
        document.getElementById("btn2").style.backgroundColor = '';
        document.getElementById("btn3").style.backgroundColor = '';
        document.getElementById("btn4").style.backgroundColor = '';
    }    
} 