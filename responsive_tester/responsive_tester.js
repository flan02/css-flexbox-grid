const form = document.getElementById('responsive-tester-form');

if(form){  // chequeamos si existe por buenas practicas

    form.addEventListener('submit', () => {

        let width = form.querySelector('#width'),
            height = form.querySelector('#height'),
            url = form.querySelector('#url') 

//detectamos que existan por buenas practicas
if(width && height && url){

    width = width.value,
    height = height.value,
    url = url.value

}

window.open(url, url, `innerWidth=${width}, innerHeight=${height}`)

/* con el innerWidth y Height no contaran en las medidas la barra de direcciones, favicon y cruz de cerrar
solo aplica al viewport */ 
    })

}