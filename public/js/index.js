
var menuAnchor = document.querySelectorAll('.menu-anchor'),
    wrapper    = document.querySelector('.wrapper');

for (var i = 0; i < menuAnchor.length; i++){
    menuAnchor[i].addEventListener('click', menuAction);
}


document.addEventListener('keyup', function(e){
    if(e.keyCode == 27) {
        if(wrapper.classList.contains('show-menu')){
            menuAction();
        }
    }
});


function menuAction() {
    if(wrapper.classList.contains('show-menu')){
        wrapper.classList.remove('show-menu');
    }
    else {
        wrapper.classList.add('show-menu');
    }
}