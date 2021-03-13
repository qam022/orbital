let data = [
    {"name":"Sun","mass":333000,"radius":109,"semimajoraxis":0,"colour":"#ffd700","xpos":-1,"ypos":-1,"orbitperiod":1},
    {"name":"Mercury","mass":0.055,"radius":0.3829,"semimajoraxis":0.3871,"colour":"#708090","xpos":-1,"ypos":-1,"orbitperiod":0.204},
    {"name":"Venus","mass":0.815,"radius":0.9499,"semimajoraxis":0.7233,"colour":"#ffdead","xpos":-1,"ypos":-1,"orbitperiod":0.615},
    {"name":"Earth","mass":1,"radius":1,"semimajoraxis":1,"colour":"#00008b","xpos":-1,"ypos":-1,"orbitperiod":1},
    {"name":"Mars","mass":0.107,"radius":0.5320,"semimajoraxis":1.523,"colour":"#8b0000","xpos":-1,"ypos":-1,"orbitperiod":1.880},
    {"name":"buffer_gap","mass":0,"radius":0,"semimajoraxis":0,"colour":"#ffffff","xpos":-1,"ypos":-1,"orbitperiod":1},//this is so there is a gap between mars and jupiter
    {"name":"Jupiter","mass":317.8,"radius":11.208,"semimajoraxis":5.20,"colour":"#deb887","xpos":-1,"ypos":-1,"orbitperiod":11.862},
    {"name":"Saturn","mass":95.159,"radius":9.129,"semimajoraxis":9.5826,"colour":"#bd9e62","xpos":-1,"ypos":-1,"orbitperiod":29.4571},
    {"name":"Uranus","mass":14.536,"radius":3.981,"semimajoraxis":19.2184,"colour":"#71d4d7","xpos":-1,"ypos":-1,"orbitperiod":84.0205},
    {"name":"Neptune","mass":17.147,"radius":3.865,"semimajoraxis":30.07,"colour":"#4671a4","xpos":-1,"ypos":-1,"orbitperiod":164.8}
];
//all x and y positions are initialised as -1 to make it easy to test for uninitialised values
function getData(){
    return data;
}
