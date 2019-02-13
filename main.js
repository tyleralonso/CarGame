// Variables 

let car = {
    make: 'Lamborghini',
    model: 'Sytner',
    color: 'Black and Orange',
    mileage: 0,
    isWorking: true,

    driveToWork(){
           alert(`Old Mileage: $(this.mileage)`);
           this.mileage = this.mileage + 8;
           alert(`New Mileage: $(this.mileage)`);
    }
}


// Functions
/*
const rewritesStats(){
    console.log
}    


/* Captures keyboard Input. Depending on the letter pressed it
will "call" (execute) different functions. */
document.onkeyup = (event) => {

    // Captures the key press, converts it to lowercase, and saves it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter === `d`){
        car.driveToWork();
        rewritesStats();
    }
}