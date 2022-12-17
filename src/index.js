import './style.css';
import { openProjectForm } from './project';
import { openTaskForm, closeTaskForm, createTask, formValue } from './task';

// https://www.youtube.com/watch?v=8ZKq0r-g87M

// todo-items must have following properties: title, description, duedate, priority
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


// index.js; Main interface to other js modules
const projectBtn = document.querySelector('#left-body > button');
projectBtn.addEventListener("click", () => {
  openProjectForm();
});


const mainBody = document.querySelector('#main-body');
const taskForm = document.querySelector('#taskForm');
const cancelBtn = document.querySelector('#taskForm > div > button[value="Cancel"]');
const taskList = document.querySelector('#task-list');

const taskBtn = document.querySelector('#right-body > button');
taskBtn.addEventListener("click", () => {
  openTaskForm(mainBody, taskForm);
});

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault();
  closeTaskForm(mainBody, taskForm);
})

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createTask(taskList, formValue(e));
  taskForm.reset();
  closeTaskForm(mainBody, taskForm);
})

