document.addEventListener('DOMContentLoaded', function() {
    // Отримання карток з API
    fetch('http://localhost:8000/humsters/')
        .then(response => response.json())
        .then(data => {
            const humsterCards = document.getElementById('humsterCards');
            humsterCards.innerHTML = ''; 

            data.forEach(humster => {
                const card = document.createElement('div');
                card.classList.add('humster-card');
                card.innerHTML = `
                    <h3>${humster.name}</h3>
                    <p>${humster.description}</p>
                    <p>Price: $${humster.price}</p>
                `;
                humsterCards.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching humsters:', error));
});
