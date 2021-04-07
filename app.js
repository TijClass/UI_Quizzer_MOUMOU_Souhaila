
const inputs = document.querySelector('body > div.quiz.py-4.bg-primary > div > div.text-center > input');
const formi = document.querySelector('.quiz-form');


/* the object e is an event object containig many usefull informations  */
// e.preventDefault();
// console.log('/========= event Object =========/');
// console.log(e);
// console.log('/========= Type of event =========/');
// console.log(e.type);
// console.log('/========= the handler of event =========/');
// console.log(e.submitter);
// console.log('/========= the target of the event =========/');
// console.log(e.target);
// console.log('/========= the current target if exist of the event =========/');
// console.log(e.currentTarget);
// console.log('/=========    =========/');


formi.addEventListener("submit",function (e){
e.preventDefault();
console.log("formi submit");
var answer = document.getElementById('answer').value;
var regex = /^[a-zA-Z]{6,12}$/;
const element = document.createElement('input');
const div =  document.getElementById ('req_box');
    div.append(element);
    element.setAttribute('id','test');
    element.setAttribute('type','text');
    element.setAttribute.value=answer;
    if(regex.test(answer))
    {
        element.setAttribute('value',answer);
        document.getElementById('answer').value="";
        element.classList.add("rect");
        submit.setAttribute('disabled',true);
    }
    else
    {
        div.removeChild(element);
        document.getElementById('answer').value="";
        alert('you didnt respect the regex');
    }   
})


// const x = document.getElementById("container");
// console.log(x.previousElementSibling);

// const y = document.querySelector("div");
// console.log(y.previousElementSibling);

// const MT = document.querySelectorAll("div");
// console.log(MT);

// var radios = document.querySelectorAll('[type="radio"]');
// console.log(radios);




function checkAnswer(value, index) {
    let gAnswer = ["B", "B", "B", "B"];
    if (value != gAnswer[index]) {
        return false;
    }
    return true;

}


const bigSub = document.getElementById("btn");
    bigSub.addEventListener('click', () => {
let answerR = document.querySelectorAll('[type="radio"]:checked');
let score = 0;
    answerR.forEach((element, index) => {
    if (checkAnswer(element.value, index)) {
        score += 25;
    }
});
showScore(score);
})

function check() {
    document.querySelector('[type="radio"]').checked = true;
}



//Score 
function showScore(score) {
    let output = 0;
    document.querySelector('.result').classList.remove("d-none");
    scrollTo(0, 0)
    const timer = setInterval(() => {
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
            document.querySelector('#score').innerText = " " + output + "% ";
        }
    }, 50)


}
