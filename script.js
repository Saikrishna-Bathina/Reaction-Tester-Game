let start;
let best = 1000;
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function move(){
    var left;
    var right;
    var wh;
    var mar;
    left=Math.random()*300;
    right=Math.random()*300;
    wh=((Math.random()*300)+100);
    mar=((Math.random()*500)+50)
    document.getElementById('shape').style.left=left+'px';
    document.getElementById('shape').style.right=right+'px';
    document.getElementById('shape').style.height=wh+'px';
    document.getElementById('shape').style.width=wh+'px';
    document.getElementById('shape').style.display='block';
    document.getElementById('shape').style.margin=mar+'px';
    document.getElementById('shape').style.backgroundColor=getRandomColor();
    start = new Date().getTime();
}
document.getElementById('shape').onclick=function(){
    document.getElementById('shape').style.display='none';
    var end = new Date().getTime();
    var timeTaken = ((end-start)/1000);
    document.getElementById('result').innerHTML=' REACTION TIME ➡️ ' + timeTaken+' Sec';
    if(timeTaken<best){
        best = timeTaken;
    }
    document.getElementById('best').innerHTML='BEST TIME ➡️ '+best+'Sec'
    move();
}






