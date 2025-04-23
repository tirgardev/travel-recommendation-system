// script.js
document.getElementById('preferenceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weather = document.getElementById('weather').value;
    const landscape = document.getElementById('landscape').value;

    const recommendations = getRecommendations(weather, landscape);
    displayRecommendations(recommendations);
});

function getRecommendations(weather, landscape) {
    const destinations = [
        {
            name: 'Santorini, Greece',
            weather: 'summer',
            landscape: 'beaches',
            image: 'santorini.jpg'
        },
        {
            name: 'Kyoto, Japan',
            weather: 'spring',
            landscape: 'forests',
            image: 'kyoto.jpg'
        },
        {
            name: 'Banff, Canada',
            weather: 'autumn',
            landscape: 'mountains',
            image: 'banff.jpg'
        },
        {
            name: 'Aspen, USA',
            weather: 'winter',
            landscape: 'mountains',
            image: 'aspen.jpg'
        },
        // Add more destinations as needed
    ];

    return destinations.filter(destination => {
        return (weather === '' || destination.weather === weather) &&
               (landscape === '' || destination.landscape === landscape);
    });
}

function displayRecommendations(recommendations) {
    const container = document.getElementById('recommendations');
    container.innerHTML = '';

    if (recommendations.length === 0) {
        container.innerHTML = '<p>No destinations match your preferences.</p>';
        return;
    }

    recommendations.forEach(destination => {
        const destinationElement = document.createElement('div');
        destinationElement.classList.add('destination');

        const image = document.createElement('img');
        image.src = `images/${destination.image}`;
        image.alt = destination.name;

        const name = document.createElement('h3');
        name.textContent = destination.name;

        destinationElement.appendChild(image);
        destinationElement.appendChild(name);
        container.appendChild(destinationElement);
    });
}
