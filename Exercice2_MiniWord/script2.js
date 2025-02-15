
let text = document.querySelector('h1');
let color = document.getElementById('exampleColorInput');
let size = document.getElementById('sizeField');
let font = document.querySelector('select');

color.addEventListener('change', function(){
    text.style.color = color.value;
});

size.addEventListener('change', function(){
    text.style.fontSize = size.value + 'px';
});

font.addEventListener('change', function(){
    text.style.fontFamily = font.value;
});