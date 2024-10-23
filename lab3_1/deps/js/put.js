async function editHumster(id) {
    const response = await fetch(`/humsters/${id}/`);
    const humster = await response.json();
    document.getElementById('editTitle').value = humster.title;
    document.getElementById('editDescription').value = humster.description;
    document.getElementById('editPrice').value = humster.price;
    
    const editForm = document.getElementById('editForm');
    editForm.onsubmit = async (event) => {
        event.preventDefault();
        const updatedData = {
            title: document.getElementById('editTitle').value,
            description: document.getElementById('editDescription').value,
            price: document.getElementById('editPrice').value,
        };
        
        const response = await fetch(`/humsters/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (response.ok) {
            await fetchHumsters(); // Оновити список хом’яків
            closeModal(); // Закрити модальне вікно
        } else {
            console.error('Failed to update humster');
        }
    };
    document.getElementById('editModal').style.display = 'block'; // Відкрити модальне вікно
}