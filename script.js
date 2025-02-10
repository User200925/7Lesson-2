const kartochki = document.getElementById('kartochki');
const search = document.getElementById('search');

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        generateCards(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function generateCards(data) {
    kartochki.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>📧 ${item.email}</p>
            <p>📞 ${item.phone}</p>
            <p>🏠 ${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}</p>
            <p>🌐 ${item.website}</p>
            <p>🏢 ${item.company.name}</p>
        `;
        kartochki.appendChild(card);
    });
}

search.addEventListener('input', () => {
    const query = search.value.toLowerCase();
    const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.phone.includes(query) ||
        item.address.street.toLowerCase().includes(query) ||
        item.address.suite.toLowerCase().includes(query) ||
        item.address.city.toLowerCase().includes(query) ||
        item.address.zipcode.includes(query) ||
        item.website.toLowerCase().includes(query) ||
        item.company.name.toLowerCase().includes(query)
    );
    generateCards(filteredData);
});

fetchData();
