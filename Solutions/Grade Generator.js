// ## Challenge 1: Student Grade Generator(Toy Problem)

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
