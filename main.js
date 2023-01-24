const form = document.getElementById("form_valores");

form.addEventListener('submit',function(e) {    
    e.preventDefault();

    const valor_a = document.getElementById("valorA");
    const valor_b = document.getElementById("valorB");
    const mensagemSucesso = `O valor de B = ${valor_b.value} é maior que o valor de A = ${valor_a.value}`;
    const mensagemErro =  `O valor de B = ${valor_b.value} é menor que o valor de A = ${valor_a.value}`;

    function Valida(){
        var Validacao = parseInt(valor_b.value) > parseInt(valor_a.value);
        containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemErro = document.querySelector('.error-message');

    if (Validacao) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'; 
        
        valor_a.value = '';
        valor_b.value = '';
        
        containerMensagemErro.innerHTML = '';
        containerMensagemErro.style = '';

    } else {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        valor_a.value = '';
        valor_b.value = '';
        
        containerMensagemSucesso.innerHTML = '';
        containerMensagemSucesso.style = '';
    }
    }Valida();
})

