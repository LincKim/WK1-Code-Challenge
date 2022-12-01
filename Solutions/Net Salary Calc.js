// ## Challenge 3: Net Salary Calculator(Toy Problem)

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
