function setup() {
  createCanvas(800,450);
  $.get("exampledata.json", function(data){
    document.geti("datafromjson")=data.json();
  })
}

function draw() {
}
