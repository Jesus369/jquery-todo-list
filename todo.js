

let body = $('body')

// Creating a div to container our To-Do-App
let toDoContainer = $('<div>')
toDoContainer.addClass('listContainer')

let submitTask = $('<button>Submit</button>')
submitTask.attr('id','taskBtn')
submitTask.addClass('taskButton')

// Creating input for task
let taskInput = $('<input type="text">')
taskInput.addClass('inputTask')

// to do unordered list-
let listUL = $('<li>')
$(listUL).sortable();
listUL.attr('id','listUL')
listUL.addClass('listParent')

// listUL is first identified & on click for any button within listUL that is located near an 'li' element will be removed
$(listUL).on('click','button',function(){
    $(this).closest('li').slideToggle(500,function(){
      $(this).remove()
    })
});

let deleteTask = $('<button>Delete</button>')
deleteTask.addClass('deleteButton')

body.append(toDoContainer)
toDoContainer.append(taskInput)
toDoContainer.append(submitTask)
toDoContainer.append(listUL)

 $(submitTask).click(function() {

   // Creating tag "li"
   let listLI = $('<li>')
   listLI.addClass('listChild')
   listLI.attr('id','listingsID')

   $(listLI).html(`${taskInput.val()} <button class="deleteButton" id="delTaskBtn">Delete</button>`)
   $(listUL).append($(listLI))

   taskInput.val('');

 })
