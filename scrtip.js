const taskInput = document.getElementById("taskInput");
const tasklist = document.getElementById("tasklist");
const addTodo = document.getElementById("addTask");

let editTodo = null;

function addTask() {
  const inputTask = taskInput.value.trim();
  if (inputTask.length <= 0) {
    alert("To do is not will be null");
    return false;
  }

  const li = document.createElement("li");

  //creating check box
  const checkBtn = document.createElement("input");
  checkBtn.type = "checkbox";
  checkBtn.id = "check";
  checkBtn.style.marginRight = "10px";

  //Createing New Edit Button

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";

  //Createting Delete btn

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "Remove";
  removeBtn.className = "removebtn";

  const viewTask = document.createElement("button");
  viewTask.innerHTML = '<i class="fa-solid fa-eye"></i>';
  viewTask.className = "viewbtn";

  // View Task by alert
  viewTask.addEventListener("click", () => {
    const textNode = leftDiv.childNodes[1]; // checkbox এর পরের টেক্সট
    const taskText = textNode.nodeValue.trim();
    alert(taskText);
  });

  ///
  const leftDiv = document.createElement("div");
  leftDiv.className = "left";
  leftDiv.appendChild(checkBtn);
  leftDiv.appendChild(document.createTextNode(inputTask));
  // Create right div with buttons
  const rightDiv = document.createElement("div");
  rightDiv.className = "right";

  ///

  function TaskRemove() {
    li.remove();
  }

  removeBtn.addEventListener("click", TaskRemove);

  //Mark As Done

  checkBtn.addEventListener("click", function () {
    if (checkBtn.checked) {
      li.style.textDecoration = "line-through";
      li.style.color = "green";
    } else {
      li.style.textDecoration = "none";
    }
  });

  //edit

  if (editTodo) {
    const leftDiv = editTodo.querySelector(".left");
    const textNode = leftDiv.childNodes[1];
    textNode.nodeValue = inputTask;
    editTodo = null;
    addTodo.innerHTML = "Add Task";
    taskInput.value = "";
    return;
  }
  editBtn.addEventListener("click", function (e) {
    // get text node (after checkbox)
    const textNode = leftDiv.childNodes[1];
    taskInput.value = textNode.nodeValue.trim();
    editTodo = li;
    addTodo.innerHTML = "Edit Task";
    //li.remove();
  });

  // Append buttons to right div
  rightDiv.appendChild(viewTask);
  rightDiv.appendChild(editBtn);
  rightDiv.appendChild(removeBtn);

  // Append both divs to li
  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  //All Appending

  tasklist.appendChild(li);

  taskInput.value = "";
}

addTodo.addEventListener("click", addTask);
