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
    

}