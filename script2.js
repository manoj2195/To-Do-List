function addTask() {
  //jaise hi button pr click hoga ye bala function call hoga.
  const newTask = document.createElement("li");
  const taskList = document.getElementById("taskList");
  taskList.appendChild(newTask);
  newTask.textContent = document.getElementById("inputTask").value;
  // hamne jo newTask name ka variable create hai usme ham jo input field me likhenge vo input task me print ho jay. jo ki value ki value hai.(matlab jo bhi ham input field me likhenge vo list me show ho jay).
  // .value= jo bhi ham input me likenge vo is ki value hai
  document.getElementById("inputTask").value = ""; // likhne ke baad input field khali ho jay
  deleteTask(newTask); 
}

function deleteTask(newTask) {
  const deletebutton = document.createElement("button"); // new task ke ander hamne delete button create kiya hai
  deletebutton.textContent = "Delete"; // jis line ko ham delete karenge (usme delete likha rahega)
  newTask.appendChild(deletebutton); // delete button ko add kar denge newtask variable me
  deletebutton.onclick = function () {
    newTask.remove(); // jaise hi ham is delete button pr click karenge tab ek function call ho usme hoga new task.remove (jis bhi element pr ham remove button lagayenga vo remove ho jayga).
  };
}


