console.log("script file is linked");

//homework - create javascript calculator

let calculator = {
    Addition: function (int1, int2) {
        let sum = int1 + int2;
        // console.log(`Add Calculator ${int1} and ${int2}`);
        return sum;
    },
    Subtraction: function (num1, num2) {
        let diff = num1 - num2;
        console.log(`diff is ${diff}`);
        return diff;
    },
    Multiplication: function (int1, int2) {
        let multiply = int1 * int2;
        console.log(`multiplication  is ${multiply}`);
        return multiply;
    }

};