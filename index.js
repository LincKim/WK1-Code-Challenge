// Challenge 1: Student Grade Generator(Toy Problem)

function studentMark(marks) {
    // At this point I set flow of how the grades will be output after the the marks are passed in.
    const x = Math.abs(marks >= 0 && marks <= 100)
    if (marks > 79 && marks <= 100 ) { //this code says that if the marks are greater than 79 then the output is grade A.
        return 'A'
    }else if (marks >= 60 && marks <= 79 ) { // if the marks are greater than or equal to 60 but also less that or equal to 79 then the grade is B
        return 'B'
    }else if (marks > 49 && marks < 60) { //if the marks are greater than 49 but less than 60 then the grade is C.
        return 'C'
    }else if (marks >= 40 && marks <=49) { //if the marks is greater or equal to 40 and also less than or equal to 49 then the grade is D.
        return 'D'
    }else if (marks >= 0 && marks < 40) { //in this code the if the marks are below the 40 marks then the grade is an E.
        return 'E'
    }
    
}
studentMark()




// Challenge 2: Speed Detector(Toy Problem)

const carSpeed = function(speed) {  //Funtion Expression is in use.
    let acceptedSpeed = speed <= 70 && speed >= 0
    let excessSpeed = Math.abs(speed - 70)
    let deductPoints = Math.floor(excessSpeed/5)
        // deductPoints <= 12
// We will use the control flow mechanism to represent all aspects of our data.
    if (acceptedSpeed) {  
        return 'Ok'
    }else if (speed > 70) {
        return deductPoints
    }else if (deductPoints > 12) { 
        return "License suspended"
    }
}
carSpeed()




// Challenge 3: Net Salary Calculator(Toy Problem)

function afterPaye(grossSalary) {
    
                                //this code calculates the PAYE tax dependig on the salary ranges.
    if (grossSalary > 0 && grossSalary <= 24000){
        return grossSalary * 0.1
    }else if (grossSalary >= 24001 && grossSalary <= 32333) {
        return grossSalary * 0.25
    }else if (grossSalary > 32333) {
        return grossSalary * 0.3
    }
}
afterPaye()


function deductionNhif(grossSalary) {
    let theDeductions;
        if (grossSalary <= 5999) {              //In this piece of code we can see the different salary ranges.
            theDeductions = 150                 // Then it shows the set amount to be deducted as contribution to NHIF.
        } else if (grossSalary >= 6000 && grossSalary <= 7999) {
            theDeductions = 300
        }else if (grossSalary >= 6000 && grossSalary <= 7999) {
            theDeductions = 300
        }else if (grossSalary >= 8000 && grossSalary <= 11999) {
            theDeductions = 400
        }else if (grossSalary >= 12000 && grossSalary <= 14999) {
            theDeductions = 500
        }else if (grossSalary >= 15000 && grossSalary <= 19999) {
            theDeductions = 600
        }else if (grossSalary >= 20000 && grossSalary <= 24999) {
            theDeductions = 750
        }else if (grossSalary >= 25000 && grossSalary <= 29999) {
            theDeductions = 850
        }else if (grossSalary >= 30000 && grossSalary <= 34999) {
            theDeductions = 900
        }else if (grossSalary >= 35000 && grossSalary <= 39999) {
            theDeductions = 950
        }else if (grossSalary >= 40000 && grossSalary <= 44999) {
            theDeductions = 1000
        }else if (grossSalary >= 45000 && grossSalary <= 49999) {
            theDeductions = 1100
        }else if (grossSalary >= 50000 && grossSalary <= 59999) {
            theDeductions = 1200
        }else if (grossSalary >= 60000 && grossSalary <= 69999) {
            theDeductions = 1300
        }else if (grossSalary >= 70000 && grossSalary <= 79999) {
            theDeductions = 1400
        }else if (grossSalary >= 80000 && grossSalary <= 89999) {
            theDeductions = 1500
        }else if (grossSalary >= 90000 && grossSalary <= 99999) {
            theDeductions = 1600
        }else if (grossSalary >= 100000) {
            theDeductions = 1700
        }
            return theDeductions
}
deductionNhif()


function deductionNSSF(grossSalary) {
    let nssffee = grossSalary * 0.06   // the gross salary is multiplied by 0.06(6%) to get the amount to be deducted.
        return nssffee
}
deductionNSSF()


function netSalary(grossSalary) {
    const netPay = grossSalary - (afterPaye() + deductionNhif() + deductionNSSF())
        return netPay           //This is the final code that now adds up all the deductions.
}                               // The total is then subracted from the gross salary.
netSalary()                     // The balance is the returned as the Netpay value.