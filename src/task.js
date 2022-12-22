function openTaskForm(toBlur, form) {
  toBlur.setAttribute('class', 'blur');
  form.classList.remove('hidden');
  taskFormProjectList();
  return;
}

function closeTaskForm(unBlur, form) {
  unBlur.classList.remove('blur');
  form.setAttribute('class', 'hidden');
  return;
}

function taskFormProjectList() {
  // const taskForm = document.querySelector('#taskForm');
  const dropDown = document.querySelector('#project');
  const currentProject = JSON.parse(localStorage.getItem('projects'));
  const DOMProjects = document.querySelectorAll('#project > option');
  
  let domArray = [];
  Array.from(DOMProjects).forEach((item) => {
    domArray.push(item.value);
  });

  // const dropDown = document.querySelector('#project');
  let storageArray = [];
  Object.keys(currentProject).forEach((key) => {
    storageArray.push(currentProject[key]);
    if (!domArray.includes(currentProject[key])) {
      let option = document.createElement('option');
      option.textContent = currentProject[key];
      option.setAttribute('value', currentProject[key]);
      dropDown.appendChild(option);
    };
  });

  // const document.querySelectorAll('#project > option');
  domArray.forEach((item) => {
    if (!storageArray.includes(item)) {
      let elementWithItem;
      // Method to find element to remove...
      for (let i = 0; i < DOMProjects.length; i++) {
        // const element = array[i];
        if (DOMProjects[i].value === item) {
          elementWithItem = DOMProjects[i];
        }
      }
      dropDown.removeChild(elementWithItem);
    }
  });

  // Avoid creating project list when there's no project
  // if (localStorage.projects == null) {
  //   return;
  // }
}

// Refactor this code to find index based on value then use the key to operate function
function formValue(receivedForm) {
  // console.log(receivedForm);
  const newTitle = receivedForm.target[0].value;
  const newText = receivedForm.target[1].value;
  const newDate = receivedForm.target[2].value;
  const newPriority = receivedForm.target[3].value;
  const newProject = receivedForm.target[4].value;

  return {
    title: newTitle,
    text: newText,
    dueDate: newDate,
    priority: newPriority,
    project: newProject
  };
}

function updatedFormValue(receivedForm) {
  // console.log(receivedForm);
  const newTitle = receivedForm.target[0].value;
  const newText = receivedForm.target[2].value;
  const newDate = receivedForm.target[3].value;
  const newPriority = receivedForm.target[1].value;
  const newProject = receivedForm.target[6].value;


  return {
    title: newTitle,
    text: newText,
    dueDate: newDate,
    priority: newPriority,
    project: newProject
  };
}

function valueBeforeEdit(clickedElement) {
  const taskDiv = clickedElement.closest('.task');
  const title = taskDiv.querySelector('.task-name > h4').textContent;
  const text = taskDiv.querySelector('p').textContent;
  const priority = taskDiv.querySelector('.task-name > h5').textContent;
  const date = taskDiv.querySelector('span:last-of-type').textContent;
  // console.log(clickedElement);
  const project = taskDiv.querySelector('input[type="hidden"]').value;

  return {
    title,
    text,
    priority,
    date, 
    project
  };
}

function closeUpdateForm(formToClose) {
  formToClose.parentElement.removeChild(formToClose);
  return;
}

