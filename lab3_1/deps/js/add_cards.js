class Humster {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = parseFloat(price);
    }
}

const humsters = [];

function createHumsterCard(humster, index) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    const title = document.createElement('h3');
    title.textContent = humster.name;

    const description = document.createElement('p');
    description.textContent = humster.description;

    const price = document.createElement('p');
    price.textContent = `Price: ${humster.price}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', function () {
        editHumster(index);
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
        editHumster(index);
    });

    cardBodyDiv.appendChild(title);
    cardBodyDiv.appendChild(description);
    cardBodyDiv.appendChild(price);
    cardBodyDiv.appendChild(editButton);
    cardBodyDiv.appendChild(deleteButton)

    cardDiv.appendChild(cardBodyDiv);

    return cardDiv;
}

document.getElementById('cardForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    const newHumster = new Humster(name, description, price);
    humsters.push(newHumster);

    displayHumsters(humsters);
    document.getElementById('cardForm').reset();
    updateCardCount();
});



function displayHumsters(humsterArray) {
    const humsterCardsContainer = document.getElementById('humsterCards');
    humsterCardsContainer.innerHTML = '';

    humsterArray.forEach((humster, index) => {
        const humsterCard = createHumsterCard(humster, index);
        humsterCardsContainer.appendChild(humsterCard);
    });
}

function updateCardCount() {
    document.getElementById('cardCount').textContent = humsters.length;
}
