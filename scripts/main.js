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

// Adiciona um ouvinte de evento de clique aos links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100;
        const topPosition = target.offsetTop - offset;
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
    });
});

    const hamburger = document.querySelector('.hamburger'); 
    const menu = document.querySelector('.menu');
    const hamburgerIcon = hamburger.querySelector('.menu-icon, i');
    const menuItems = document.querySelectorAll('.menu li a');
    const headerContainer = document.querySelector(".header");

    // Função para alternar o menu
    function toggleMenu() {
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            hamburgerIcon.classList.remove('ph-list');
            hamburgerIcon.classList.add('ph-x');
        } else {
            hamburgerIcon.classList.remove('ph-x');
            hamburgerIcon.classList.add('ph-list');
        }
    }

    // Evento de clique no botão hambúrguer
    hamburger.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em qualquer item
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active'); // Remove a classe 'active' do menu
                hamburgerIcon.classList.remove('ph-x');
                hamburgerIcon.classList.add('ph-list'); // Redefine o ícone para 'ph-list'
            }
        });
    });