let word1 = document.getElementById('word1');
let word2 = document.getElementById('word2');
let check = document.getElementById('check');

let wordList = 'apple,smartphone,notebook,elephant,earphone,idol,Haruki,forest'.split(',');
let randomNum = Math.floor(Math.random() * (wordList.length));
let answer = wordList[randomNum];

word1.innerHTML = answer;

// game객체
// 게임할 때 필요한 기능을 포함한다.
let game = {};
game.word = answer.split("");
game.btns = [];
game.btnsCopyText = function () {
    for (let j = 0; j < this.word.length; j++) {
        this.btns[j].innerHTML = this.word[j];
    };
}
game.check = function () {
    if (answer === game.word.join("")) {
        check.innerHTML = '일치합니다.';
    } else {
        check.innerHTML = '일치하지 않습니다.';
    }
};

for (let i = 0; i < answer.length; i++) {
    let btn = document.createElement('button');
    btn.innerHTML = answer[i];
    word2.appendChild(btn);
    game.btns.push(btn);
};

function swap(event) {
    let s = game.word.reverse();
    game.btnsCopyText();
    game.check();
};

function rshift(event) {
    let s = game.word.pop();
    game.word.unshift(s);
    game.btnsCopyText();
    game.check();
};

function lshift(event) {
    let s = game.word.shift();
    game.word.push(s);
    game.btnsCopyText();
    game.check();
};

// shuffle 
// 50% 확률로 뒤집기를 하거나 랜덤으로 오른쪽으로 밀어내기.
let toggle = (Math.floor(Math.random() * 2) === 0)
if (toggle) {
    swap();
};

let n = Math.floor(Math.random() * answer.length);
for (let y = 0; y < n; y++) {
    rshift();
};
