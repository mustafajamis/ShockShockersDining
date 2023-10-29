function customize(dietType) {
    const customizationOptions = document.querySelector('.customization-options');
    const basicForm = document.getElementById('basicForm');

    customizationOptions.style.display = 'none';
    basicForm.style.display = 'block';
}

document.getElementById('basicNutritionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const calories = parseInt(document.getElementById('calories').value);
    const goal = document.getElementById('goal').value;

    // Make a POST request to the ChatGPT API (same as before)
    // ...
