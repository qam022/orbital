function setup() {
  createCanvas(800,450);
  $.get("exampledata.json", 
        function(data){
          for(i=0;i++;i<data.length){
            document.getElementById("datafromjson").innerHTML+=data[i].name+"<br>";
          }
       ,"json")
}

function draw() {
}
