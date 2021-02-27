function setup() {
  createCanvas(800,450);
  $.get("exampledata.json", 
        function(data){
          document.getElementById("datafromjson").innerHTML=JSON.parse(data);
        }
       ,"json")
}

function draw() {
}
