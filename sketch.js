function setup() {
  createCanvas(800,450);
  $.get("exampledata.json", 
        function(data){
          for(var i=0;i<data.length;i++){
            document.getElementById("datafromjson").innerHTML+=data[i].name+"<br>";
          }
        }
       ,"json")
}

function draw() {
}
