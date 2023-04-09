function checkLastDigit(a, b, c) {
    if(a % 10 === b % 10 && b % 10 === c % 10) {
        console.log("Numbers have same last digit");;
    }
    else {
        console.log("Numbers do not have same last digit");
    }
}


checkLastDigit(101, 201, 301);