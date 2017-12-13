let body = $('body').attr({ id : 'body' })

let taskContainer = $('<div>').attr ({ id : 'divContainer', class : 'listContainer'}).appendTo($(body))

$(taskContainer).html(`<h3>Pending Tasks</h3>`)

let completedContainer = $('<div>').attr ({ id : 'completedContainer', class : 'completedClass'}).appendTo($(body))

$(completedContainer).append(`<h3>Completed Tasks</h3>`)

let completedDiv = $('<div>').attr ({ id : 'completedDiv'}).appendTo($(completedContainer))

let userInput = $('<input/>').attr ({ type : 'text', id : 'userInput', class : 'inputTask'}).appendTo($(divContainer))

let checkBox = $('<input/>').attr({ type : 'checkbox', id : 'checkBox', class : 'checkBoxClass'})


let submitTask = $('<button>Add Task</button>').attr({ id: 'taskSubmitted', class : 'taskButton'}).click(function(){
  console.log('Submit task button fired')


  let checkBox = $('<input/>').attr({ type : 'checkbox', id : 'checkBox', class : 'checkBoxClass'})

  let deleteTask = $('<button>Delete</button>').attr({id : 'deleteTask', class : 'deleteButton'})

  let liListings = $('<li>').attr ({ id : 'liListings', class : 'liClass' })
  $(liListings).html($(checkBox)).append(`${userInput.val()}`).append($(deleteTask))
  $(listDiv).append($(liListings))
  userInput.val('')


  $(deleteTask).click(function(){
    $(checkBox).each(function() {
      if ($(this).is(':checked')) {
        $(this).parent().appendTo($(completedDiv))
        $(checkBox).prop('checked', false);
        $(checkBox).click(function(){
          if($(checkBox).is(':checked')) {
            console.log('checked')
            $(listDiv).append($(liListings))

          }
        })
      }
    })
  })


}).appendTo($(taskContainer))

let listDiv = $('<div>').attr ({ id : 'listDiv', class : 'olClass' }).appendTo($(taskContainer))

