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
            title:"BREAKING BAD",
            match:"99% Match",
            year: "2008",
            seasons: "5 Seasons",
            subtitle:" Remember my name.",
            description:"A chemistry teacher diagnosed with cancer starts producing methamphetamine with a former student to secure his family's financial future.",
            video:"video/breaking-bad.mp4"
        },

        "la-papel":{
            title:"LA CASA DE PAPEL",
            match:"96% Match",
            year: "2017",
            seasons: "5 Seasons",
            subtitle:" The perfect robbery.",
            description:"A mysterious man know as The Professor recruits eight criminals to carry out an ambitious plan to rob the Royal Mint of Spain.",
            video:"video/la-casa-de-papel.mp4"
        },

         "better-call-saul":{
            title:"BETTER CALL SAUL",
            match:"98% Match",
            year: "2015",
            seasons: "6 Seasons",
            subtitle:" Lawyers aren't born. They're made.",
            description:"Follow the transformation of Jimmy McGill into the morally challenged lawyer Saul Goodman.",
            video:"video/better-call-saul.mp4"
        },

        "the-mentalist": {
        title: "THE MENTALIST",
        match: "95% Match",
        year: "2008",
        rating: "TV-14",
        seasons: "7 Seasons",
        subtitle: "Observe. Deduce. Solve.",
        description: "Patrick Jane uses his extraordinary observation skills to help the California Bureau of Investigation solve complex crimes.",
        video: "video/the-mentalist.mp4"
    }
};


  // Seleciona o elemento HTML que contém os filmes.
    const slider = document.querySelector('.movie-container');
    const backgroundVideo = document.querySelector('#background-video');

    function showMovie(movieId) {
        const selectedMovie = movie[movieId];
        if (!selectedMovie) return;

        document.querySelector('#movie-title').textContent = selectedMovie.title;
        document.querySelector('#movie-match').textContent = selectedMovie.match;
        document.querySelector('#movie-year').textContent = selectedMovie.year;
        document.querySelector('#movie-rating').textContent = selectedMovie.rating || 'TV-MA';
        document.querySelector('#movie-seasons').textContent = selectedMovie.seasons;
        document.querySelector('#movie-subtitle').textContent = selectedMovie.subtitle.trim();
        document.querySelector('#movie-description').textContent = selectedMovie.description;

        backgroundVideo.querySelector('source').src = selectedMovie.video;
        backgroundVideo.load();
    }

    slider.querySelectorAll('.movie-box').forEach((card) => {
        card.tabIndex = 0;
        card.setAttribute('aria-label', `Ver detalhes de ${movie[card.dataset.movie].title}`);

        card.addEventListener('click', (event) => {
            if (event.target.closest('.button-remind')) return;
            showMovie(card.dataset.movie);
        });

        card.addEventListener('keydown', (event) => {
            if (event.target !== card || (event.key !== 'Enter' && event.key !== ' ')) return;
            event.preventDefault();
            showMovie(card.dataset.movie);
        });
    });

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
