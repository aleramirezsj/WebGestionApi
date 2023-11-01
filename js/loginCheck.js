const elementosConectado=document.querySelectorAll('.conectado');
const elementosDesconectado=document.querySelectorAll('.desconectado');

console.log(elementosConectado);
console.log(elementosDesconectado);

export const loginCheck=(user)=>{
    if (user) {
        if(user.emailVerified){
            elementosConectado.forEach(elemento=>elemento.style.display='block');
            elementosDesconectado.forEach(elemento=>elemento.style.display='none');
        }else{
            Toastify({
                text: "Debe verificar su correo electrónico",
                duration: 3000,
                gravity: 'bottom',
                position: 'right',
                style: {
                    background: '#FF4136'
                }
                }).showToast();
        }
    }else{
        elementosConectado.forEach(elemento=>elemento.style.display='none');
        elementosDesconectado.forEach(elemento=>elemento.style.display='block');
    }
}