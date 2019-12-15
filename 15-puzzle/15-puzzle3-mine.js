//str을 pickRandomWord()에서 선언해야 글자가 나옴. 

// let str = document.getElementById('word1').innerHTML;
let word2 = document.getElementById('word2');
let check = document.getElementById('check');


const game = {};
//선언만 함.
game.word;
//버튼 단어 무작위로 하기위해 만듦.
game.originWord;
game.btns = [];
game.randomWordList = ["HELLO", "PUZZLE", "WATCH"];

// 랜덤으로 단어 뽑는 메소드
game.pickRandomWord = function () {
    let randonNum = Math.floor(Math.random() * (this.randomWordList.length));
    let str = document.getElementById('word1');
    str.innerHTML = this.randomWordList[randonNum];
    this.word = str.innerHTML.split("");
    this.originWord = str.innerHTML.split("");
};


game.btnsCopyText = function () {
    for (let j = 0; j < this.word.length; j++) {
        this.btns[j].innerHTML = this.word[j];
    };
};

game.check = function () {
    for (let i = 0; i < this.word.length; i++) {
        if (str[i] === this.btns[i].innerHTML) {
            check.innerHTML = '일치합니다.';
        } else {
            check.innerHTML = '일치하지 않습니다.';
        }
    }
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

// 단어 무작위로 섞는 함수.
function mix(event) {
    console.log("mix");
    let repeatRandomNumArr = [];
    let count = 0;
    while (repeatRandomNumArr.length != 5) {
        let randomNum = Math.floor(Math.random() * (game.word.length))
        console.log(randomNum);
        if (repeatRandomNumArr.indexOf(randomNum) != -1) {
            continue;
        } else {
            game.word[randomNum] = game.originWord[count]; //count 2
            repeatRandomNumArr.push(randomNum);
            count++;
        }
    };
};

function main(event) {
    game.pickRandomWord();
    mix();
    for (let i = 0; i < game.word.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = game.word[i];
        word2.appendChild(btn);
        game.btns.push(btn);
    }
};
main();

