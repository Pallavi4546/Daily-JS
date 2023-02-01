// created object using function constructor

function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}
var p1 = new person("John", 42, "blue");
var p2 = new person("Maria", 21, "red");

document.write(p1.name,p1.age + " "); // Outputs 42
document.write(p2.name, p2.age); // Outputs "Maria"

// created object using class constructor
class Person{
    constructor(name,age){
        this.name=name,
        this.age = age
        this.catagory = function(){
            let cat = null
            if(this.age > 18  && this.age <= 35){
                cat ="youth"
                alert("youth")
            }  
            else if(this.age > 35 && this.age < 60){
                cat ="midle age"
                alert("midle age")
            }
             else if( this.age >= 60){
                cat="scenior citizon"
                alert("scenior citizen")
             }
             else{
                cat="minor"
                alert("minor")
             }
             return cat
        }
    }
}
let P1 = new Person("pallavi",23)
console.log(P1,P1.catagory())