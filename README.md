# 📝 To-Do List App — HexSoftwares Task 1

A responsive and interactive web-based To-Do List application built with **HTML**, **CSS**, and **JavaScript**. This is **Task 1** for the HexSoftwares internship/project, focusing on core front-end skills, DOM manipulation, and browser storage.

---

## 📌 Features

- ✅ Add new tasks with a name, date, and time.
- ✏️ Edit existing tasks.
- ✔️ Mark tasks as complete/incomplete.
- ❌ Delete tasks.
- 🔁 Persistent task storage using **Local Storage**.
- 📱 Fully responsive design for mobile and desktop.

---

## 💡 How It Works

### 🧠 JavaScript Logic Breakdown

#### 1. Initialize the App
The application starts by checking if there are any previously saved tasks in **Local Storage**. The tasks are retrieved using `localStorage.getItem("tasks")` and parsed into a JavaScript array. If no tasks are found (i.e., the app is being used for the first time), an empty array is used. This ensures that the app can persist data across browser sessions.

#### 2. Add New Task
When the user enters a task name (which is required), along with an optional date and time, and clicks the "Add Task" button, a new task object is created with the provided information. This task object is added to the `tasks` array, and the updated list is saved back to **Local Storage** using `localStorage.setItem("tasks", JSON.stringify(tasks))`. After adding the task, the input fields are cleared to allow the user to enter new tasks.

#### 3. Render Tasks
The `renderTasks()` function is responsible for updating the display of tasks on the page. It loops through the `tasks` array and creates an HTML list item (`<li>`) for each task. Each task is displayed with its name, date, and time (if provided). If the task is marked as "completed", the task gets a strikethrough and reduced opacity for visual distinction. The function then appends the task list to the DOM, ensuring the UI reflects the current state of the `tasks` array.

#### 4. Complete a Task
When a task is clicked, it toggles between being marked as complete or incomplete. This is done by updating the `completed` property of the respective task in the `tasks` array. After the update, the tasks are saved to **Local Storage** again, and the task list is re-rendered to reflect the change. Completed tasks are visually marked with a strikethrough and reduced opacity, providing a clear distinction from active tasks.

#### 5. Edit a Task
To edit an existing task, the user clicks the **Edit** button associated with that task. A `prompt()` dialog is displayed to allow the user to modify the task’s name, date, and time. If the user enters new information, the task in the `tasks` array is updated accordingly. After the update, the tasks are saved back to **Local Storage**, and the UI is re-rendered to show the updated task.

#### 6. Delete a Task
If the user wants to remove a task, they can click the **Delete** button next to that task. The corresponding task is removed from the `tasks` array using `splice()`. After deletion, the updated `tasks` array is saved to **Local Storage**, and the UI is re-rendered to reflect the change.

#### 7. Enter Key Support
For a better user experience, pressing the **Enter** key while focused on the task input field also triggers the "Add Task" button, allowing the user to quickly add tasks without having to click the button. This provides a faster way to add multiple tasks without needing to use the mouse.

---

## 🎨 Styling (CSS Highlights)

- Clean and modern dark theme.
- Hover and focus effects for better UX.
- Responsive layout using Flexbox.
- Mobile-friendly design with media queries.

---

## 🚀 Getting Started

### 1. Clone the repository

Run the following command to clone the repository:

`git clone https://github.com/your-username/hexsoftwares-task-1.git`

### 2. Open the App

To open the app, simply open the `index.html` file in your browser. No installation is required.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Local Storage (Web API)

---

## 📸 Screenshots

*(Optional: Add screenshots here showing the app interface)*

---

## 📌 Notes

- This project is **fully front-end**, no backend/server involved.
- All data is stored in the browser via `localStorage`.

---

## 🏗 Project Structure

index.html        # Main HTML structure  
style.css         # Styling for layout and visuals  
script.js         # All interactive logic and functionality  

---

## 🙌 Acknowledgements

- Task 1 for **HexSoftwares** project series.
- Designed and coded with 💙 by Tshwarelo Lephoto.

