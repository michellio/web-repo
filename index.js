console.log('hello!');

let pics = 8;
let pic;

for(i=0;i<pics, i++){
  pic = 1+i;
document.getElementById('portfolio').innerHTML += "img scr='assets'" + pic + ".jpg" + "class='portfoliopic' id='pic'" + pic + "'/>";
}
