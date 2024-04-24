

// code has been written with a help of YouTube tutorial https://www.youtube.com/watch?v=kayFBMl06q8
var plot = {
    stage: "hospital",
    hospital: {
       title: "HOSPITAL",
       plot: "Hello! It is year 2029 and You have voulunteered to test new generation of medicines that have a potential to reverse genetical diseases, after test you wake up and realise that a lot around you have changed \
        after short chat with a nurse you realise it is year 2084! and new medicine put you to sleep for so long. Nurse explained that situation in the world is not easy and technological equipment is very limited\
       and fails quite often. Your oxygen levels are low after all this time in sleep, one of the machine sustaining your life parameters is asking to enter desired oxygen level, nurse \
       has asked you what is number 100 in binary as machine seems to only accept 1s and 0s?",
       choices: [
        {
            choice: "It goes: 1011110",
            destination: 'emergency'
        },
        {
            choice: "It goes: 1100001",
            destination: 'lilemergency'
        },
        {
            choice: "It goes: 1100100",
            destination: 'newbuild'
        }
       ],
       //backsound: "stage2.wav"
       
    },
    emergency:{
        title: "YOU ARE IN EMERGENCY ROOM!",
        plot: "Your oxygen levels critical, you have told your nurse to set it to 94 by mistake, after moving to emergency room specialist comes and tells you that sadly another failure of equipment happened \
        and he needs to put your age in the register so it works, considering you were 23 when testing started in 2029 what age are you now in 2084? ",
        choices: [
         {
             choice: "I am 87 years old now!",
             destination: 'bad'
         },
         {
             choice: "I am 78 years old now!",
             destination: 'neutral'
         }
        ],
        
    },
    lilemergency:{
        title: "YOU ARE UNSTABLE!",
        plot: "Your oxygen levels are slightly worrying therefore specialist have been called and you have been moved to a different room because of your constant diziness, he said your oxygen is set to 97% therefore you still have a chance to\
        wait and use new generation of time-machine, to recover however you need to tell the nurse what CIA stands for in cybersecurity, she is preparing for test and won't leave you alone to recover ",
        choices: [
         {
             choice: "Confidentiality Integrity Availability",
             destination: 'newbuild'
         },
         {
             choice: "Central Inteligence Agency",
             destination: 'neutral'
         },
         {
             choice: "Cookies I Ate",
             destination: 'rick'
         }
        ],
        
     },
     newbuild:{
        title: "NEW BUILDING!",
        plot: "Well done you told nurse correct thing, now you are in a good shape and ready to use time machine straight away! You move to interior of time machine and enter your details on the touchscreen suddenly system crashes and question appears for some reason: Which of these protocols reside in OSI layer 3? ",
        choices: [
         {
             choice: "TCP and IP",
             destination: 'neutral'
         },
         {
             choice: "IP and IPSec",
             destination: 'good'
         }
        ]
        
     },
     bad:{
        title: "YOU DIED!",
        plot: "Sadly machines do not keep you alive and you pass away :(",
        choices: [
         {
             choice: "TRY AGAIN...",
             destination: 'hospital'
         }
        ]
        
     },
     neutral:{
        title: "YOU SURVIVE...",
        plot: "You stay alive however current development of time machines does not allow to travel people in your state, you are going to have to stay in grim future for a while...",
        choices: [
         {
             choice: "RESTART",
             destination: 'hospital'
         }
        ]
        
     },
     good:{
        title: "YOU ARE BACK!",
        plot: "You successfully go back in time, your family and friends greet you with open arms and you get promised million dollars for testing as well!",
        choices: [
         {
             choice: "RESTART",
             destination: 'hospital'
         }
        ]
        
     }
}


document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#start-button');
    var input = document.querySelector('#name-input');
    var content = document.querySelector('#content');
    var background = document.querySelector('#background');

    button.addEventListener('click', renderScene);

    var aboutButton = document.getElementById('about-button');
    aboutButton.addEventListener('click', function() {
        window.location.href = 'about.html'; 
    });
});

function renderScene() {
    content.innerHTML = `
    <h1 class="title">${plot[plot.stage].title}</h1>
    <p class="plot">${plot[plot.stage].plot}</p>
    ${getInputs()}
    <button id = "submit-btn">Go on!</button>
    `;


    var audio = new Audio();
    audio.loop = true;

    audio.src = plot[plot.stage].backsound;
        audio.play();

    var button = document.querySelector("#submit-btn");
    button.addEventListener('click', function() {
        getInputValue()
    })

}

function getInputValue() {
    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            var destination = inputs[i].getAttribute('data-destination');
            if (destination === 'rick') {
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            } else {
                plot.stage = destination;
                renderScene();
            }
            return; 
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#submit-btn');
    button.addEventListener('click', getInputValue);
});

function getInputs() {
    var input = ""
    for( var i = 0; i < plot[plot.stage].choices.length; i++) {
        input += `
        <div>
         <input data-destination = ${plot[plot.stage].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
         <label for "radio${i}"> ${plot[plot.stage].choices[i].choice} </label>
        </div>`
      
    }
    return input;
}
