/* if(jQuery){
  alert("gitarka!")
} else {
  alert("cosik się skiepściło!")
}; */

$(document).ready(larg);

$(window).resize(larg);

function larg() {
  let larghezza = $(document).width();
  $("p.width").text("The width for the " + larghezza + " is px.");
}
document.write("viewport width" + viewport().width);
