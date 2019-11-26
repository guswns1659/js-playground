let str = document.getElementById('word1').innerHTML;
let word2 = document.getElementById('word2');
let check = document.getElementById('check');


let game = {};
game.word = str.split("");
game.btns = [];
game.btnsCopyText = function () {
    for(let j =0; j < this.word.length; j++){
        this.btns[j].innerHTML = this.word[j]; 
    };
}
game.check = function () {
    for(let i=0; i<this.word.length; i++) {
        if (str[i] === this.btns[i].innerHTML) {
            check.innerHTML = '일치합니다.';
        } else {
            check.innerHTML = '일치하지 않습니다.';
        }
    }
};

for (let i = 0; i < str.length; i++) {
    let btn = document.createElement('button');
    btn.innerHTML = str[i];
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