function createTask(taskList, receivedFormValue) {
  const taskTitleInput = receivedFormValue.title;
  const taskDescriptionInput = receivedFormValue.text;
  const taskDueDateInput = receivedFormValue.dueDate;
  const taskPriorityInput = receivedFormValue.priority;
  const taskProjectInput = receivedFormValue.project;

  const parentDiv = document.createElement('div');
  parentDiv.setAttribute('class', 'task');

  let radioBtn = document.createElement('span');
  radioBtn.setAttribute('class', 'radio-btn');

  let taskDescription = document.createElement('p');
  taskDescription.textContent = taskDescriptionInput;

  let mainTaskDiv = document.createElement('div');
  let miniTaskDiv = document.createElement('div');
  miniTaskDiv.setAttribute('class', 'task-name');

  let taskTitle = document.createElement('h4');
  taskTitle.textContent = taskTitleInput;

  let taskPriority = document.createElement('h5');
  taskPriority.textContent = taskPriorityInput;

  let dueDate = document.createElement('span');
  dueDate.textContent = taskDueDateInput;

  const edit = document.createElement('button');
  edit.textContent = 'Edit';
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✖';

  const taskProject = document.createElement('input');
  taskProject.setAttribute('type', 'hidden');
  taskProject.setAttribute('value', taskProjectInput);


  miniTaskDiv.append(taskTitle,taskPriority);
  mainTaskDiv.append(miniTaskDiv, taskDescription);
  parentDiv.append(radioBtn, mainTaskDiv, dueDate, edit, closeBtn, taskProject);
  taskList.appendChild(parentDiv);

  closeBtn.addEventListener('click', (e) => {
    const task2Remove = e.target.parentElement;
    taskList.removeChild(task2Remove);
    removeTaskDB(e);
  });

  radioBtn.addEventListener('click', () => {
    if (parentDiv.classList.contains('cross-text')) {
      parentDiv.classList.remove('cross-text');
      radioBtn.classList.remove('checked');
    } else {
      parentDiv.classList.add('cross-text');
      radioBtn.classList.add('checked');
    }
  })

  // Edit form event
  const canEditForm = [taskTitle, taskDescription, taskPriority, dueDate];
  canEditForm.forEach(item => {
    item.addEventListener('dblclick', (e) => {      
      editTask(parentDiv.parentElement, parentDiv, valueBeforeEdit(e.target));
    })
  });

  edit.addEventListener('click', (e) => {      
    editTask(parentDiv.parentElement, parentDiv, valueBeforeEdit(e.target));
  })
}

function projectListEditForm(newProjectSelectElement, selectedProject) {
  const availbleProject = JSON.parse(localStorage.getItem('projects'));
  Object.keys(availbleProject).forEach((key) => {
    const newOption = document.createElement('option');
    newOption.textContent = availbleProject[key];
    newProjectSelectElement.appendChild(newOption);
  });

  // document.querySelectorAll('.edit-task > select:nth-last-child(1) > option');

  const optionDOM = newProjectSelectElement.querySelectorAll('option');
  // console.log(optionDOM);
  optionDOM.forEach((option) => {
    // console.log(option.innerText);
    // console.log(selectedProject);
    if (option.innerText === selectedProject) {
      option.setAttribute('selected', true);
    }
  }); 
}

function editTask(parentNode, elementToReplace, currentValue) {
  // DOM to create 'edit' form
  const newForm = document.createElement('form');
  newForm.setAttribute('class', 'edit-task');
  newForm.setAttribute('action', 'example.com/');
  newForm.setAttribute('method', 'post');
  const radioBtn = document.createElement('span');
  radioBtn.setAttribute('class', 'radio-btn');
  const newTaskTitle = document.createElement('input');
  newTaskTitle.setAttribute('type', 'text');
  newTaskTitle.setAttribute('id', 'taskTitle');
  newTaskTitle.setAttribute('value', currentValue.title);
  const newPriority = document.createElement('select');
  newPriority.setAttribute('id', 'priority');
  const lowPrio = document.createElement('option');
  lowPrio.textContent = 'Low-Priority';
  const medPrio = document.createElement('option');
  medPrio.textContent = 'Med-Priority';
  const highPrio = document.createElement('option');
  highPrio.textContent = 'High-Priority';
  switch (currentValue.priority) {
    case lowPrio.textContent:
      lowPrio.setAttribute('selected', true);
      break;
    case medPrio.textContent:
      medPrio.setAttribute('selected', true);
      break;
    case highPrio.textContent:
      highPrio.setAttribute('selected', true);
      break;
  }
  const newText = document.createElement('textarea');
  newText.setAttribute('id', 'taskDescription');
  newText.textContent = currentValue.text;
  const newDate = document.createElement('input');
  newDate.setAttribute('placeholder', 'YYYY/MM/DD');
  newDate.setAttribute('pattern', '([12]\\d{3}/(0[1-9]|1[0-2])/(0[1-9]|[12]\\d|3[01]))');
  newDate.setAttribute('id', 'dueDate');
  newDate.setAttribute('value', currentValue.date);

  const confirmBtn = document.createElement('button');
  confirmBtn.setAttribute('value', '✔');
  confirmBtn.setAttribute('type', 'submit');
  confirmBtn.textContent = '✔';
  const cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('value', '✖');
  cancelBtn.textContent = '✖';

  const newProject = document.createElement('select');
  projectListEditForm(newProject, currentValue.project);
  newProject.setAttribute('id', 'project');

  newPriority.append(lowPrio, medPrio, highPrio);
  newForm.append(radioBtn, newTaskTitle, newPriority, newText, newDate, confirmBtn, cancelBtn, newProject);

  newForm.addEventListener('submit', (e) => {
    // console.log(e);
    e.preventDefault();
    editTaskDB(e, currentValue);
    const updatedValue = updatedFormValue(e);
    createTask(e.target.parentElement, updatedValue);
    closeUpdateForm(e.target);
  });

  cancelBtn.addEventListener('click', () => {});

  return parentNode.replaceChild(newForm, elementToReplace);
}

