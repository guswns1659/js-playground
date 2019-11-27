// HTML elements
let word1 = document.getElementById('word1'); // answer
let word2 = document.getElementById('word2'); // buttons
let check = document.getElementById('check'); // word1 === word2?


// game객체
// 게임할 때 필요한 기능을 포함한다.
let game = { 'btns': [] };
game.wordList = 'apple,smartphone,notebook,elephant,earphone,idol,Haruki,forest'.split(',');
game.choose = function () {
    let randomNum = Math.floor(Math.random() * (this.wordList.length));
    this.answer = this.wordList[randomNum];
    this.letter = this.answer.split('');
    word1.innerHTML = this.answer;
};
game.addbuttons = function () {
    for (let i = 0; i < this.answer.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.answer[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    }
};
game.check = function () {
    if (this.answer === this.letter.join("")) {
        check.innerHTML = '일치합니다.';
    } else {
        check.innerHTML = '일치하지 않습니다.';
    }
};

// 게임을 초기화하는 메소드. 
// 문제 랜덤으로 뽑고, 버튼 추가하고, 정답 일치 확인한다. 
game.init = function () {
    this.choose();
    this.addbuttons();
    this.check();
};
game.init();

game.btnsCopyText = function () {
    for (let j = 0; j < this.letter.length; j++) {
        this.btns[j].innerHTML = this.letter[j];
    }
};

// event handler for swap
function swap() {
    let s = game.letter.reverse();
    game.btnsCopyText();
    game.check();
};

function rshift(event) {
    let s = game.letter.pop();
    game.letter.unshift(s);
    game.btnsCopyText();
    game.check();
};

function lshift(event) {
    let s = game.letter.shift();
    game.letter.push(s);
    game.btnsCopyText();
    game.check();
};

// shuffle 
// 50% 확률로 뒤집기를 하거나 랜덤으로 오른쪽으로 밀어내기.
game.shuffle = function () {
    let toggle = (Math.floor(Math.random() * 2) === 0)
    if (toggle) {
        swap();
    }

    let n = Math.floor(Math.random() * this.letter.length);
    for (let y = 0; y < n; y++) {
        rshift();
    }
};
game.shuffle();
