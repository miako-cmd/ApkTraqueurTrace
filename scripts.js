function addTask(){
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if(taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = function(){
        li.classList.toggle("done");
    };

    const btn = document.createElement("button");
    btn.textContent = "supprimer";
    btn.onclick = function(e){
        e.stopPropagation();
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}