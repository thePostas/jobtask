navigationButtons = document.getElementsByClassName('menu__list-link');

for (var i = 0; i < navigationButtons.length; i++) ((i)=>{
    navigationButtons[i].addEventListener('click', function () {
        clear();
        if (i < navigationButtons.length-1) {
            navigationButtons[i].classList.add('menu__list-link_active');
            navigationButtons[i].style.backgroundColor = '#2a2d37';
        }
        if(i > 0 && i < navigationButtons.length-1) {
            navigationButtons[i - 1].style.backgroundColor = "#1f2229";
        }
        if (i < navigationButtons.length-1) {
            navigationButtons[i + 1].style.backgroundColor = "#1f2229";
        }
    })
})(i);

function clear() {
    for (var i = 0; i < navigationButtons.length; i++) {
        navigationButtons[i].classList.remove('menu__list-link_active');
        navigationButtons[i].style.backgroundColor = '#191c24';
    }
}