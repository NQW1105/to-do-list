import './style.css';
import { openProjectForm, createProject } from './project';
import { openTaskForm, closeTaskForm, createTask, formValue, updateTaskNum, updateTaskDB } from './task';

// https://www.youtube.com/watch?v=8ZKq0r-g87M

// todo-items must have following properties: title, description, duedate, priority
// Event for create task
// Event for edit task
// Event for delete task
// Event to select inbox or project tabs
// Projects should have their own todo list 

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
  // console.log(e);

  e.preventDefault();
  createTask(taskList, formValue(e));
  updateTaskNum();
  updateTaskDB(formValue(e));
  taskForm.reset();
  closeTaskForm(mainBody, taskForm);
})

// When no tasks or projects on localStorage, make sure no crash
// storage.js... Update storage content here
const projectObj = JSON.parse(localStorage.projects);
const projectList = document.querySelector('#project-list');

Object.keys(projectObj).forEach(key => {
  projectList.appendChild(createProject(projectObj[key]));
})

const taskObj = JSON.parse(localStorage.tasks);
Object.keys(taskObj).forEach(key => {
  createTask(taskList, taskObj[key]);
})

// Method to display all task (inbox) on page
function displayInboxTask() {
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  const allTask = JSON.parse(localStorage.getItem('tasks'));
  Object.keys(allTask).forEach((key) => {
    createTask(taskList, allTask[key]);
  });  
};

// Add this event to Inbox
const inbox = document.querySelector('#inbox');
inbox.addEventListener('click', () => {
  // console.log();
  displayInboxTask();
});

// Method to display project task on page
function displayProjectTask(event) {
  const selectedProject = event.target.textContent;
  const heading = document.querySelector('#right-body > h2');
  heading.textContent = selectedProject;
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  const storedObj = JSON.parse(localStorage.getItem('tasks'));
  Object.keys(storedObj).forEach((key) => {
    if (storedObj[key].project === selectedProject) {
      createTask(taskList, storedObj[key])
    }
  })
};


export { displayProjectTask };