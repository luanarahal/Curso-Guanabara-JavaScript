function verificar() {
    const date = new Date().toLocaleDateString();
    let res = document.getElementById('resultado')

    res.innerHTML = `<br>O que eu recebi do sistema foi: ${date}`
}