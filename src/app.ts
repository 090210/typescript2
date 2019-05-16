function bereken(a: (any[] | string), b: (any[] | string), c: (any[] | string)) {
    
   var l:number = a.length + b.length + c.length;
    
   if(typeof a === "string" && typeof b === "string" && typeof c === "string"){
       return 'De lengte van de teksten is ' + l;
   } else if (a instanceof Array && b instanceof Array && b instanceof Array) {
       return 'Het aantal waardes in de array is ' + l;
   }
  
}
alert(bereken("Dennis", "is", "docent"));

interface Huisdier {
    name: string;
    leeftijd: number;
}

var Huisdier = new Huisdier('Kat', 3);