const basketCost = 70.00; // Valor médio de uma cesta básica

        // Recupera os dados salvos no armazenamento local
        let totalDonated = parseFloat(localStorage.getItem('totalDonated')) || 0;

        function addDonation() {
            const donationInput = document.getElementById('donationValue');
            const donationValue = parseFloat(donationInput.value);

            if (isNaN(donationValue) || donationValue <= 0) {
                alert('Por favor, insira um valor válido para a doação.');
                return;
            }

            totalDonated += donationValue;
            localStorage.setItem('totalDonated', totalDonated); // Salva o total no armazenamento local
            updateDisplay();

            donationInput.value = '';
        }

        function updateDisplay() {
            const totalDonatedElement = document.getElementById('totalDonated');
            const totalBasketsElement = document.getElementById('totalBaskets');

            totalDonatedElement.textContent = totalDonated.toFixed(2);
            totalBasketsElement.textContent = Math.floor(totalDonated / basketCost);
        }