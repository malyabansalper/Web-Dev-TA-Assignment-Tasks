

$('#container ul').on('click', '.reorder-down', function (event) {

  var $current = $(this).closest('li')
  var $next = $current.next('li');
  if ($next.length !== 0) {
    $current.insertAfter($next);
  }
  return false;

  event.stopPropagation();  //to prevent event bubbling
})


// re-odering list elements up

$('#container ul').on('click', '.reorder-up', function (event) {
  var $current = $(this).closest('li')
  var $previous = $current.prev('li');
  if ($previous.length !== 0) {

    $current.insertBefore($previous);
  }
  return false;

  event.stopPropagation();  //to prevent event bubbling
})



// removing li items from our todo

$('#container ul').on('click', '#cross', function (event) {
  $(this).parent().fadeOut(function () {
    // console.log("FadeOut Completed");
    $(this).remove();
  });

  event.stopPropagation();  //to prevent event bubbling
})

// Adding new todo 

$("button").click(function () {
  let newTodoText = $('#newtask').val();
  $('#container ul').append(`<li><span id="cross">&#10005</span><span class="reorder-up">&#8593;</span><span class="reorder-down">&#8595;</span> ${newTodoText}</li>`);
  $('#iminput').val("");

});

// Adding new todo via keypress
$('input[type="text"]').keypress(function (event) {
  if (event.which === 13) {
    // console.log(event);
    let newTodoText = $(this).val();
    $('#container ul').append(`<li><span id="cross">&#10005</span><span class="reorder-up">&#8593;</span><span class="reorder-down">&#8595;</span> ${newTodoText}</li>`);
    $(this).val("");
  }
})



