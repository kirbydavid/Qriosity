fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-app-id': 'fec30a29',
        'x-app-key': 'aeaf7777cd89a85c211ec24a12d84215' 
    },
    body: JSON.stringify({
        "query": "banana"
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    // Process the data and add it to your table
    console.log(data); // Log the response for debugging

    // Sample code to add data to the table (you'll need to adapt this)
    const tableBody = document.getElementById('table-rows');
    const row = tableBody.insertRow();

    row.insertCell().textContent = data.foods[0].food_name;
    row.insertCell().textContent = data.foods[0].brand_name;
    row.insertCell().textContent = data.foods[0].serving_qty;
    row.insertCell().textContent = data.foods[0].serving_unit;
    row.insertCell().textContent = data.foods[0].serving_weight_grams;
    row.insertCell().textContent = data.foods[0].nf_calories;
    row.insertCell().textContent = data.foods[0].nf_total_fat;
    row.insertCell().textContent = data.foods[0].nf_saturated_fat;
    row.insertCell().textContent = data.foods[0].nf_cholesterol;
    row.insertCell().textContent = data.foods[0].nf_sodium;
    row.insertCell().textContent = data.foods[0].nf_total_carbohydrate;
    row.insertCell().textContent = data.foods[0].nf_dietary_fiber;
    row.insertCell().textContent = data.foods[0].nf_sugars;
    row.insertCell().textContent = data.foods[0].nf_protein;
    row.insertCell().textContent = data.foods[0].nf_potassium;
    row.insertCell().textContent = data.foods[0].nf_p;

})

.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});