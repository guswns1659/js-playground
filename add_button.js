var el = document.getElementById('test');

var input = document.createElement('input');
input.id = 'input';
input.type = 'text';

var btn = document.createElement('button');
btn.onclick = main;
btn.innerHTML ='클릭';

el.appendChild(input);
el.appendChild(btn);

function main() {
    console.log(input.value);
}