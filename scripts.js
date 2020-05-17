//Initialize International Phone
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // any initialisation options go here
});


document.querySelector('#submit').addEventListener('click',function(){
    
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let date = document.querySelector('#date').value;
    let message = document.querySelector('#message').value;

    let url = "https://api.whatsapp.com/send?phone=573217749066&text=*_Barberia Lider_*%0A*Reservas*%0A%0A*¿Cual es tu nombre?*%0A" + cliente + "%0A*Indica la fecha de tu reserva*%0A" + fecha + "%0A*Indica la hora de tu reserva*%0A" + hora + "%0A*Barbero de preferencia*%0A" + barbero + "%0A*¿Cual es el servicio que se desea realizar?*%0A" + servicio;
    window.open(url);

});
