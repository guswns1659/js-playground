// HTML elements
let btn1 = document.getElementById('btn1'); // 7,8,9 
let btn2 = document.getElementById('btn2'); // 4,5,6
let btn3 = document.getElementById('btn3'); // 1,2,3
let btn4 = document.getElementById('btn4'); // BS,0,=

// setting 객체
// 레이아웃 만드는 역할
setting = {
    'row1': [7, 8, 9, '/'],
    'row2': [4, 5, 6, '*'],
    'row3': [1, 2, 3, '-'],
    'row4': ['BS', 0, '=', '+']
};
// 버튼한테 CSS 적용하는 메소드
setting.applyBtnCss = function (btn) {
    btn.style.width = "100px";
    btn.style.height = "100px";
    btn.style.margin = "10px";
    btn.style.fontSize = "30px";
    if (btn.innerHTML === '=') {
        btn.onclick = getResult;
    } else {
        btn.onclick = clickNumber;
    }
};

// 버튼 만드는 메소드.. (아쉽..)
setting.row1Addbtns = function () {
    for (let i = 0; i < this.row1.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.row1[i];
        this.applyBtnCss(btn);
        btn1.appendChild(btn);
    }
};
setting.row2Addbtns = function () {
    for (let i = 0; i < this.row2.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.row2[i];
        this.applyBtnCss(btn);
        btn2.appendChild(btn);
    }
};
setting.row3Addbtns = function () {
    for (let i = 0; i < this.row3.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.row3[i];
        this.applyBtnCss(btn);
        btn3.appendChild(btn);
    }
};
setting.row4Addbtns = function () {
    for (let i = 0; i < this.row4.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.row4[i];
        this.applyBtnCss(btn);
        btn4.appendChild(btn);
    }
};

// input 객체 
// 입력받은 숫자를 계산할 수 있게 준비
input = {
    'clickNumArray': [],
    'prepareCalcArr': []
};

// 숫자가 담긴 배열을 문자열로 바꿔주는 메소드
input.getInput = function () {
    return this.clickNumArray.join('');
};

// 계산할 수 있게 공백으로 split하는 메소드
input.prepareCalc = function () {
    this.prepareCalcArr = this.getInput().split(" ");
};

// 수식의 값을 얻는 메소드
input.getValue = function () {
    return this.prepareCalcArr.shift();
};
// 연산자를 얻는 메소드
input.getOperator = function () {
    let oper = this.prepareCalcArr.shift();
    if (oper === '+' || oper === '-' || oper === '*' || oper === '/') {
        return oper;
    } else {
        return '?';
    }
};
// 한번 계산 후에 결과만 남기는 메소드
input.removeAll = function (value) {
    this.clickNumArray = [];
    this.clickNumArray.push(value);
};

// 계산기를 세팅하는 메소드
setting.init = function () {
    this.row1Addbtns();
    this.row2Addbtns();
    this.row3Addbtns();
    this.row4Addbtns();
};

// calculator 객체
// 계산을 담당한다. 
calculator = {};
// 입력받은 숫자와 연산자를 계산하는 메소드
calculator.calculate = function (first, oper, second) {
    this.result = first;
    switch (oper) {
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
    return this.result;
};

// output 객체
// 출력을 담당한다. 

output = {};
output.text = document.getElementById('output');
// 결과창에 문자열을 출력하는 메소드 
output.display = function (str) {
    this.text.innerHTML = str;
};



// 숫자 버튼 핸들러  
// 입력받은 숫자와 연산자를 출력 
function clickNumber(event) {
    let clickNum = event.target.innerHTML;
    if (clickNum === 'BS') {
        input.clickNumArray.pop();
    } else if (clickNum === '+' || clickNum === '-' || clickNum === '*' || clickNum === '/') {
        input.clickNumArray.push(' ' + clickNum + ' ');
    } else {
        input.clickNumArray.push(clickNum);
    }
    
    if (input.clickNumArray.length === 0) {
        output.text.innerHTML = 'Empty';
    } else {
        output.display(input.getInput());
    }
};

// '=' 버튼 핸들러
// 입력받은 숫자와 연산자를 계산
function getResult(event) {
    input.prepareCalc();
    let result = input.getValue();
    while (input.prepareCalcArr.length != 0) {
        let oper = input.getOperator();
        let second = input.getValue();
        calculator.calculate(result, oper, second);
    }
    output.display(calculator.result);
    input.removeAll(calculator.result);
};

setting.init();