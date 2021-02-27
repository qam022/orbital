function setup() {
  createCanvas(800,450);
  $.get("exampledata.json", function(data){
    console.log(data);
  })
}

function draw() {
}
