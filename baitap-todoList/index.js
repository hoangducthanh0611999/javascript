window.onload = function() {
    var list = document.querySelector('ul');

    var todos;

    function toLocal() {
        todos = list.innerHTML;
        localStorage.setItem('todos', todos)
    }

    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle('checked');
        } else if (ev.target.tagName === "SPAN") {
            var div = ev.target.parentNode;
            div.remove();
            toLocal();
        }
    }, false);
    var inp = document.getElementById('toDoEl');
    inp.addEventListener('keyup', function(ev) {
        if (ev.keyCode == 13) {
            document.getElementById('addBtn').click();
        }
    })
    document.getElementById("addBtn").addEventListener("click", newElement, false);

    function newElement() {
        var li = document.createElement('li');
        var inputValue = document.getElementById('toDoEl').value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue == "") {
            alert("Can nhap thong tin");
        } else {
            document.getElementById('list').appendChild(li);
        }
        document.getElementById('toDoEl').value = "";
        var span = document.createElement('SPAN');
        var txt = document.createTextNode("X");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        toLocal();
    }
    if (localStorage.getItem('todos')) {
        list.innerHTML = localStorage.getItem('todos');
    }
}