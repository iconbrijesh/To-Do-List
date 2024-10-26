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

    }   
    inputBox.value='';
};

