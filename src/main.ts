const input = document.getElementById("input-task") as HTMLInputElement;
const form = document.getElementById("add-task") as HTMLFormElement;
const taskContainer = document.getElementById("task-container")!;

const createElement = (value: string): void => {
  if (!value) return;

  const taskItem: HTMLDivElement = document.createElement("div");
  taskItem.classList.add("task-item");

  const taskContent: HTMLLIElement = document.createElement("li");
  taskContent.classList.add("task-content");
  taskContent.textContent! = value;
  taskItem.appendChild(taskContent);

  const edit: HTMLElement = document.createElement("ion-icon");
  edit.setAttribute("name", "create-outline");
  edit.classList.add("edit");
  taskItem.appendChild(edit);

  const deleteTask: HTMLElement = document.createElement("ion-icon");
  deleteTask.setAttribute("name", "trash-outline");
  deleteTask.classList.add("delete");
  taskItem.appendChild(deleteTask);

  taskContainer.appendChild(taskItem);

  return;
};

const addTask = (e: SubmitEvent): void => {
  e.preventDefault();

  const inputValue = input.value?.trim();

  createElement(inputValue);

  input.value = "";
  return;
};

form.addEventListener<"submit">("submit", addTask);

const editTask = (target: HTMLElement): void => {
  if (!target) return;

  const listContainer = target.closest("div")!;

  if (!listContainer) return;

  const listItem = listContainer.firstChild as HTMLLIElement;

  const taskValue: string = listItem?.textContent;

  if (!taskValue) return;

  const newTaskName: string | null = prompt("Rename your task:", taskValue);

  if (!newTaskName?.trim()) return;

  const newValue: string = newTaskName.trim();
  listItem.textContent = newValue;

  return;
};

taskContainer.addEventListener<"click">("click", (e: PointerEvent) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains("task-content")) {
    target.classList.toggle("checked");
  }

  if (target.classList.contains("edit")) {
    editTask(target);
  }

  if (target.classList.contains("delete")) {
    const listContainer = target.closest("div")!;
    if (!listContainer) return;
    listContainer.remove();

    return;
  }
});
