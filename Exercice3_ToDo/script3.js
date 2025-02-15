
let tasks = document.getElementById('Tasks');
let input = document.getElementById('Input');
let taskName = document.getElementById('taskName');
let taskContent = document.getElementById('taskContent');
let button = document.querySelector('button');

button.addEventListener('click', function(){
    let task = document.createElement('div');
    task.style.backgroundColor = 'white';
    task.style.borderRadius = '5px';
    task.textContent = taskName.value + ' : ' + taskContent.value+"     ";
    taskName.value="";
    taskContent.value="";
    task.style.margin = '10px';
    task.style.padding = '10px';
    task.innerHTML += '<i class="bi bi-trash3"></i>';
    tasks.appendChild(task);
});

tasks.addEventListener('click', function(e){
    if(e.target.classList.contains('bi-trash3')){
        e.target.parentElement.remove();
    }
});