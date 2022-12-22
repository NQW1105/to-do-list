import { displayProjectTask } from './index';

function createProject(title) {
  const newProject = document.createElement("div");
  const projectTitle = document.createElement("p");
  let removeBtn = document.createElement("button");

  newProject.setAttribute('class', 'projects');
  projectTitle.textContent = title;
  removeBtn.textContent = "✖";
  
  projectTitle.addEventListener('click', (e) => {
    // console.log(e);
    displayProjectTask(e);
  });

  removeBtn.addEventListener('click', (e) => {
    removeProject(e);
    removeProjectDB(e);
  });

  newProject.appendChild(projectTitle);
  newProject.appendChild(removeBtn);
  
  return newProject;
}

function removeProject(event) {
  // console.log(event);
  // const title = event.target.previousSibling.textContent;
  // const dropDown = document.querySelector('#project');
  // const unwantedDOM = dropDown.querySelector(`option[value=${title}]`); 
  // console.log(unwantedDOM);

  const unwantedProject = event.target.parentElement;
  const projectContainer = unwantedProject.parentElement;
  projectContainer.removeChild(unwantedProject);

  return;
}

function updateProjectNum() {
  if (localStorage.getItem('projNum') == null) {
    localStorage.setItem('projNum', '1');
  } else {
    let projectNum = parseInt(localStorage.getItem('projNum'));
    projectNum += 1;
    localStorage.setItem('projNum', projectNum);
  }
} 

function updateProjectDB(newProject) {
  let projectNum = localStorage.getItem('projNum');
  let currentProjectList = JSON.parse(localStorage.getItem('projects'));
  if (currentProjectList == null) { 
    let projectObj = {};
    projectObj[projectNum] = newProject;
    localStorage.setItem('projects', JSON.stringify(projectObj));
  } else {
    currentProjectList[projectNum] = newProject;
    localStorage.setItem('projects', JSON.stringify(currentProjectList));
  }
}

function removeProjectDB(event) {
  // console.log(event);
  const project2Remove = event.target.previousElementSibling.innerText;
  // console.log(project2Remove);
  let currentProjectList = JSON.parse(localStorage.getItem('projects'));
  // console.log(currentProjectList);
  const objIndex2Remove = Object.keys(currentProjectList).find(key => currentProjectList[key] === project2Remove);
  // console.log(test);
  delete(currentProjectList[objIndex2Remove]);
  // console.log(currentProjectList);
  localStorage.setItem('projects', JSON.stringify(currentProjectList));
}

function openProjectForm() {
  const form = document.createElement("form");
  const inputField = document.createElement("input");
  const closeBtn = document.createElement("button");
  const nodeParent = document.querySelector('#project-list');

  form.setAttribute('action', 'example.com/');
  form.setAttribute('method', 'post');
  form.setAttribute('onsubmit', 'event.preventDefault()');
  form.setAttribute('class', 'projects');
  inputField.setAttribute('type', 'text');
  inputField.setAttribute('placeholder', 'New Project...');
  
  closeBtn.textContent = "✖";
  form.appendChild(inputField);
  form.appendChild(closeBtn);

  closeBtn.addEventListener('click', (e) => {
    removeProject(e);
  })

  inputField.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const newProjectTitle = document.querySelector('input[placeholder="New Project..."]').value;
      const nodeParent = document.querySelector('#project-list');
      nodeParent.appendChild(createProject(newProjectTitle));
      updateProjectNum();
      updateProjectDB(newProjectTitle);
    }
  })
  
  return nodeParent.appendChild(form);
}

export { openProjectForm, createProject }

// Future Work: Only allow 1 form to pop up