

var input = {'array':[]};
input.getInput = function (){
    return input.array.join("");
};

input.removeAll = function (value) {
    this.array = [];
    this.array.push(value);
};

input.isEmpty = function () {
    return this.array.length === 0;
};

input.prepareCalculate = function () {
    this.array = this.array.join("").split(" ");
};

input.getValue = function () {
    var str = this.array.shift();
    var n = Number(str);
    return n;
};

input.getOperator = function () {
    var oper = this.array.shift();
    if (oper === "+" || oper === "-" || oper === "*" || oper === "/") {
        return oper;
    } else {
        return '?';
    }
};

output = {};
output.text = document.getElementById('output');

output.print = function (str) {
    this.text.innerHTML = str;
};

output.display = function () {
    this.text.innerHTML = input.getInput();
};

var calculator = {};

calculator.calculate = function (first, second, oper) {
    var result = first;
    switch (oper){
        case '+':
            result += second;
            break;
        case '-':
            result -= second;
            break;
        case '*':
            result *= second;
            break;
        case '/':
            result /= second;
            break;
        default:
            return NaN;
    }
    return result;
};


//숫자 버튼의 핸들러 함수 
var clickNumbers = function (event) {
    var str = event.target.innerHTML;
    console.log(str);

    if (str === 'BS') {
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '*' || str === '/') {
        input.array.push(' ' + str + ' ');

    } else {
        input.array.push(str);
    }

    if (input.isEmpty()) {
        output.text.innerHTML = "Empty";
    } else {
        output.display();
    }
};


// '=' 버튼의 핸들러 함수
var getResult = function (event) {
    input.prepareCalculate();
    
    var result = input.getValue();

    while (!input.isEmpty()) {
        var op = input.getOperator();
        var second = input.getValue();
        result = calculator.calculate(result, second, op);
    }
    output.print(result);
    input.removeAll(result);
};