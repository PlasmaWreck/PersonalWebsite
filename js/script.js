let inputText = document.getElementById("inputText");
let taskList = document.getElementById("taskList");
let displayName = document.getElementById("displayName");


let taskArray = [];

let amountOfTasks = taskArray.length;

inputText.addEventListener("keypress", function (e) {

    if (e.code == "Enter") {

        taskArray[amountOfTasks] = inputText.value;
        localStorage.setItem("Tasks", JSON.stringify(taskArray));

        createTask(amountOfTasks);
        
        inputText.value = "";
    }
});





function createTask(arrayLocation) {

    let liElement = document.createElement("li");
    let closeIMG = document.createElement("img");
    let taskText = document.createElement("p");
    let container = document.createElement("div");
    let row = document.createElement("div");
    let colText = document.createElement("div");
    let colIMG = document.createElement("div");

    colIMG.setAttribute("class", "col-2 d-flex justify-content-center align-items-center");
    colText.setAttribute("class", "col-10");
    row.setAttribute("class", "row");

    container.setAttribute("class", "container-fluid");
    closeIMG.setAttribute("src", "./images/CloseX.png");
    closeIMG.setAttribute("class", "closeIMGSize");


    liElement.setAttribute("id", "taskElement" + arrayLocation);
    taskText.setAttribute("id", "taskText" + arrayLocation);

    taskText.innerText = taskArray[arrayLocation];
    
    colIMG.addEventListener("click", function(){

        removeTask(arrayLocation);
        
    });



    

    colText.appendChild(taskText);
    colIMG.appendChild(closeIMG);
    row.appendChild(colText);
    row.appendChild(colIMG);
    container.appendChild(row);
    liElement.appendChild(container);
    taskList.appendChild(liElement);

    amountOfTasks = taskArray.length;

    console.log(taskArray);
    console.log(amountOfTasks);
}

function removeTask(taskNum){

    for(i = 0; i < amountOfTasks; i++){

            

        if(taskArray[i] == document.getElementById("taskText" + taskNum).innerText || taskArray[i] === null){

            taskArray.splice(i, 1);
            console.log(taskArray);

        }

        localStorage.setItem("Tasks", JSON.stringify(taskArray));
        
    }
    
    amountOfTasks = taskArray.length;
    console.log(amountOfTasks);
    document.getElementById("taskElement" + taskNum).remove();

}



function createTaskList() {


    if (JSON.parse(localStorage.getItem("Tasks")) != null) {
        taskArray = JSON.parse(localStorage.getItem("Tasks"));
        amountOfTasks = taskArray.length;
    } else {
        localStorage.setItem("Tasks", JSON.stringify(taskArray));
        amountOfTasks = taskArray.length;
    }

    for (i = 0; i < taskArray.length; i++) {

        createTask(i);
    }

    

}



createTaskList();