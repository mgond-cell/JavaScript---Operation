// 1. Even numbers
function showEven() {
    let result = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            result += i + " ";
        }
    }
    document.getElementById("even").innerText = result;
}

// 2. Calculator
function calculate(a, b, op) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Cannot divide by zero";
        default: return "Invalid operator";
    }
}

function doCalc() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let op = document.getElementById("op").value;
    document.getElementById("calc").innerText = calculate(a, b, op);
}

// 3. Tax
function findTax(salary) {
    let tax = 0;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;
        case (salary > 1500000):
            tax = salary * 0.30;
            break;
        default:
            return "Invalid salary";
    }
    return tax;
}

function calcTax() {
    let salary = Number(document.getElementById("salary").value);
    document.getElementById("tax").innerText =
        "Tax = " + findTax(salary);
}

// 4. Digit Product
function sumOfProducts(n1, n2) {
    let sum = 0;
    while (n1 > 0 || n2 > 0) {
        let d1 = n1 % 10;
        let d2 = n2 % 10;
        sum += d1 * d2;
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    return sum;
}

function calcDigit() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    document.getElementById("digit").innerText =
        "Result = " + sumOfProducts(n1, n2);
}
