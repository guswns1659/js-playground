let answer = document.getElementById('answer');
let word = document.getElementById('word');
let check = document.getElementById('check');
let progress = document.getElementById('progress');
let time = document.getElementById('time');

// game 객체 
// 게임 초기화 및 기능 담당
game = {
    'answerSplit': [],
    'btnElements': [],
    'maxNum': 3,
    'current': 0
};

game.startTime = Date.now();
game.answerList = 'nowon,infern,nomader,worldtime,battery,pencil'.split(',');


// 랜덤으로 answer 뽑는 메소드
game.pickRandomAnswer = function () {
    let randomNum = Math.floor(Math.random() * (this.answerList.length));
    answer.innerHTML = this.answerList[randomNum];
    this.answer = answer.innerHTML;
};

// answer를 split해서 배열에 담는 메소드
game.splitAnswer = function () {
    this.answerSplit = this.answer.split('');
};

// answer에 맞게 버튼 추가하는 메소드
game.addButtons = function () {
    for (let i = 0; i < this.answerSplit.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.answerSplit[i];
        word.appendChild(btn);
        this.btnElements.push(btn);
    }
};

// 게임 다시 시작하면 기존 버튼 지우는 메소드
game.removeBtns = function () {
    for (let i = 0; i < this.btnElements.length; i++) {
        word.removeChild(this.btnElements[i]);
    }
    this.btnElements = [];
};



// answer와 사용자의 답을 비교하는 메소드
game.isCorrect = function () {
    return this.answer === this.answerSplit.join('');
};

// 정답 혹은 오답에 따라 결과 출력하는 메소드
game.check = function () {
    if (this.isCorrect()) {
        check.innerHTML = '일치합니다.';
    } else {
        check.innerHTML = '일치 하지 않습니다.';
    }
};


game.isFinished = function () {
    return this.maxNum === this.current;
};

game.progress = function () {
    if (this.isFinished()) {
        this.elapsed = (Date.now() - this.startTime) / 1000;
        alert('당신의 기록은: ' + this.elapsed + '초');
        console.log('alert');
        clearInterval(x);
    }
    if (this.isCorrect()) {
        this.current++; //1, 2, 3
        this.removeBtns();
        this.init();
    }
    
    let circle = '';
    for (let i = 0; i < this.current; i++) {
        circle += '0';
        progress.innerHTML = circle;
    }

};

game.shuffle = function () {
    swap();
    let randomNum = Math.floor(Math.random() * (this.answerSplit.length - 1));
    for (let i = 0; i < randomNum; i++) {
        lshift();
    }

};

// swap 핸들러 
// 단어를 역순으로 바꾸는 기능 
function swap() {
    game.answerSplit.reverse(); // O, L, L, E, H
    game.removeBtns();
    game.addButtons();
    game.check();
    game.progress();
};
// rshift 핸들러
// 오른족으로 미는 기능 
function rshift() {
    let popStr = game.answerSplit.pop();
    game.answerSplit.unshift(popStr);
    game.removeBtns();
    game.addButtons();
    game.check();
    game.progress();
};
// lshift 핸들러
// 왼쪽으로 미는 기능 
function lshift() {
    let shiftStr = game.answerSplit.shift();
    game.answerSplit.push(shiftStr);
    game.removeBtns();
    game.addButtons();
    game.check();
    game.progress();
};

game.init = function () {
    game.pickRandomAnswer();
    game.splitAnswer();
    game.addButtons();
    game.shuffle();
};
game.init();

function elapsedTime() {
    let now = (Date.now() - game.startTime) / 1000;
    time.innerHTML = now + ' 초';
};

let x = setInterval(elapsedTime, 50);

