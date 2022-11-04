

export abstract class Vehicle {

   abstract getNumberOfSeats(): number;

}






export class Tesla extends Vehicle {


    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }

}

export class Audi extends Vehicle {

    getNumberOfSeats() {
      return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

 

}

export class Toyota extends Vehicle {
    getNumberOfSeats() {
         return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

    


}

export class Honda extends Vehicle {
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

   
}

export class Ford extends Vehicle {
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

   
}
