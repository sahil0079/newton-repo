

//in class asssignment


//create handleCallback and pass a callback as argument
// fucntion should include try-catch block
//if the callback is not a function is should print error thrown in the catch block

// function handleCallback(callback) {
//     try {
//         callback();
//     } catch (error) {
//         console.log('error thrown')
//     }
// }




// You need to complete the function findTax() that takes a number type variable as an argument which is the salary of a person.
// You need to calculate the tax amount on his salary by using Js switch control flow.
// The tax rates are given below.

// if 500000<= salary >0 then 0% tax on the entire salary
// If 1000000 >= salary > 500000 then 10% tax on the entire salary
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary
// If salary >1500000 then 30% tax on the entire salary

function findTax(salary) {
    try {
        if (salary < 0) {
            throw new ValidationError("Salary not valid");
        }

        let taxAmount;
        switch (true) {
            case salary >= 500000 && salary <= 1000000:
                taxAmount = salary * 0.1;
                break;
            case salary > 1000000 && salary <= 1500000:
                taxAmount = salary * 0.2;
                break;
            case salary > 1500000:
                taxAmount = salary * 0.3;
                break;
            default:
                taxAmount = 0;
                break;
        }

        return taxAmount;
    } catch (error) {
        return error.message;
    }
}

// Example usage
const answer1 = findTax(1600000);
console.log(answer1); // prints 480000

const answer2 = findTax(-3435);
console.log(answer2); // prints "Salary not valid"
