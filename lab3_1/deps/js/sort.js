let isPriceSortedAsc = true;

document.getElementById('sortByPrice').addEventListener('click', function () {
    const sortedHumsters = humsters.slice().sort((a, b) => {
        if (isPriceSortedAsc) {
            return a.price - b.price;
        } else {
            return b.price - a.price; 
        }
    });

    displayHumsters(sortedHumsters);

    isPriceSortedAsc = !isPriceSortedAsc;

    document.getElementById('sortByPrice').textContent = isPriceSortedAsc ? 'Sort by Price (Ascending)' : 'Sort by Price (Descending)';
});

