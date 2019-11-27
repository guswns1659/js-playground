// Calculator
// by Hyunjun
// 2019.11.27

// input 객체
// input를 받는 역할
const input = { 'array': [] };

// 입력받은 문자열 리턴하는 메소드
input.getInput = function () {
    return this.array.join("");
};

// 계산할 수 있게 array를 구성하는 메소드
input.prepareCalculate = function () {
    this.array = this.getInput().split(" ");
};

// 수식의 값을 가져오는 메소드
input.getValue = function () {
    let str = this.array.shift();
    let n = Number(str);
    return n;
};

//수식의 연산자를 가져오는 메소드
input.getOperator = function () {
    let str = this.array.shift();
    if (str === "+" || str === "-" || str === "*" || str === "/") {
        return str;
    } else {
        return '?';
    }
};

// 수식이 비었는지 확인하는 메소드
input.isEmpty = function () {
    return this.array.length === 0;
};

// 수식을 초기화시키고 결과값을 추가하는 메소드
input.removeAll = function (value) {
    input.array = [];
    input.array.push(value);
};

// Calculator객체
// 계산을 담당한다.
const calculator = {};

// 입력받은 숫자와 연산자를 계산하는 메소드
calculator.calculate = function (first, oper, second) {
    let result = first;
    switch (oper) {
        case "+":
            result += second;
            break;
        case "-":
            result -= second;
            break;
        case "*":
            result *= second;
            break;
        case "/":
            result /= second;
            break;
        default:
            return NaN;
    }
    return result;
};

// output 객체
// 출력을 담당한다.
const output = {};
output.text = document.getElementById('output');

// 수식을 결과창에 출력하는 메소드
output.display = function (str) {
    output.text.innerHTML = str;
}

// 숫자 버튼의 핸들러 함수
function clickNumbers(event) {
    let str = event.target.innerHTML;
    if (str === "BS") {
        input.array.pop();
    } else if (str === "+" || str === "-" || str === "*" || str === "/") {
        input.array.push(' ' + str + ' ');
    } else {
        input.array.push(str);
    }
    if (input.array.length === 0) {
        output.display("Empty");
    } else {
        let inputStr = input.getInput();
        output.display(inputStr);
    }
};

// '=' 버튼의 핸들러 함수.
function getResult(event) {
    input.prepareCalculate();
    let result = input.getValue();
    while(!input.isEmpty()){
        let oper = input.getOperator();
        let second = input.getValue();
        result = calculator.calculate(result, oper, second);
    }
    output.display(result);
    input.removeAll(result);
};
