var w;
var h;
var t=0;
var tracks = [];
var drawTracks=true;
var frameRateDisplay = false;
function setup() {
  w=windowWidth*0.75;
  h=windowHeight*0.95;
  cnv=createCanvas(w,h);
  cnv.mouseReleased(checkClick); //sets a listener for clicks within the canvas
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
  }
}

//mouse click handler
function checkClick(){
  //check if click outside databox
  if(typeof databox !== "undefined" && databox != null){
    if ((mouseX < databox.x || mouseX > databox.x+30) || (mouseY < databox.y || mouseY > databox.y+30)){
      databox=null;
    }
  }
  for(var p=data.length-1;p>=0;p--){ //iterate through all planets, backwards
    //uses equation of circle to check if mouse location within a planet when mouse released
    if (Math.pow(mouseX-data[p].xpos,2)+Math.pow(mouseY-data[p].ypos,2) < Math.pow(data[p].drawRadius/2,2)){
      console.log(data[p].name);
      databox = new Databox(data[p].xpos,data[p].ypos,data[p].name);
      console.log(databox);
      return; //makes sure the program cannot detect clicks on 2 planets at once
    }
  }
}

function draw() {
  drawTracks = document.getElementById("drawTracks").checked;
  background("#16161d");
  speed = document.getElementById("speed").valueAsNumber;
  t+=speed;
  for (var i=0;i<data.length;i++){
    //update positions
    data[i].xpos=w/2+i*(h/20)*Math.sin((t*0.4*PI/(180*data[i].orbitperiod))%TWO_PI);
    data[i].ypos=h/2-i*(h/20)*Math.cos((t*0.4*PI/(180*data[i].orbitperiod))%TWO_PI);
    //update databox position
    if (typeof databox !== "undefined" && databox != null && databox.planet == data[i].name){
      databox.x=data[i].xpos;
      databox.y=data[i].ypos;
    }
    if (data[i].xpos != -1 && data[i].ypos != -1){ //makes sure my values are initialised
      fill(data[i].colour);
      noStroke();
      if(data[i].name != "Sun"){
        //todo: make scaling logarithmic or something because uranus is too small
        if((data[i].name == "Jupiter") || (data[i].name == "Saturn") || (data[i].name == "Uranus") || (data[i].name == "Neptune")){
          data[i].drawRadius = data[i].radius*(h/150);
        }
        else{
          data[i].drawRadius = data[i].radius*(h/30);
        }
        circle(data[i].xpos,data[i].ypos,data[i].drawRadius);
        if (drawTracks){
          if (data[i].name != "buffer_gap"){
          temp = new Track(data[i].colour,data[i].xpos,data[i].ypos);
          tracks.push(temp);
          }
        }
      }
      else{
        data[i].drawRadius = data[i].radius*(h/2250);
        circle(data[i].xpos,data[i].ypos,data[i].drawRadius);
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
    //draw databox
    if (typeof databox !== "undefined" && databox != null){
      fill("#ffffff");
      noStroke();
      rect(databox.x,databox.y,30,30);
    }
  }
}
