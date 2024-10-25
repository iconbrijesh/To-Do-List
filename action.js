const addbtn =document.querySelector("#add-btn");
const taskContainer = document.querySelector("#task-container");
const inputBox = document.querySelector("#input-box");

addbtn.addEventListner("click", ()=>{
    addTask();
    
});

const addTask = ()=>{
    if(inputBox.value === ''){
        alert("Please write task to add it");
    }
};