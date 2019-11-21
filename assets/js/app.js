var deleteButton = $('.delete');
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

$('ul').on('click', '.delete', function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    if ($("input[type='text']").val().length > 0){
      $('ul').append('<li><span class="delete"><i class="fas fa-trash-alt"></i></span> ' + $(this).val() + '</li>');
      $(this).val('');
    }
  }
});

$('.input-accordion').click(function(){
  $("input[type='text']").fadeToggle();
});
