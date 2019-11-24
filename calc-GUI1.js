var input = {'array' : []};
input.getInput = function () {
    return this.array.join("");
};

var output = {};
output.text = document.getElementById('output');

function clickNumbers(event) {
    console.log("clickNumbers");
    var str = event.target.innerHTML;
    console.log(str);

    if (str === "BS") {
        input.array.pop();
    } else if (str === "+" || str === "-" || str === "*" || str === "/") {
        input.array.push(" " + str + " ");
    } else {
        input.array.push(str);
    }
    if (input.array.length === 0) {
        output.text.innerHTML = "Empty";
    } else {
        output.text.innerHTML = input.getInput();
    }
};

function showResult(event) {
    console.log("showResult");
    var expr = input.getInput();
    var splitExpr = expr.split(" ");
    var result = calc(splitExpr);
    output.text.innerHTML = result;
}

function calc(splitExpr) {
    var result = Number(splitExpr[0]);
    for(var i = 1; i <splitExpr.length; i++) {
        if (splitExpr[i] === "+") {
            result += Number(splitExpr[i+1]);
        }
        else if (splitExpr[i] === "-") {
            result -= Number(splitExpr[i+1]);
        }
        else if (splitExpr[i] === "*") {
            result *= Number(splitExpr[i+1]);
        }
        else if (splitExpr[i] === "/") {
            result /= Number(splitExpr[i+1]);
        }
    }
    return result;  
};