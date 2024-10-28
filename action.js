const addbtn =document.querySelector("#add-btn");
const taskContainer = document.querySelector("#task-container");
const inputBox = document.querySelector("#input-box");

addbtn.addEventListener("click", ()=>{
    addTask();
    
});

const addTask = ()=>{
    if(inputBox.value===''){
        alert("Please write task to add it");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);

        let delTask = document.createElement("span");
        delTask.innerHTML = "\u00d7";
        li.appendChild(delTask);

    }   
    inputBox.value='';
    saveData();


};

taskContainer.addEventListener("click", (e)=>{
   if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
   }
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
   }

},false);

const saveData = ()=>{

    localStorage.setItem("tasks", taskContainer.innerHTML);
}

const showTask = ()=>{
    taskContainer.innerHTML = localStorage.getItem("tasks");
}
showTask();