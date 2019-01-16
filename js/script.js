window.addEventListener('DOMContentLoaded', function() {
'use strict';


let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

        more.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';

        });


        close.addEventListener('click', function(){
            overlay.classList.display = "none";
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });


let massage = {
        loading: ('Идет загрузка!'),
        success: ('Спасибо! Скоро мы с вами свяжемся!'),
        failure: ('Что-то пошло не так!')
    };

    let form = document.querySelector('main-form'),
        input = document.getElementsByName('input'),
        statusMassage = document.createElement('div');

        statusMassage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMassage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');

        let formdata = new FormData(form);
        request.send(FormData);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMassage.innerHTML = massage.loading;
            }
            else if(request.readyState === 4 && request.status == 200) {
                statusMassage.innerHTML = massage.success;
            } else {
                statusMassage.innerHTML = massage.failure;
            }
        });
    });

    for(let i = 0; i < input.length; i++) {
        input[i].value = '';
    }

});