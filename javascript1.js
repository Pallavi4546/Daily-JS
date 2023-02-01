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
            }  
            else if(this.age > 35 && this.age < 60){
                cat ="midle age"
            }
             else if( this.age >= 60){
                cat="scenior citizon"
             }
             else{
                cat="minor"
             }
             return cat
        }
    }
}
let P1 = new Person("pallavi",23)
console.log(P1,P1.catagory())

var student = {
    name : "David Rayy",
    class : "VI",
    rollno : 12 };
delete student.class
console.log(Object.keys(student))

    // find the value of cylinder
    class Cylinder{
        constructor(radius, height){
            this.radius =radius
            this.height = height
            this.value = function(){
                return 3.14 * this.radius * this.radius * this.height
            }
        }
    }
    let volume = new Cylinder(3,10)
    console.log(volume,volume.value())

    // Bubble sort algo

    const array = [6,4,0, 3,-2,1] 
    for(let i=0;i<array.length;i++){
        // console.log(array.length -1-i,i)
        for(let j=0;j<array.length -1-i;j++){
            if(array[j+1] < array[j]){
                let temp = array[j +1]
                array[j + 1]=array[j ]
                array[j ]=temp
            }
            // console.log(i,j,array[j],array[j+1],array)
        }
    }

    function BubbleSort(array) 
    {
    var is_sorted = false;
     while (!is_sorted) 
     {
        is_sorted = true;
        for (var n = 0; n < array.length - 1; n++) 
        {
            // console.log("sorted outside for",is_sorted,array,n)
          if (array[n] > array[n+1]){
            var x = array[n+1];
            array[n+1] = array[n];
            array[n] = x;
            is_sorted = false;
            // console.log("sorted",is_sorted,array,n)
          }
        }
      }
      return array;
    };
    // console.log(BubbleSort([6,4,0, 3,-2,1])); 
    //[0,3,-2,1,4,6]

    // subString
     function SubString(string){
        let newArray=[]
        for(let i=0;i< string.length;i++){
            for(let j= i+1; j < string.length+1;j++){
                newArray.push(string.slice(i,j))
                // console.log(newArray,i,j)
            }
        }
        return newArray 
     }
    //  console.log(SubString("dog"))

    //  clock

    class Clock{
        constructor(hr,min,sec,cur_time){
            this.cur_time = cur_time
            this.hr=hr
            this.min =min
            this.sec =sec
            this.run = function(){
                setInterval(this.update(),1000)
            }
            this.update = async function(){
                let time =await this.updateTime(1)
                // console.log(time,"time")
            }
            this.updateTime = function(second){
                // console.log("second",second)
                this.sec=this.sec + second
                if(this.sec >= 60){
                    this.min++
                    this.sec = 0
                }
                if(this.min >= 1){
                    this.hr++
                    this.min =0
                }
                if(this.hr >= 24){
                    this.hr=0
                }
                // console.log(this.hr,this.min,"sec")
            }
           return this.hr + ":" + this.min
        }
    }
    let current_time = new Date()
    let time = new Clock(current_time.getHours(),current_time.getMinutes(),current_time.getSeconds(),current_time)
    // console.log(time.run(),time.updateTime())
