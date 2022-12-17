function openTaskForm(toBlur, form) {
  toBlur.setAttribute('class', 'blur');
  form.classList.remove('hidden');
  return;
}

function closeTaskForm(unBlur, form) {
  unBlur.classList.remove('blur');
  form.setAttribute('class', 'hidden');
  return;
}

// Refactor this code to find index based on value then use the key to operate function
function formValue(receivedForm) {
  const newTitle = receivedForm.target[0].value;
  const newText = receivedForm.target[1].value;
  const newDate = receivedForm.target[2].value;
  const newPriority = receivedForm.target[3].value;

  return {
    title: newTitle,
    text: newText,
    dueDate: newDate,
    priority: newPriority
  };
}

function updatedFormValue(receivedForm) {
  const newTitle = receivedForm.target[0].value;
  const newText = receivedForm.target[2].value;
  const newDate = receivedForm.target[3].value;
  const newPriority = receivedForm.target[1].value;

  return {
    title: newTitle,
    text: newText,
    dueDate: newDate,
    priority: newPriority
  };
}

function valueBeforeEdit(clickedElement) {
  const taskDiv = clickedElement.closest('.task');
  const title = taskDiv.querySelector('.task-name > h4').textContent;
  const text = taskDiv.querySelector('p').textContent;
  const priority = taskDiv.querySelector('.task-name > h5').textContent;
  const date = taskDiv.querySelector('span:last-of-type').textContent;

  return {
    title,
    text,
    priority,
    date
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

  miniTaskDiv.append(taskTitle,taskPriority);
  mainTaskDiv.append(miniTaskDiv, taskDescription);
  parentDiv.append(radioBtn, mainTaskDiv, dueDate, edit, closeBtn);
  taskList.appendChild(parentDiv);

  closeBtn.addEventListener('click', (e) => {
    const task2Remove = e.target.parentElement;
    taskList.removeChild(task2Remove);
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

  newPriority.append(lowPrio, medPrio, highPrio);
  newForm.append(radioBtn, newTaskTitle, newPriority, newText, newDate, confirmBtn, cancelBtn);

  newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const updatedValue = updatedFormValue(e);
    createTask(e.target.parentElement, updatedValue);
    closeUpdateForm(e.target);
  });

  cancelBtn.addEventListener('click', () => {});

  return parentNode.replaceChild(newForm, elementToReplace);
}

export { openTaskForm, closeTaskForm, createTask, formValue };


// Compulsory (In terms of priority)
// Make "inbox", "Projects" interactive... clicking them list all the related task out
// localStorage function to store todo list


// Optional
// Make task title & description width responsive
// Priority having green, orange, red option
// Only 1 of '+ Project' can be active at a time (No multiple form input allowed)
// Include 'Today' & 'Next 7 Days' to be interactive