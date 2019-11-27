// HTML elements
let word1 = document.getElementById('word1'); // answer
let word2 = document.getElementById('word2'); // buttons
let check = document.getElementById('check'); // word1 === word2?
let progress = document.getElementById('progress'); // progress


// game객체
// 게임할 때 필요한 기능을 포함한다.
let game = {
    'btns': [],
    'max_count': 3,
    'current': 0
};
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
    if (this.checkGood()) {
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

//정답 맞추면 word2 속 버튼을 지우는 메소드
game.removeButtons = function () {
    for (let j = 0; j<this.btns.length; j++) { 
        word2.removeChild(this.btns[j]);
    }
    this.btns = [];
};

// 정답이지 아닌지 확인하는 메소드.
game.checkGood = function () {
    return this.answer === this.letter.join("");
};

game.btnsCopyText = function () {
    for (let j = 0; j < this.letter.length; j++) {
        this.btns[j].innerHTML = this.letter[j];
    }
};

game.swap = function () {
    // let s = this.letter.reverse();

    // reverse() 쓰지 않고 구현한 뒤집기.
    let reverseArr = [];

    while(this.letter.length != 0){
        let popStr = this.letter.pop();
        reverseArr.push(popStr);
    }
    this.letter = reverseArr;

    this.btnsCopyText();
    this.check();

};

game.rshift = function () {
    let s = this.letter.pop();
    this.letter.unshift(s);
    this.btnsCopyText();
    this.check();
};

game.lshift = function () {
    let s = this.letter.shift();
    this.letter.push(s);
    this.btnsCopyText();
    this.check();
};

//횟수 측정하고 정답을 표시하는 메소드
game.progress = function () {
    if(this.checkGood()){
        this.current++;
        this.removeButtons();
        this.init();
        this.shuffle();

        let str='';
        
        for(let i = 0; i < this.current; i++) {
            str += '0';
        }
        progress.innerHTML = str;
    }
    if(this.current === this.max_count){
        let t2 = Date.now();
        alert('Thank you for playing\n' + ((t2-t1) * 0.001) + '초 소요');
    }
};

// event handler for swap
function swap() {
    game.swap();
    game.progress();
};

function rshift(event) {
    game.rshift();
    game.progress();
};

function lshift(event) {
    game.lshift();
    game.progress();
};

// shuffle 
// 50% 확률로 뒤집기를 하거나 랜덤으로 오른쪽으로 밀어내기.
game.shuffle = function () {
    let toggle = (Math.floor(Math.random() * 2) === 0)
    if (toggle) {
        this.swap();
    }

    let n = Math.floor(Math.random() * this.letter.length);
    for (let y = 0; y < n; y++) {
        this.rshift();
    }
};

let t1 = Date.now();
game.init();
game.shuffle();
