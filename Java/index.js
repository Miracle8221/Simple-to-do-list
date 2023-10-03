import { addTaskToList } from './taskManager.js';

// window.addEventListener("load", () => {
    document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#newTaskForm");
    
    // const listElement = document.querySelector("#tasks");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskinput = document.querySelector("#newTaskInput");
        const task = taskinput.value.trim();

        if (task !== "") {
            addTaskToList(task);
            taskinput.value = "";
        } else {
            alert("Please enter a task!!!");
        }
    });
           
});
    
    
    
    
    