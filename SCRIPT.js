document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const taskDateInput = document.getElementById('task-date');
    const addTaskBtn = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');
    const prioritySelect = document.getElementById('priority');
    const typeSelect = document.getElementById('type');

    addTaskBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        const taskDate = taskDateInput.value;
        const taskPriority = prioritySelect.value;
        const taskType = typeSelect.value;

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-priority', taskPriority);
            listItem.setAttribute('data-type', taskType);

            const taskContent = document.createElement('div');
            taskContent.className = 'task-content';

            const taskDetails = document.createElement('div');
            taskDetails.className = 'task-details';
            taskDetails.innerHTML = `<strong>Task:</strong> ${taskText}<br>
                                     <strong>Date:</strong> ${taskDate}<br>
                                     <strong>Priority:</strong> ${taskPriority}<br>
                                     <strong>Type:</strong> ${taskType}`;

            const actions = document.createElement('div');
            actions.className = 'actions';

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.className = 'complete-btn';
            completeBtn.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = 'edit-btn';
            editBtn.addEventListener('click', () => {
                const newTaskText = prompt('Edit your task:', taskText);
                const newTaskDate = prompt('Edit the date:', taskDate);
                if (newTaskText !== null && newTaskText.trim() !== '') {
                    taskDetails.innerHTML = `<strong>Task:</strong> ${newTaskText}<br>
                                             <strong>Date:</strong> ${newTaskDate}<br>
                                             <strong>Priority:</strong> ${taskPriority}<br>
                                             <strong>Type:</strong> ${taskType}`;
                }
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });

            actions.appendChild(completeBtn);
            actions.appendChild(editBtn);
            actions.appendChild(deleteBtn);
            taskContent.appendChild(taskDetails);
            taskContent.appendChild(actions);
            listItem.appendChild(taskContent);
            todoList.appendChild(listItem);

            newTaskInput.value = '';
            taskDateInput.value = '';
            prioritySelect.value = 'low'; // Reset priority to default after adding task
            typeSelect.value = 'work'; // Reset type to default after adding task
        }
    }
});
