let body = $('body').attr({ id : 'body' })

let taskContainer = $('<div>').attr ({ id : 'divContainer', class : 'listContainer'}).appendTo($(body))

$(taskContainer).html(`<h3>Pending Tasks</h3>`)

let completedContainer = $('<div>').attr ({ id : 'completedContainer', class : 'completedClass'}).appendTo($(body))

let completedDiv = $('<div>').attr ({ id : 'completedDiv'}).appendTo($(completedContainer))

$(completedDiv).html(`<h3>Completed Tasks</h3>`)

let userInput = $('<input/>').attr ({ type : 'text', id : 'userInput', class : 'inputTask'}).appendTo($(divContainer))


let submitTask = $('<button>Add Task</button>').attr({ id: 'taskSubmitted', class : 'taskButton'}).click(function(){
  console.log('Submit task button fired')


  let checkBox = $('<input/>').attr({ type : 'checkbox', id : 'checkBox', class : 'checked'}).click(function(){
    if($(checkBox).is(':checked')){
      $(checkBox).attr('checked', true);
      console.log('checkkbox checked')
      Transfer()
    }
  })



  let deleteTask = $('<button>Delete</button>').attr({id : 'deleteTask', class : 'deleted'})
    function Transfer() {
        ($(deleteTask).click(function(){
      console.log('Delete button is clicked!')
      $(liListings).appendTo($(completedDiv))
      $(checkBox).prop('checked', false);
    })
  )}



  let liListings = $('<li>').attr ({ id : 'liListings', class : 'liClass' })
  $(liListings).append($(checkBox)).append(`${userInput.val()}`).append($(deleteTask))
  $(listDiv).append($(liListings))
  userInput.val('')


}).appendTo($(taskContainer))

let listDiv = $('<div>').attr ({ id : 'listDiv', class : 'olClass' }).appendTo($(taskContainer))




// if($(deleteTask).data('clicked'))
//
// if ( $('input[name="subscribe"]').is(':checked') ) {
//     $('input[name="email"]').show();
// }

