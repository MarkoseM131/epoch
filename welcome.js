// Wait for the entire HTML document to load
document.addEventListener('DOMContentLoaded', () => {

    // Get the dropdown element by its ID
    const professionSelect = document.getElementById('profession-select');

    // Add an event listener that fires when the user selects a new option
    professionSelect.addEventListener('change', () => {
        
        // Get the 'value' of the selected option (e.g., "techepoch.html")
        const selectedPage = professionSelect.value;

        // Check if the user selected a valid page (not the "Choose" option)
        if (selectedPage) {
            // Redirect the browser to the selected page
            window.location.href = selectedPage;
        }
    });

});