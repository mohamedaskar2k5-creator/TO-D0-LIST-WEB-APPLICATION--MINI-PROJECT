var list = document.getElementById("list");

window.onload = function () {
    var saved = localStorage.getItem("tasks");
    if (saved != null) {
        list.innerHTML = saved;
    }
};

function addTask() {
    var task = document.getElementById("task").value;

    if (task == "") {
        alert("Enter task");
        return;
    }

    var li = document.createElement("li");

    var cb = document.createElement("input");
    cb.type = "checkbox";

    cb.onclick = function () {
        if (cb.checked) {
            li.className = "done";
        } else {
            li.className = "";
        }
        save();
    };

    li.appendChild(cb);
    li.append(" " + task);

    list.appendChild(li);
    document.getElementById("task").value = "";

    save();
}

function save() {
    localStorage.setItem("tasks", list.innerHTML);
}
