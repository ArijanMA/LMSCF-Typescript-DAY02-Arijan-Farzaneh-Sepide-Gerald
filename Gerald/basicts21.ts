class Person { 
   namef = ""; 
   age = "";   
constructor(namef, age) { 
       this.namef = namef;
       this.age = age;
   }
   name() { 
       return `My name is ${this.namef} and I am ${this.age} years old`;
   }
   whoAreYou() { 
       return `Hello there , ${this.name()}`; 
   }
}

//i had problems when I used class Workerm maybe it is a protected name
class Workera extends Person { 
   jobTitle; 

   constructor(namef, age, jobTitle) {
       super(namef, age); 
       this.jobTitle = jobTitle;
   }

   whoAreYou() {
       return `${super.whoAreYou()} , and I am a ${this.jobTitle}`;
   }
}

let workern = new Workera("Max Mustermann", "30", "programmer");


document.write(workern.whoAreYou());

class Sworker extends Workera {
  salery;
  jobLocation;

     constructor(namef, age, jobTitle,salery,jobLocation) {
       super(namef, age,jobTitle); 
       this.salery = salery;
       this.jobLocation = jobLocation;
   }

  nextended(){
    return `${super.whoAreYou()} , and I get ${this.salery} every month, and I work in ${this.jobLocation}`;
  }
}

let jonny = new Sworker("John Mustermann", "40", "programmer", "4000", "Vienna");


console.log(jonny.nextended());