function updateTaskNum() {
  if (localStorage.getItem('taskNum') == null) {
    localStorage.setItem('taskNum', '1');
  } else {
    let taskNum = parseInt(localStorage.getItem('taskNum'));
    taskNum += 1;
    localStorage.setItem('taskNum', taskNum);
  }
} 

function updateTaskDB(newTask) {
  let taskNum = localStorage.getItem('taskNum');
  let currentTaskList = JSON.parse(localStorage.getItem('tasks'));
  if (currentTaskList == null) { 
    let taskObj = {};
    taskObj[taskNum] = newTask;
    localStorage.setItem('tasks', JSON.stringify(taskObj));
  } else {
    currentTaskList[taskNum] = newTask;
    localStorage.setItem('tasks', JSON.stringify(currentTaskList));
  }
}

function removeTaskDB(event) {
  // console.log(event);
  const task2Remove = event.target.parentElement.querySelector('.task-name > h4').textContent;
  let currentTaskList = JSON.parse(localStorage.getItem('tasks'));
  const objIndex2Remove = Object.keys(currentTaskList).find(key => currentTaskList[key].title === task2Remove);
  // console.log(objIndex2Remove);
  delete(currentTaskList[objIndex2Remove]);
  localStorage.setItem('tasks', JSON.stringify(currentTaskList));
}

function editTaskDB(event, valueBeforeEdit) {
  // console.log(event);
  const newTitle = event.target.querySelector('#taskTitle').value;
  const newText = event.target.querySelector('#taskDescription').value;
  const newDate = event.target.querySelector('#dueDate').value;
  const newPriority = event.target.querySelector('#priority').value;
  const newProject = event.target.querySelector('#project').value;
  let currentTaskList = JSON.parse(localStorage.getItem('tasks'));
  const objIndex2Remove = Object.keys(currentTaskList).find(key => currentTaskList[key].title === valueBeforeEdit.title);

  currentTaskList[objIndex2Remove].title = newTitle;
  currentTaskList[objIndex2Remove].text = newText;
  currentTaskList[objIndex2Remove].dueDate = newDate;
  currentTaskList[objIndex2Remove].priority = newPriority;
  currentTaskList[objIndex2Remove].project = newProject;

  localStorage.setItem('tasks', JSON.stringify(currentTaskList));
}


export { openTaskForm, closeTaskForm, createTask, formValue, updateTaskNum, updateTaskDB };

// Compulsory (In terms of priority)
// Click inbox - List all task
// Click specific project - Only list related task

// Optional
// Make task title & description width expand/responsive
// Priority having green, orange, red option
// Include 'Today' & 'Next 7 Days' to be interactive

// Bugs to fix
// Only 1 of '+ Project' can be active at a time (No multiple form input allowed)
// Completed task should remained checked after done edit
// Order of task should remained upon editing
// Prevent web crashing when theres no localStorage
// 