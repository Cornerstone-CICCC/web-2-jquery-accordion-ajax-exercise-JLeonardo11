$(function() {
  // your code here
  $(function() {
    $('.accordion-header').click(function () {
        $('.accordion-content').slideUp();
        if (!$(this).next('.accordion-content').is(':visible')) {
            $(this).next('.accordion-content').slideDown();
        }
    });
  
    $('.todos button').click(function () {
        $.ajax({
            url: 'https://dummyjson.com/todos', 
            method: 'GET',
            success: function (response) {
                const todos = response.todos; 
                const $to_do_list = $('.todos ul');
  
                todos.forEach(todo => {
                    $to_do_list.append(`<li>${todo.todo}</li>`);
                });
            },
            error: function () {
                alert('Error loading To-Do items. Please try again.');
            }
        });
    });
  });
  
})