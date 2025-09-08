const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id ==='b1'){
            body.style.backgroundColor = 'orange';
        }
        if(e.target.id ==='b2'){
            body.style.backgroundColor = 'rgb(251, 73, 73)';
        }
        if(e.target.id ==='b3'){
            body.style.backgroundColor = 'purple';
        }
        if(e.target.id ==='b4'){
            body.style.backgroundColor = 'rgb(22, 184, 22)';
        }
    });
});  
