enum typeVehicles {
	none,
    Motor,
    Truck
}
enum fuelType {
    Diesel,
    Hydrogen,
    Benzin

}
class Vehicles{		
	
      Make :	string;
    

	constructor(year,typeVeh,numOfSeats,kilometer) {

		// code...
	}

}
class Motor extends Vehicles{

	model : string;
	price : number;
	fuel : string;	
	color : string;
	kilometersleft :number;
	year : number;
    numberOfSeats : number;
    
	
	constructor(argument){
	 	 super(); 
		// code...
	}

}
class Truck extends Vehicles {
	
	constructor(argument) {
		 super(); 
		// code...
	}
}