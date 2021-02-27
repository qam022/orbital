function setup() {
  createCanvas(800,450);
  $.get("exampledata.json", 
        function(data){
          document.getElementById("datafromjson").innerHTML=data.json();
        }
       ,"json")
}

function draw() {
}
