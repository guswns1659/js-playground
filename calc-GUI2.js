input = {'array':[]};
input.getInput = function (){
    return input.array.join("");
}

printer = {};
printer.text = document.getElementById('output')

function clickNumbers(event) {
    var str = event.target.innerHTML;
    console.log(str);
    switch (str){
        case 'BS':
            input.array.pop();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            input.array.push(' '+str+' ');
            break;
        default:
            input.array.push(str);
    }
    if (input.array.length === 0){
        printer.text.innerHTML = 'Empty';
    } else {
       printer.text.innerHTML = input.getInput();
    }

};

function getResult(event) {
    console.log(event.target.innerHTML);
};