// ## Challenge 2: Speed Detector(Toy Problem)

const carSpeed = function(speed) {  //Funtion Expression is in use.
    let acceptedSpeed = speed <= 70 && speed >= 0
    let excessSpeed = Math.abs(speed - 70)
    let deductPoints = Math.floor(excessSpeed/5)
        // deductPoints <= 12
// We will use the control flow mechanism to represent all aspects of our data.
    if (acceptedSpeed) {  
        return 'Ok'
    }else if (speed > 70 && speed < 135) {
        return `Points: ${deductPoints}`
    }else if (speed > 135) { 
        return "License suspended"
    }
}
carSpeed()
