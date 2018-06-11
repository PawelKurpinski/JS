/* $('li').on("click", function () {

    if ($(this).css("color") === 'rgb(128, 128, 128)') {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
});   ATTENTION! INSTEAD OF THIS WE CAN USE CSS CLASS!! */ 
/* $('li').on("click", function () { */
    /* ATTENTION! we have to add the listener to existing elements not the future ones so we have this: $('ul').on("click", "li", ... */

$('ul').on("click", "li", function () {
        $(this).toggleClass('completed');
});

/* $('span').on("click", function (event){ */

$('ul').on("click", 'span', function (event){
     $(this).parent().fadeOut(1000, function() {
        $(this).remove();
     });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        let toDoText = ($(this).val());
        $(this).val(''); /* this is an empty string - we need it to clear the input after writing down new ToDos */
        $('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${toDoText}</li>`);
    }
});