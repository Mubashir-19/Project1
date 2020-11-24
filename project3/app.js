ul = document.getElementById("ul");

$(document).ready(function () {

    $("ul").on('click', 'li', function() {
        $(this).toggleClass("completed");
    })

    $("ul").on('click', 'span',function(event){
        $(this).parent().fadeOut(500, function() {
            $(this).remove;
        });
        event.stopPropagation();
    });
    
});

let input = document.getElementById("input");
input.addEventListener('keypress', function(e){
    let charcode = e.charCode;
    if(charcode == 13) {

        let li = document.createElement("li");
        
        li.innerHTML = '<span><i class="fa fa-trash"> </i></span> '+ this.value;
        ul.append(li);
        console.log(li);
        this.value = '';

    }
})

$("#toggle").click(function(){
    $("input[type='text'").fadeToggle();
});