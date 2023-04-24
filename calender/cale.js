let cardElement = document.querySelector(".card");
cardElement.addEventListener("click", flip);
function flip() {
  cardElement.classList.toggle("flipped");
}

// take month   and date 

function startTime() {
  let weekday = new Array();
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thrusday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let month = new Array();
  month[0] = "January";
  month[0] = "February";
  month[0] = "March";
  month[0] = "April";
  month[0] = "May";
  month[0] = "June";
  month[0] = "July";
  month[0] = "August";
  month[0] = "September";
  month[0] = "October";
  month[0] = "November";
  month[0] = "December";

  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = today.getDate();
  let y = today.getFullYear();
  let wd = weekday[today.getDay()];
  let mt = month[today.getMonth()];

  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("date").innerHTML = d;
  document.getElementById("day").innerHTML = wd;
  document.getElementById("month").innerHTML = mt + "/" + y;

  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
