const name = document.getElementById("name");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensagem");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ''
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(name.value.length<6){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)) {
        warnings += `El email no es válido <br>`
        entrar = true
    }
    if(asunto.value.length<10){
        warnings += `El asunto es muy corto <br>`
        entrar = true
    }
    if(mensaje.value.length<20){
        warnings += `El mensaje debe tener al menos 20 caracteres <br>`
        entrar = true
    }
    if(entrar) {
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado"
    }
})