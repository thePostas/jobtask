var navigationButtons = document.getElementsByClassName('menu__list-link');

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

var form = document.getElementsByClassName('requisites__card-form')[0];
var cvc = form.getElementsByClassName('requisites__card-form-side-cvc-input')[0];
var allFormInputs = form.getElementsByClassName('requisites__card-form-input');

function clearErrors() {
    for (var i = 0; i < allFormInputs.length; i++) {
        allFormInputs[i].style.borderColor = '#e4e9ee';
        allFormInputs[i].outlineColor = 'green';
    }
}

form.addEventListener('submit', function (event) {
    // event.preventDefault();
    clearErrors();
});

for (let i = 0; i < allFormInputs.length; i++) {
    allFormInputs[i].addEventListener('input', function () {
        if (!allFormInputs[i].checkValidity()) {
            allFormInputs[i].style.borderColor = 'red';
            allFormInputs[i].style.outlineColor = 'red';
        } else {
            allFormInputs[i].style.borderColor = 'green';
            allFormInputs[i].style.outlineColor = 'green';
        }
    })
}

