//Initialize International Phone
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // any initialisation options go here
});

let receptorNumber=prompt("Ingresa un número al cual quieres enviarle este mensaje a través de whatsapp Ej: 573122005891");

document.querySelector('#submit').addEventListener('click',function(){
    
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let date = document.querySelector('#date').value;
    let message = document.querySelector('#message').value;

    let url = "https://api.whatsapp.com/send?phone="+receptorNumber+"&text=*_Whatsapp Webform_*%0A%0A*Name:*%0A" + name + "%0A*E-Mail*%0A" + email + "%0A*Phone*%0A" + phone + "%0A*Message:*%0A" + message;
    window.open(url);

});
