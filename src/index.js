import './style.css';

// https://www.youtube.com/watch?v=8ZKq0r-g87M

// todo-items must have following properties: title, description, duedate, priority
// Event for create new project
// Event for delete project
// Event for create task
// Event for edit task
// Event for delete task
// Event to select inbox or project tabs
// Projects should have their own todo list 

let allProject = [];
let allTask = [];

function Project(name) {
  this.name = name;
}

function Task(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;  
}

function createProject(title) {
  const newProject = document.createElement("div");
  const projectTitle = document.createElement("p");
  const removeBtn = document.createElement("button");

  newProject.setAttribute('class', 'projects');
  projectTitle.textContent = title;
  removeBtn = "✖";

  newProject.appendChild(projectTitle);
  newProject.appendChild(removeBtn);
}

const projectBtn = document.querySelector('#left-body > button');
projectBtn.addEventListener('click', projectForm());
