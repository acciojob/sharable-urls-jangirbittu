// Get the form and the elements
const form = document.getElementById('urlForm');
const urlElement = document.getElementById('url');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get values from input fields
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    // Construct the URL with query parameters
    const url = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

    // Update the h3 element with the new URL
    urlElement.textContent = url;
});
