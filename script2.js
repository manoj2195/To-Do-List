function addTask() {
  
  const newTask = document.createElement("li");
  const taskList = document.getElementById("taskList");
  taskList.appendChild(newTask);
  newTask.textContent = document.getElementById("inputTask").value;
 
  document.getElementById("inputTask").value = ""; 
  deleteTask(newTask); 
}

function deleteTask(newTask) {
  const deletebutton = document.createElement("button"); 
  deletebutton.textContent = "Delete"; 
  newTask.appendChild(deletebutton);
  deletebutton.onclick = function () {
    newTask.remove(); 
  };
}



