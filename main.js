import data from './data.json' assert {type: 'json'}


let backgroundColors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)',
]

var dailyArray = data.map(item => item.timeframes.daily)
var weeklyArray = data.map(item => item.timeframes.weekly)
var monthlyArray = data.map(item => item.timeframes.monthly)

var dailyButton = document.querySelector("#daily");
var weeklyButton = document.querySelector("#weekly");
var monthlyButton = document.querySelector("#monthly");

var secondSection = document.querySelector(".second-section");

const changeColor = document.querySelectorAll(".main-card__frequency")

drawElements(dailyArray)

dailyButton.addEventListener('click', ()=> {
    drawElements(dailyArray)  
})

weeklyButton.addEventListener('click', ()=> {
    drawElements(weeklyArray)
})

monthlyButton.addEventListener('click', ()=> {
    drawElements(monthlyArray)
})

const eventListener = (e) => {
    changeColor.forEach(element => {
        if (e.target === element) {
            element.style.color = 'white'
        } else {
            element.style.color = 'hsl(236, 100%, 87%)'
        }
    });
};

changeColor.forEach(element => {
    element.addEventListener('click', eventListener);
});

function drawElements(array) {
    secondSection.innerHTML = '';
    dailyButton.style.color = 'white'
    array.forEach((element, index) =>{
        
        var title = data[index].title;
        var titleLowerCase = title.toLocaleLowerCase()

        if(titleLowerCase == 'self care'){
            titleLowerCase = 'self-care'
        }

        secondSection.innerHTML += `
        <div class="card">
            <div class="card__background" style="background-color: ${backgroundColors[index]}">
            <img class="card__image" src="./images/icon-${titleLowerCase}.svg" alt="">
            </div>
            <div class="card__details">
            <div class="card__activity">
                <p class="card__title">${data[index].title}</p>
                <img class="card__dots" src="./images/icon-ellipsis.svg" alt="three dots">
            </div>
            <div class="card__time">
                <p  class="card__hours">${element.current}hrs</p>
                <p  class="card__previous">Last Week - ${element.previous}hrs</p>
            </div>
            </div>
      </div>
        `
    })

}