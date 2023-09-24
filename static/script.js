const categoryList = document.getElementById("categoryList");
const descriptionInput = document.getElementById("description-input");
const date = document.getElementById("date");

let toggleList = true;
let category = "";

// handling add event for task
async function addTask() {
    const task = {
        description: descriptionInput.value,
        category,
        date: new Date(date.value),
    }
    await axios.post("http://localhost:8081/create", task);
    descriptionInput.value = "";
    date.value = null;
    category = "";
    window.location.reload();
}

//handled delete event for task
async function deleteTasks() {
    const taskIds = [];

    const inputCheckbox = document.getElementsByClassName("checkTask");

    for (const item of inputCheckbox) {
        if (item.checked) {
            taskIds.push(item.id);
        }
    }
    await axios.post("http://localhost:8081/delete", taskIds);
    window.location.reload();
}

// used single listener to handle click event
document.addEventListener("click", (event) => {
    if (event.target.id == "drop-down" || event.target.parentNode.id == "drop-down" || event.target.parentNode.parentNode.id == "drop-down") {
        if (toggleList) {
            categoryList.classList.remove("visible-none");
            toggleList = false;
        } else {
            categoryList.classList.add("visible-none");
            toggleList = true;
        }
    } else if (event.target.id == "add-task") {
        addTask();
    } else if (event.target.classList.contains("category-item")) {
        category = event.target.innerText;
        categoryList.classList.add("visible-none");
        toggleList = true;
    } else if (event.target.id == "delete-task") {
        deleteTasks();
    } else {
        categoryList.classList.add("visible-none");
        toggleList = true;
    }
});

// to handle check event for checkbox change 
document.addEventListener("DOMContentLoaded", function () {
    const inputCheckbox = document.getElementsByClassName("checkTask");

    for (const checkbox of inputCheckbox) {
        checkbox.addEventListener('change', function () {
            const nextDiv = this.nextElementSibling;
            if (nextDiv && checkbox.checked) {
                nextDiv.classList.add("line-through");
            } else {
                nextDiv.classList.remove("line-through");
            }
        });
    }
})