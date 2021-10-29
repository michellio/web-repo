console.log("hi")

const quotes = ["Face Mask!","Go on a Walk!","Watch your favorite show", "Do laundry","Journal", "Make something yummy","FaceTime a friend"];
quoteCount = 0;
document.getElementById('gen').addEventListener("click", newQuote);
function newQuote(){
  document.getElementById("gen").innerHTML = quotes[quoteCount];
  alert("click again for more!");
  if(quoteCount>=(quotes.length-1)){
    quoteCount = 0;
  }else{
    quoteCount +=1;
  }
}

document.getElementById('home').onclick = function (){
  window.location = "index.html";
}
