const monthEl= document.querySelector('.month h1')
const fullDateEl= document.querySelector('.month p')
const daysElement= document.querySelector('.days')

const monthIndex= new Date().getMonth()
// console.log(monthIndex)

const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
// console.log(months[monthIndex])
monthEl.innerText= months[monthIndex]
fullDateEl.innerText= new Date().toDateString()
// console.log(new Date().toDateString())
//getDay()
const firstDay= new Date(new Date().getFullYear(), monthIndex, 1).getDay()
 console.log(firstDay)

// Going 1 month forward and 1 day back gets us the last day of the specific month.

const lastDay= new Date(new Date().getFullYear(), monthIndex+1, 0).getDate()
// console.log(lastDay)

let days=''
for(let i= firstDay; i > 0; i--){
    days +=`<div class="empty"></div>`
}
for(let i=1; i<=lastDay; i++){
    if(i === new Date().getDate()){
        days +=`<div class="today">${i}</div>`
    }
    else{
        days +=`<div>${i}</div>`
    }

}
daysElement.innerHTML= days


