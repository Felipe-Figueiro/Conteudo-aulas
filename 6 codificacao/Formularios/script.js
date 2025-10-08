const campocadastro = document.getElementById('cadastro');
const senha = document.getElementById('senha');
const confirmsenha = document.getElementById('confirmsenha');

campocadastro.addEventListener('submit', function(event) {
    if (senha.value == confirmsenha.value) {

        alert('Cadastro realizado com sucesso!');

        const dadoscadastro = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            sexo: document.querySelector('input[name="sexo"]:checked')?.value,
            interesses: Array.from(document.querySelectorAll('input[name="interesses"]:checked')).map(el => el.value),
            pais: document.getElementById('pais').value,
            estado: document.getElementById('estado').value,
            endereco: document.getElementById('endereco').value
        };
        localStorage.setItem('dadoscadastro', JSON.stringify(dadoscadastro));
    } else {
        alert('As senhas não conferem. Tente novamente.');
        event.preventDefault(); 
    }
});