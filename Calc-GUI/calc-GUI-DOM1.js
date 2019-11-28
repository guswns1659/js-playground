let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');

setting = {'row1' : [7,8,9,'/'],
           'row2' : [4,5,6,'*'],
           'row3' : [1,2,3,'-'],
           'row4' : ['BS',0,'=','+']
};
// 버튼한테 CSS  메소드
setting.applyBtnCss = function (btn) {
    btn.style.width = "50px";
    btn.style.height = "50px";
    btn.style.margin = "10px";
    btn.style.fontSize = "30px";
    btn.onclick = clickNumber;
};

setting.row1Addbtns = function () {
    for(let i =0; i<this.row1.length; i++){
        let btn = document.createElement('button');
        btn.innerHTML = this.row1[i];
        this.applyBtnCss(btn);
        btn1.appendChild(btn);
    }
};
setting.row2Addbtns = function () {
    for(let i =0; i<this.row2.length; i++){
        let btn = document.createElement('button');
        btn.innerHTML = this.row2[i];
        this.applyBtnCss(btn);
        btn2.appendChild(btn);
    }
};
setting.row3Addbtns = function () {
    for(let i =0; i<this.row3.length; i++){
        let btn = document.createElement('button');
        btn.innerHTML = this.row3[i];
        this.applyBtnCss(btn);
        btn3.appendChild(btn);
    }
};
setting.row4Addbtns = function () {
    for(let i =0; i<this.row4.length; i++){
        let btn = document.createElement('button');
        btn.innerHTML = this.row4[i];
        this.applyBtnCss(btn);
        btn4.appendChild(btn);
    }
};

input = {'clickNumArray':[]
};

// 숫자가 담긴 배열을 문자열로 바꿔주는 메소드
input.getInput = function () {
    return this.clickNumArray.join('');
};

output = {};
output.text = document.getElementById('output');
// 결과창에 문자열을 출력하는 메소드 
output.display = function () {
    this.text.innerHTML = input.getInput();
};

setting.row1Addbtns();
setting.row2Addbtns();
setting.row3Addbtns();
setting.row4Addbtns();


function clickNumber (event) {
    let clickNum = event.target.innerHTML;
    input.clickNumArray.push(clickNum);
    output.display();
};


