
const inputs = document.querySelector('body > div.quiz.py-4.bg-primary > div > div.text-center > input');
const formi = document.querySelector('.quiz-form');

console.log(inputs);
console.log(formi);

//FORM SUBMITTING
formi.addEventListener('submit', e => {
    e.preventDefault();


});



//RADIOS BUTTON GETTING VALUE ON CLICK
inputs.addEventListener('click', e => {
    e.preventDefault();
    function getCheckedValue(radios) {

        //getting the value of radios in an array

    }

 //algorithm for checking the answers

    });

    //the window object //scroll on top automatique
    scrollTo(0,0);


   //Code to animate the speed of the Score
    // const result = document.querySelector('.result');
    // result.classList.remove('d-none');
    // let output = 0;
    // const timer = setInterval(() => {
    //     result.querySelector('span').textContent=`${output}%`;
    //     if(output === score){

    //         clearInterval(timer);
    //     }
    //     else {
    //         output++;
    //     }
    // }, 20);

// const x= document.getElementById("container");
// console.log(x.previousElementSibling);

const x= document.getElementById("container");
console.log(x.nextElementSibling);


var radios = document.querySelectorAll('[type="radio"]');
console.log(radios);

/* A node list in Javascript is an array it can be iterative */
radios.forEach(element =>{

    //code here to get the value of the radios
console.log(element.value);
});

/*Events and DOM */
formi.addEventListener('submit', e => { 
    e.preventDefault(); //to stop the event normal behavior and refreshing the page
    
    
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

        var answer = document.getElementById('answer').value;
        var regex = /^[a-zA-Z]{6,12}$/;
            
        if(regex.test(answer))
        {  
            const element = document.createElement('input');
            const div =  document.getElementById ('req_box');
            div.append(element);
            element.setAttribute('value',answer);
            element.setAttribute('id','test');
            element.setAttribute('name',"q1");
            e.submitter.disabled = true;
            formi.answer.value = "";
            element.classList.add('rect');
            alert ("Everything is");
        }

        else
        {
            formi.answer.value = "";
            alert('You didnt respect the regex!');
        }


    
    });
