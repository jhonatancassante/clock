function atualizaRelogio() {
    // Pega os elementos HTML e as childrens dentro dele
    const ponteiroHora = document.getElementById('linhaHoras');
    const horaNumeros = ponteiroHora.children;
    const ponteiroMinuto = document.getElementById('linhaMinutos');
    const minutoNumeros = ponteiroMinuto.children;
    const ponteiroSegundo = document.getElementById('linhaSegundos');
    const segundoNumeros = ponteiroSegundo.children;

    // Pega a hora atual e separa em horas, minutos e segundos
    const agora = new Date();
    const horas = agora.getHours() || 12;
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    // Calcula os angulos dos ponteiros de hora, minuto e segundo
    const anguloHora = (horas % 12) * 30 + minutos * 0.5;
    const anguloMinuto = minutos * 6;
    const anguloSegundo = segundos * 6;

    // Rotaciona o ponteiro de horas de acordo com o angulo
    ponteiroHora.style.transform = `rotate(${anguloHora}deg)`;
    //Rotaciona os número ao contrário do angulo e coloca os números
    for (const numero of horaNumeros) {
        numero.style.transform = `rotate(${-anguloHora}deg)`;
        numero.innerHTML = horas.toLocaleString('pt-BR', {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
    }

    // Rotaciona o ponteiro de minutos de acordo com o angulo
    ponteiroMinuto.style.transform = `rotate(${anguloMinuto}deg)`;
    //Rotaciona os número ao contrário do angulo e coloca os números
    for (const numero of minutoNumeros) {
        numero.style.transform = `rotate(${-anguloMinuto}deg)`;
        numero.innerHTML = minutos.toLocaleString('pt-BR', {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
    }

    // Rotaciona o ponteiro de segundos de acordo com o angulo
    ponteiroSegundo.style.transform = `rotate(${anguloSegundo}deg)`;
    //Rotaciona os número ao contrário do angulo e coloca os números
    for (const numero of segundoNumeros) {
        numero.style.transform = `rotate(${-anguloSegundo}deg)`;
        numero.innerHTML = segundos.toLocaleString('pt-BR', {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
    }
}

// Atualiza o relógio a cada segundo
setInterval(atualizaRelogio, 1000);

// Inicializa a função
atualizaRelogio();