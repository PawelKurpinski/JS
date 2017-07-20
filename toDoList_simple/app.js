var lis = document.querySelectorAll("li");

for (var i = 0; i <lis.length; i++) {
lis[i].addEventListener("mouseover", function(){
    this.classList.toggle("over");
    });
lis[i].addEventListener("mouseout", function(){
    this.classList.toggle("out");
    });
lis[i].addEventListener("click", function(){
    this.classList.toggle("done");
    });
};
