class Vehicles  {
   constructor(public type, public name, public baseprice) {
   }

	vname() { 
	       return `My type is ${this.type} and I have the following name ${this.name}`;
	   }

}

class Motor extends Vehicles{
	horsepower;
	fueltype;
   constructor(type, name, baseprice, horsepower,fueltype) {
       super(type, name, baseprice); 
       this.horsepower = horsepower;
       this.fueltype=fueltype;
   }
   calcpricem(){
   	let pricem=Number(this.baseprice+this.horsepower*10);
   	console.log(pricem)
   	return pricem;

   }

}

class Truck extends Vehicles{
	seats;
	kilometers;
	age;
   constructor(type, name, baseprice, seats, kilometers, age) {
       super(type, name, baseprice); 
       this.seats = seats;
       this.kilometers = kilometers;
       this.age = age;
   }
   calcpricet(){
   	let price=Number(this.baseprice+this.seats*1000-this.kilometers*0.5-this.age*1000);
   	console.log(price)
   	return price;
   }
}

let truck1 =new Truck ("truck","truck1",30000, 3,10000,6);//30000+3000-5000-6000=22k
$("#pricediv").append(truck1.calcpricet()+"<br>");

let truck2 =new Truck ("truck","truck2",40000, 5,6000,8);//40000+5000-3000-8000=34k
$("#pricediv").append(truck2.calcpricet()+"<br>");

let truck3 =new Truck ("truck","truck3",50000, 4,5000,6);
$("#pricediv").append(truck3.calcpricet()+"<br>");

let truck4 =new Truck ("truck","truck4",35000, 6,20000,6);
$("#pricediv").append(truck4.calcpricet()+"<br>");

let motor1 =new Motor("motor", "motor1", 5000, 150, "diesel")
$("#pricediv").append(motor1.calcpricem()+"<br>");

let motor2 =new Motor("motor", "motor2", 6000, 200, "gasoline")
$("#pricediv").append(motor2.calcpricem()+"<br>");