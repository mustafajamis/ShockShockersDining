function customize(dietType) {
    const customizationOptions = document.querySelector('.customization-options');
    const basicForm = document.getElementById('basicForm');

    customizationOptions.style.display = 'none';
    basicForm.style.display = 'block';

    document.getElementById('basicNutritionForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const calories = parseInt(document.getElementById('calories').value);
        const goal = document.getElementById('goal').value;
        
        fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':  'Bearer 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'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {role: 'system', content: 'You are a helpful assistant that provides meal recommendations based on nutrition information.'},
                    {role: 'user', content: `I need meal recommendations for a ${dietType} diet with ${calories} calories and a ${goal} goal.`}
                ]
            })
        })
        .then(response => response.json())
        .then(data => {
            const recommendationsDiv = document.getElementById('recommendations');
            recommendationsDiv.innerHTML = "<h2>Meal Recommendations:</h2>";

            const ul = document.createElement('ul');
            data.choices[0].message.content.forEach(recommendation => {
                const li = document.createElement('li');
                li.textContent = recommendation;
                ul.appendChild(li);
            });

            recommendationsDiv.appendChild(ul);
        })
        .catch(error => console.error('Error:', error));
    });
}
