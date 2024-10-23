function updateCardCount() {
    document.getElementById('cardCount').textContent = humsters.length;
}

document.addEventListener('DOMContentLoaded', updateCardCount);
