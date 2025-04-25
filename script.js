const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.completed) li.classList.add("completed");

    const taskInfo = document.createElement("div");
    taskInfo.className = "task-info";
    taskInfo.innerHTML = `
      <strong>${task.text}</strong><br/>
      <small>${task.date || ""} ${task.time || ""}</small>
    `;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    // Mark as complete
    li.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const updatedText = prompt("Edit task:", task.text);
      const updatedDate = prompt("Edit date:", task.date);
      const updatedTime = prompt("Edit time:", task.time);
      if (updatedText !== null) {
        tasks[index].text = updatedText;
        tasks[index].date = updatedDate || "";
        tasks[index].time = updatedTime || "";
        saveTasks();
        renderTasks();
      }
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskInfo);
    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  const date = taskDate.value;
  const time = taskTime.value;

  if (text !== "") {
    tasks.push({ text, date, time, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";
  }
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});

renderTasks();
