$(document).ready(()=>{
    $("tbody").ready(()=>{
        generatetodos();
    })
    
    $(document).on("change", "[type=checkbox]", function(){
        let id = $(this).attr('id');
        id = id.slice(4);
        if (this.checked) {
            $(`tr#row${id}`).addClass('completed-task text-light');
            let promise1 = addCheckbox(id);
            promise1
            .then((e)=>{
                alert(e[0]);
                console.log(e[1]);
            })
            .catch((e)=>console.log(e));
        }
        else {
            $(`tr#row${id}`).removeClass('completed-task text-light');
            
        }
    });

    });


function generatetodos() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var output = "";
            response.forEach(element => {
                if (element.completed == true) {
                    output += `<tr class='completed-task  textDecoration: line-through' id='row${element.id}'>`;
                    output += `<td><input type="checkbox" class="ml-3" id="task${element.id}" checked disabled></td>`;
                    output += `<td>${element.title}</td>`;
                } else {
                    output += `<tr id='row${element.id}'>`;
                    output += `<td><input type="checkbox" class="ml-3" id="task${element.id}"></td>`;
                    output += `<td>${element.title}</td>`;
                }
                output += "</tr>"
            });
            $('tbody').html(output);
        }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

let todoList = [];

function addCheckbox(box) {
    return new Promise((resolve, reject) => {
        todoList.push(box);
        if (todoList.length == 5) {
            resolve(['congradulations. you have succesfully completed 5 tasks.', `Task ${box} has completed`]);
        }
        else {
            reject(`Task ${box} has completed`);
        }
    });
}


