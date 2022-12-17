function createProject(title) {
  const newProject = document.createElement("div");
  const projectTitle = document.createElement("p");
  let removeBtn = document.createElement("button");

  newProject.setAttribute('class', 'projects');
  projectTitle.textContent = title;
  removeBtn.textContent = "✖";
  
  removeBtn.addEventListener('click', (e) => {
    removeProject(e);
  })

  newProject.appendChild(projectTitle);
  newProject.appendChild(removeBtn);
  
  return newProject;
}

function removeProject(event) {
  const unwantedProject = event.target.parentElement;
  const projectContainer = unwantedProject.parentElement;
  
  return projectContainer.removeChild(unwantedProject);
}

function updateProjectDB(database, newProject) {
  return database.appendChild(newProject);
}

function openProjectForm(database) {
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
      // updateProjectDB(database, newProjectTitle);
    }
  })
  
  return nodeParent.appendChild(form);
}

export { openProjectForm }

// Future Work: Only allow 1 form to pop up