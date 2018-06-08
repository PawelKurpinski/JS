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


$('li').on("click", function () {
        $(this).toggleClass('completed');
});

$('span').on("click", function (event){
     $(this).parent().fadeOut(1500, ()=> {
        $(this).parent().remove();
     });
    event.stopPropagation();
});