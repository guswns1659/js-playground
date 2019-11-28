// HTML elements
let word1 = document.getElementById('word1'); //answer
let word2 = document.getElementById('word2'); //buttons
let check = document.getElementById('check'); // answer === buttons?
let progress = document.getElementById('progress'); // How many try?
let time = document.getElementById('time'); // time

game = {
    'btns': [], //btns : 버튼 객체가 들어있는 배열.
    'maxNum': 3,
    'current': 0
};
game.answer;
game.startTime = Date.now();
// 문제가 될 수 있는 단어 모음들
game.answerWordArr = 'papago,sparkle,pencils,inbody,composition,analysis'.split(',');

// 무작위로 문제를 뽑는 메소드
game.pickRandomAnswer = function () {
    let randomNum = Math.floor(Math.random() * (this.answerWordArr.length))
    word1.innerHTML = this.answerWordArr[randomNum]
    this.answer = word1.innerHTML;
    this.answerSplit = this.answer.split(""); // H, E, L, L, O
};

// 한번 게임 돌고 word2에 남아있는 버튼 객체 지우는 메소드
game.removeAll = function () {
    for(let i =0; i<this.btns.length; i++){
        word2.removeChild(this.btns[i]);
    }
    this.btns = [];
};

// 맨 처음 버튼을 만드는 메소드
game.addButtons = function () {
    for (let i = 0; i < this.answer.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.answer[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    }
};

// 사용자가 풀어야할 단어를 뒤섞는 메소드
game.shuffle = function () {
    let toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        swap()
    }
    for (let i = 0; i < Math.floor(Math.random() * (this.answer.length)); i++) {
        lshift();
    }

};

// 정답인지 아닌지 확인하는 메소드
game.isCorrect = function () {
    return this.answer === this.answerSplit.join('')
};

//정답과 사용자의 답을 비교하는 메소드
game.checkAnswerAndButtons = function () {
    if (this.isCorrect()) {
        check.innerHTML = "정답과 일치합니다.";
    } else {
        check.innerHTML = "정답과 일치하지 않습니다.";
    }
};

// swap(), rshift()에서 클릭하면 단어 위치를 바꾸는 메소드 
game.updateButtons = function () {
    for (let i = 0; i < this.answerSplit.length; i++) {
        this.btns[i].innerHTML = this.answerSplit[i];
    }
};

// 정답 시 새로운 게임 시작하는 메소드
game.progress =function () {
    if(this.isCorrect()){
        this.current++;
        this.removeAll();
        this.init();
    }

    let circle = '정답횟수: ';
    for(let i=0; i<this.current; i++){
        circle += '0 ';
    }
    progress.innerHTML = circle;

    if(this.current === this.maxNum){
        let time = (Date.now() - this.startTime) / 1000;
        clearInterval(runtime);
        alert('축하합니다.' + time + ' 초');
    }
};

// swap 핸들러
function swap() {
    let swapArr = [];
    while (game.answerSplit.length != 0) {
        let popStr = game.answerSplit.pop();
        swapArr.push(popStr);
    }
    game.answerSplit = swapArr;
    game.updateButtons();
    game.checkAnswerAndButtons();
    game.progress();
};
function rshift() {
    let popStr = game.answerSplit.pop();
    game.answerSplit.unshift(popStr);
    game.updateButtons();
    game.checkAnswerAndButtons();
    game.progress();
};
function lshift() {
    let shiftStr = game.answerSplit.shift();
    game.answerSplit.push(shiftStr);
    game.updateButtons();
    game.checkAnswerAndButtons();
    game.progress();
};

game.init = function () {
    this.pickRandomAnswer();
    this.addButtons();
    this.shuffle();
};
game.init();

// 소요시간 측정하는 함수
function runTime() {
    let now = (Date.now() - game.startTime) / 1000;
    time.innerHTML = now + ' s';
};

let runtime = setInterval(runTime, 50);
