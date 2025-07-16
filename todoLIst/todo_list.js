// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = []; // Array to store tasks

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = {
    text: taskText,
    completed: false
  };

  tasks.push(task);
  taskInput.value = "";
  renderTasks();
}

// Function to render all tasks
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTasks();
    });

    const label = document.createElement("label");
    label.textContent = task.text;

    li.appendChild(checkbox);
    li.appendChild(label);
    taskList.appendChild(li);
  });
}

// Function to clear completed tasks
function clearCompletedTasks() {
  tasks = tasks.filter(task => !task.completed);
  renderTasks();
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Optional: Allow Enter key to add task
taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
