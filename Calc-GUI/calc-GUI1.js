var input = {'array':[]};
input.getInputStr = function (){
    return input.array.join("");
};
input.getCalcArray = function () {
    this.calcArr = this.getInputStr().split(" ");
};
input.getValue = function () {
    return this.calcArr.shift();
};
input.getOper = function () {
    var oper = this.calcArr.shift();
    if (oper === "+" || oper === "-" || oper === "*" || oper === "/") {
        return oper;
    } else {
        return '?';
    }
};
input.isEmpty = function () {
    return this.calcArr.length === 0;
};

input.getInputArr = function (str) {
    switch (str){
        case 'BS':
            this.array.pop();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            this.array.push(' '+str+' ');
            break;
        default:
            this.array.push(str);
    }
    if (this.array.length === 0){
        printer.text.innerHTML = 'Empty';
    } else {
       printer.text.innerHTML = this.getInputStr();
    }
};

var calculator = {'result':0};
calculator.calculate = function (first, second, oper) {
    this.result = first;
    switch (oper){
        case '+':
            this.result += second;
            break;
        case '-':
            this.result -= second;
            break;
        case '*':
            this.result *= second;
            break;
        case '/':
            this.result /= second;
            break;
        default:
            return NaN;
    }
};

printer = {};
printer.text = document.getElementById('output')


function clickNumbers(event) {
    var str = event.target.innerHTML;
    console.log(str);
    input.getInputArr(str);
    input.getCalcArray();
};

function getResult(event) {
    console.log(event.target.innerHTML);
    calculator.result = input.getValue();
    while(!input.isEmpty()){
        var oper = input.getOper();
        var second = input.getValue();
        calculator.calculate(calculator.result, second, oper);
    }
    printer.text.innerHTML = calculator.result;  
};