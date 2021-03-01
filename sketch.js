var w;
var h;
var t=0;
var tracks = [];
var frameRateDisplay = false;
function setup() {
  frameRate(60);
  w=windowWidth*0.75;
  h=windowHeight*0.95;
  createCanvas(w,h);
  background("#16161d");
  /* This bit only works when the webpage runs from a server (i.e. via HTTP), so while it's being run from file://, I have to use the other method
  $.get("exampledata.json", 
        function(data){
          for(var i=0;i<data.length;i++){
            document.getElementById("datafromjson").innerHTML+=data[i].name+"<br>";
          }
        }
       ,"json")
  */
  data = getData();

  for (var i=0;i<data.length;i++){
    //initialise positions
    data[i].xpos=w/2;
    data[i].ypos=h/2-(i*50);
    //document.getElementById("datafromjson").innerHTML+=data[i].name+"<br>";
    if (data[i].name != "Sun"){
      
    }
  }
}


function draw() {
  background("#16161d");
  t++;
  for (var i=0;i<data.length;i++){
    //update positions
    data[i].xpos=w/2+i*50*Math.sin((t*0.62*PI/(180*data[i].orbitperiod))%TWO_PI);
    data[i].ypos=h/2-i*50*Math.cos((t*0.62*PI/(180*data[i].orbitperiod))%TWO_PI);
    if (data[i].xpos != -1 && data[i].ypos != -1){ //makes sure my values are initialised
      fill(data[i].colour);
      noStroke();
      if(data[i].name != "Sun"){
        circle(data[i].xpos,data[i].ypos,data[i].radius*30);
        temp = new Track(data[i].colour,data[i].xpos,data[i].ypos);
        tracks.push(temp);
      }
      else{
        circle(data[i].xpos,data[i].ypos,data[i].radius*0.4);
      }
    }

    else{
      textSize(34);
      textAlign(LEFT, TOP);
      fill("#ff0000");
      text("error: hey something went wrong with initialising the position values please tell me about this",0,0);
    }
    
    if (frameRateDisplay){
      textSize(24);
      textAlign(LEFT,TOP);
      fill("#00ff00");
      text(Math.round(frameRate()),0,0);
    }
    
    //draw tracks
    for(var j=0;j<tracks.length;j++){
      fill(tracks[j].updateAndGetAlpha(tracks[j].colour,tracks[j].alpha));
      noStroke();
      circle(tracks[j].x,tracks[j].y,3);
      tracks[j].lifetime--;
      tracks[j].settrackAlpha = tracks[j].alpha - (255/tracks[0].maxLifetime);
      if (tracks[j].lifetime <= 0){
        tracks.splice(j,1);
      }
    }
  }
}
