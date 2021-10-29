//First attempt at clock, followed along - https://www.howtocodeschool.com/2020/05/display-current-date-and-time-using-html-javascript.html
//var clockElement = document.getElementById("clock");

//function clock() {
//  clockElement.textContent = new Date().toString();
//}

//setInterval(clock,1000);//

//second clock attempt - adapted from https://tecadmin.net/get-current-date-time-javascript/ and https://www.aspsnippets.com/Articles/JavaScript-Display-Current-Time-in-12-hour-format-AM-PM-and-24-hour-format-with-Hours-Minutes-and-Seconds-hhmmss.aspx and https://www.w3resource.com/javascript-exercises/javascript-object-exercise-8.php and https://embed.plnkr.co/plunk/4QZxxtvk40hZCjsWp2q5
console.log("java working!")


document.getElementById('submit').onclick = function (){
  location.href = "www.google.com";
}

setInterval(displaytime, 1000);

function displaytime() {
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var en = 'AM';

  if (hrs > 12) {
    en = 'PM';
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  if (hrs == 0) {
    hrs = 12;
  }

  if (hrs < 10) {
    hrs = '0' + hrs;
  }

  if (min < 10) {
    min = '0' + min;
  }

  if (sec < 10) {
    sec = '0' + sec;
  }

  document.getElementById('time').innerHTML = hrs + ':' + min + ':' + sec;
}

  document.getElementById('submit').onclick = function (){
    window.location = "time/time0.html";

  }
