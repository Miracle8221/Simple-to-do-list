import { toggleEdit, createFontAwesomeIcon } from './iconsHandler.js';

export function addTaskToList(taskText) {
    const listElement = document.querySelector("#tasks");
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContent = document.createElement("div");
    taskContent.classList.add("content");

    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = taskText;
    taskInput.setAttribute("readonly", "readonly");

    taskContent.append(taskInput);

    const taskEditDelete = document.createElement("div");
    taskEditDelete.classList.add("editDelete");

    const taskEdit = createFontAwesomeIcon("fa-pencil", () => {
        toggleEdit(taskInput, taskEdit);
    });

    const taskDelete = createFontAwesomeIcon("fa-trash", () => {
        taskElement.remove();
    });

    taskEditDelete.append(taskEdit);
    taskEditDelete.append(taskDelete);

    taskElement.append(taskContent);
    taskElement.append(taskEditDelete);

    listElement.append(taskElement);
}