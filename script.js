//INFORMAÇÕES DOS FILMES
    const movie ={

        "13-reasons":{
            title:"13 REASONS WHY",
            match:"97% Match",
            year: "2018",
            seasons: "4 Seasons",
            subtitle:" Every story has a beginning",
            description:"After a teenage girl's tragic death, a classmate discovers a box of tapes explaining the reasons behind her decision.",
            video:"video/13-reasons.mp4"
        },

        "breaking-bad":{
            title:"Breaking Bad",
            match:"99% Match",
            year: "2008",
            seasons: "5 Seasons",
            subtitle:" Remember my name.",
            description:"A chemistry teacher diagnosed with cancer starts producing methamphetamine with a former student to secure his family's financial future.",
            video:"video/breaking-bad"
        },

}


  // Seleciona o elemento HTML que contém os filmes.
    const slider = document.querySelector('.movie-container');

    // Indica se o usuário está arrastando a lista.
    let isDown = false;

    // Armazena a posição inicial do mouse.
    let startX;

    // Armazena a posição inicial da rolagem horizontal.
    let scrollLeft;


    // Evento disparado quando o botão do mouse é pressionado.
    slider.addEventListener('mousedown', (e) => {

        // Informa que o arraste começou.
        isDown = true;

        // Adiciona uma classe CSS para indicar o arraste.
        slider.classList.add('dragging');

        // Calcula a posição inicial do mouse em relação
        // à posição horizontal do elemento na página.
        startX = e.pageX - slider.offsetLeft;

        // Salva a posição atual da rolagem horizontal.
        scrollLeft = slider.scrollLeft;
    });


    // Evento disparado quando o mouse sai do contêiner.
    slider.addEventListener('mouseleave', () => {

        // Interrompe o arraste.
        isDown = false;

        // Remove a classe CSS de arraste.
        slider.classList.remove('dragging');
    });


    // Evento disparado quando o botão do mouse é solto
    // sobre o contêiner.
    slider.addEventListener('mouseup', () => {

        // Finaliza o arraste.
        isDown = false;

        // Remove a classe CSS de arraste.
        slider.classList.remove('dragging');
    });


    // Evento disparado quando o mouse se movimenta.
    slider.addEventListener('mousemove', (e) => {

        // Se o mouse não estiver pressionado, não faz nada.
        if (!isDown) return;

        // Impede comportamentos padrão indesejados,
        // como a seleção de texto durante o arraste.
        e.preventDefault();

        // Calcula a posição atual do mouse em relação
        // ao contêiner.
        const x = e.pageX - slider.offsetLeft;

        // Calcula o deslocamento do mouse.
        // O número 2 aumenta a velocidade do movimento.
        const walk = (x - startX) * 2;

        // Atualiza a rolagem horizontal do contêiner.
        // A subtração faz a lista acompanhar o arraste.
        slider.scrollLeft = scrollLeft - walk;
    });



    // ==================================================
    // PARTE 2 — BOTÕES DE LEMBRETE
    // ==================================================

    // Seleciona todos os elementos com a classe
    // "button-remind".
    const remindButtons = document.querySelectorAll('.button-remind');


    // Percorre todos os botões encontrados.
    // A variável button representa cada botão da vez.
    remindButtons.forEach((button) => {

        // Adiciona um evento para detectar cliques.
        button.addEventListener('click', () => {

            // Procura o ícone <i> dentro do botão.
            const icon = button.querySelector('i');


            // Verifica se o botão já possui a classe "active".
            if (button.classList.contains('active')) {

                // Se estiver ativo, remove a classe.
                button.classList.remove('active');

                // Restaura o ícone de sino.
                icon.className = 'fa-regular fa-bell';

                // Restaura o texto original do botão.
                button.lastChild.textContent = ' Remind me';

            } else {

                // Se não estiver ativo, adiciona a classe.
                button.classList.add('active');

                // Substitui o sino por um ícone de confirmação.
                icon.className = 'fa-solid fa-check';

                // Atualiza o texto do botão.
                button.lastChild.textContent = ' Reminder set';
            }
        });
    });
