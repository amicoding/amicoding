

let hours = document.getElementById('hour');

let minutes = document.getElementById('minute');


let seconds = document.getElementById('second');

let fullDates = document.getElementById('fullDate');

let ampm = document.getElementById('ampm');
 
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())




setInterval(function() {
  
  let date = new Date();
  
  let fullDate = date.toLocaleDateString();
  
  let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

  if (hour > 12) {
  ampm.innerText = "PM"
  }
  else {
    ampm.innerText = "AM"
  }

let hourss = hour % 12;
  fullDates.innerText = fullDate;
   hours.innerText = hourss;
   minutes.innerText = minute;
   seconds.innerText = second;
  
  
}, 1000);