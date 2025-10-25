const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
    return;
  }

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("task-checkbox");

  let taskText = document.createElement("span");
  taskText.textContent = inputBox.value;

  let deleteBtn = document.createElement("span");
  deleteBtn.textContent = "\u00d7"; 
  deleteBtn.classList.add("delete-btn");

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  listContainer.appendChild(li);
  inputBox.value = "";

  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("task-checkbox")) {

    const taskText = e.target.nextSibling;
    if (e.target.checked) {
      taskText.style.textDecoration = "line-through";
      taskText.style.color = "#888";
    } else {
      taskText.style.textDecoration = "none";
      taskText.style.color = "#000";
    }
    saveData();
  } else if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const data = localStorage.getItem("data");
  if (data) listContainer.innerHTML = data;
}

showTask();