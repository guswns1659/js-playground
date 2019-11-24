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
    } else {
        input.array.push(str);
    }
    output.text.innerHTML = input.getInput();
}

function showResult(event) {
    console.log("showResult");
    

}