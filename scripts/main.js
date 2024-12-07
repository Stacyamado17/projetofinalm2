// Definindo a classe ScrollAnimation para gerenciar animações baseadas no scroll
class ScrollAnimation {
    constructor() {
        // Seleciona todas as seções que têm a classe 'section'
        this.sections = document.querySelectorAll('.section');

        // Inicializa os eventos e lógica necessários
        this.init();
    }

    init() {
        // Adiciona um ouvinte de evento para o scroll na janela
        // A função checkSections é chamada sempre que o usuário rola a página
        window.addEventListener('scroll', this.checkSections.bind(this));

        // Chama a função checkSections ao carregar a página para garantir que a animação 
        // seja aplicada imediatamente, caso alguma seção já esteja visível
        this.checkSections();
    }

    checkSections() {
        // Define o ponto de disparo da animação como 80% da altura da janela
        const triggerBottom = window.innerHeight * 0.8;

        // Itera sobre cada seção selecionada
        this.sections.forEach(section => {
            // Obtém a distância da parte superior da seção em relação à janela
            const sectionTop = section.getBoundingClientRect().top;

            // Se a parte superior da seção estiver acima do ponto de disparo, 
            // adiciona a classe 'visible' para ativar a animação
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                // Caso contrário, remove a classe 'visible' para desativar a animação
                section.classList.remove('visible');
            }
        });
    }
}

// Cria uma nova instância da classe ScrollAnimation para ativar o comportamento na página
new ScrollAnimation();
