function verificar() {
    let meses = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
    let semanas = new Array ('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
    const agora = new Date
    const dia = agora.getDate()
    const mes = agora.getMonth()
    const ano = agora.getFullYear()
    const diadasem = agora.getDay()
    const hora = agora.getHours()
    const minutos = agora.getMinutes()
    const segundos = agora.getSeconds()
    let res = document.getElementById('resultado')

    res.innerHTML += `O dia atual é ${dia}<br><br>`;
    res.innerHTML += `O mês atual é ${meses[mes]}<br><br>`;
    res.innerHTML += `O ano atual é ${ano}<br><br>`;
    res.innerHTML += `O dia da semana é ${semanas[diadasem]}<br><br>`;
    res.innerHTML += `As horas são ${hora}<br><br>`;
    res.innerHTML += `Os minutos são ${minutos}<br><br>`;
    res.innerHTML += `Os segundos são ${segundos}<br><br>`;
}