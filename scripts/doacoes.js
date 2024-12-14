const basketCost = 700.00;  // Custo de uma cesta básica
let donations = JSON.parse(localStorage.getItem('donations')) || [];

function addDonation() {
    const donationInput = document.getElementById('donationValue');
    const donationValue = parseFloat(donationInput.value);

    if (isNaN(donationValue) || donationValue <= 0) {
        alert('Por favor, insira um valor válido para a doação.');
        return;
    }

    donations.push(donationValue);
    localStorage.setItem('donations', JSON.stringify(donations));

    updateDisplay();

    // Exibe o modal de agradecimento
    showModal(`Você doou R$ ${donationValue.toFixed(2)}! Sua generosidade faz a diferença. ❤️`);

    donationInput.value = '';
}
function showModal(message) {
    const modal = document.getElementById('thankModal');
    const modalMessage = document.getElementById('modalMessage');

    modalMessage.textContent = message;
    modal.style.display = "flex"; // Mostra o modal
}

function closeModal() {
    const modal = document.getElementById('thankModal');
    modal.style.display = "none"; // Esconde o modal
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('thankModal');
    if (event.target === modal) {
        closeModal();
    }
};

function updateDisplay() {
    const totalDonatedElement = document.getElementById('totalDonated');
    const totalBasketsElement = document.getElementById('totalBaskets');

    const totalDonated = donations.reduce((sum, value) => sum + value, 0);
    totalDonatedElement.textContent = totalDonated.toFixed(2);
    totalBasketsElement.textContent = Math.floor(totalDonated / basketCost);
}

// Atualiza a interface ao carregar a página
updateDisplay();
