let index = 0;
let num = 0;
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
let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');
let button4 = document.getElementById('btn4');
let questionAsked = document.getElementById('question');
options(num);

function options (num) {
    questionAsked.innerText = questions[num].question;   
    button1.innerText = questions[num].answers[0].text
    button2.innerText = questions[num].answers[1].text
    button3.innerText = questions[num].answers[2].text
    button4.innerText = questions[num].answers[3].text
    button1.addEventListener("click", () => {
        if (questions[num].answers[0].correct == true) {
            button1.style.backgroundColor = 'green';
        } else {
            button1.style.backgroundColor = 'red';
        }
        return})
        button2.addEventListener("click", () => {
            if (questions[num].answers[1].correct == true) {
                button2.style.backgroundColor = 'green';
            } else {
            button2.style.backgroundColor = 'red';
        }
        return})
        button3.addEventListener("click", () => {
            if (questions[num].answers[2].correct == true) {
                button3.style.backgroundColor = 'green';
            } else {
                button3.style.backgroundColor = 'red';
            }
            return})
            button4.addEventListener("click", () => {
                if (questions[num].answers[3].correct == true) {
                    button4.style.backgroundColor = 'green';
                } else {
                    button4.style.backgroundColor = 'red';
                }
                return})
            }
            nextButton()
function nextButton () {
    let nextQuestion = document.getElementById('nxt');
    nextQuestion.addEventListener("click", () => {
    num++;
    button1.style.backgroundColor = '';
    button2.style.backgroundColor = '';
    button3.style.backgroundColor = '';
    button4.style.backgroundColor = '';
    options(num)})
    }
                