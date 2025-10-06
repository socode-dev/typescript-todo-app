const input = document.getElementById("input-task");
const form = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const createElement = (value) => {
    if (!value)
        return;
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    const taskContent = document.createElement("li");
    taskContent.classList.add("task-content");
    taskContent.textContent = value;
    taskItem.appendChild(taskContent);
    const edit = document.createElement("ion-icon");
    edit.setAttribute("name", "create-outline");
    edit.classList.add("edit");
    taskItem.appendChild(edit);
    const deleteTask = document.createElement("ion-icon");
    deleteTask.setAttribute("name", "trash-outline");
    deleteTask.classList.add("delete");
    taskItem.appendChild(deleteTask);
    taskContainer.appendChild(taskItem);
    return;
};
const addTask = (e) => {
    e.preventDefault();
    const inputValue = input.value?.trim();
    createElement(inputValue);
    input.value = "";
    return;
};
form.addEventListener("submit", addTask);
const editTask = (target) => {
    if (!target)
        return;
    const listContainer = target.closest("div");
    if (!listContainer)
        return;
    const listItem = listContainer.firstChild;
    const taskValue = listItem?.textContent;
    if (!taskValue)
        return;
    const newTaskName = prompt("Rename your task:", taskValue);
    if (!newTaskName?.trim())
        return;
    const newValue = newTaskName.trim();
    listItem.textContent = newValue;
    return;
};
taskContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("task-content")) {
        target.classList.toggle("checked");
    }
    if (target.classList.contains("edit")) {
        editTask(target);
    }
    if (target.classList.contains("delete")) {
        const listContainer = target.closest("div");
        if (!listContainer)
            return;
        listContainer.remove();
        return;
    }
});
export {};
//# sourceMappingURL=main.js.map