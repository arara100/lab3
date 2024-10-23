const filterTitleInput = document.getElementById('filterTitle');
const filterDescriptionInput = document.getElementById('filterDescription');
const searchButton = document.getElementById('searchButton');
const humsterCardsContainer = document.getElementById('humsterCards');

searchButton.addEventListener('click', function () {

    const filterTitle = filterTitleInput.value.toLowerCase();
    const filterDescription = filterDescriptionInput.value.toLowerCase();

    const cards = humsterCardsContainer.getElementsByClassName('card');

    Array.from(cards).forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(filterTitle) && description.includes(filterDescription)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

filterTitleInput.addEventListener('input', clearSearch);
filterDescriptionInput.addEventListener('input', clearSearch);

function clearSearch() {
    const filterTitle = filterTitleInput.value.toLowerCase();
    const filterDescription = filterDescriptionInput.value.toLowerCase();

    if (!filterTitle && !filterDescription) {
        const cards = humsterCardsContainer.getElementsByClassName('card');
        Array.from(cards).forEach(card => {
            card.style.display = '';
        });
    }
}
