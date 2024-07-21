// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

if(!taskList){
  taskList=[]
}
// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
var taskTitle = $("div").text(task.Title)
var taskDueDate = $("div").text(task.DueDate)
var taskDescription = $("div").text(task.Description)

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    var todoEl = $("#todo-cards")
    var inprogressEl = $("#in-progress-cards")
    var doneEl = $("#done-cards")
    console.log (taskList)
    if(taskList){
      for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].status === "to-do"){
         let todoCard = createTaskCard(taskList[i])
         todoEl.append[todoCard]
        } else if (taskList[i].status === "inprogress"){
         let inprogressCard = createTaskCard(taskList[i])
         inprogressEl.append[inprogressCard]
        } else if (taskList[i].status ==="done"){
         let doneCard = createTaskCard(taskList[i])
         doneEl.append[doneCard]
        }
    }

   
    
}
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
  event.preventDefault()
  let taskTitle=$('#taskTitle').val()
  let titleDescription=$('#titleDescription').val()

  let taskDetails={
    title: taskTitle,
    description: titleDescription,
    status: 'to-do'
  }
  taskList.push(taskDetails)

localStorage.setItem('tasks',JSON.stringify(taskList))
    

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    var deleteButton = $("button").text("Delete").addClass('btn btn-danger')
deleteButton.on('click',handleDeleteTask)

}

// Todo: create a function to handle dropping a task into a new status lane

function handleDrop(event, ui) {
   
    const projects = readProjectsFromStorage();
  
    
    const taskId = ui.draggable[0].dataset.projectId;
  
    
    const newStatus = event.target.id;
  
    for (let project of projects) 
      
      if (project.id === taskId) {
        project.status = newStatus;
      }
    }




// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

renderTaskList()
$('#taskdetailsform').on('submit',handleAddTask)
$('.lane').droppable({
  accept: '.draggable',
  drop: handleDrop,
});

});