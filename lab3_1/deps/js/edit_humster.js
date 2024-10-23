function editHumster(index) {
    const humster = humsters[index];

    document.getElementById('editTitle').value = humster.name;
    document.getElementById('editDescription').value = humster.description;
    document.getElementById('editPrice').value = humster.price;

    const modal = document.getElementById('editModal');
    modal.style.display = "block";

    const form = document.getElementById('editForm');
    form.onsubmit = function (event) {
        event.preventDefault();

        humster.name = document.getElementById('editTitle').value;
        humster.description = document.getElementById('editDescription').value;
        humster.price = parseFloat(document.getElementById('editPrice').value);

        displayHumsters(humsters);

        modal.style.display = "none";
    };
о
    const closeButton = document.querySelector('.close-button');
    closeButton.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
