// Define the USDA fetch function
function fetchUSDAData(query) {
  return fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&api_key=fEFUuaodX1TRMM5G8nl59Knfkul2CTZhztMMsCNu`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

// Define the Nutritionix fetch function
function fetchNutritionixData(query) {
  return fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-app-id': 'fec30a29',
      'x-app-key': 'aeaf7777cd89a85c211ec24a12d84215' 
    },
    body: JSON.stringify({
      "query": query
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

// Define the query variable
const query = "banana";

// Use Promise.all() to wait for both fetches to complete
Promise.all([fetchUSDAData(query), fetchNutritionixData(query)])
.then(([usdaData, nutritionixData]) => {
  // Process the USDA data
  const foodData = usdaData.foods[0]; // Assuming we're using the first food item
  const foodNutrients = foodData.foodNutrients; // Get the foodNutrients array

  // Extract the required nutrient values
  const totalFat = getNutrientValue(foodNutrients, 'Total lipid (fat)');
  const saturatedFat = getNutrientValue(foodNutrients, 'Fatty acids, total saturated');
  const transFat = getNutrientValue(foodNutrients, 'Fatty acids, total trans');
  const polyunsaturatedFat = getNutrientValue(foodNutrients, 'Fatty acids, total polyunsaturated');
  const monounsaturatedFat = getNutrientValue(foodNutrients, 'Fatty acids, total monounsaturated');
  const cholesterol = getNutrientValue(foodNutrients, 'Cholesterol');
  const sodium = getNutrientValue(foodNutrients, 'Sodium, Na');
  const totalCarbohydrates = getNutrientValue(foodNutrients, 'Carbohydrate, by difference');
  const dietaryFiber = getNutrientValue(foodNutrients, 'Fiber, total dietary');
  const sugars = getNutrientValue(foodNutrients, 'Total Sugars');
  const protein = getNutrientValue(foodNutrients, 'Protein');
  const vitaminD = getNutrientValue(foodNutrients, 'Vitamin D (D2 + D3), International Units');
  const calcium = getNutrientValue(foodNutrients, 'Calcium, Ca');
  const iron = getNutrientValue(foodNutrients, 'Iron, Fe');
  const caffeine = getNutrientValue(foodNutrients, 'Caffeine');

 // Update the HTML elements with the extracted values
 document.getElementById('calories').textContent = nutritionixData.foods[0].nf_calories;
 document.getElementById('nf_total_fat').innerText = totalFat.value + ' ' + totalFat.unit;
 document.getElementById('nf_saturated_fat').innerText = saturatedFat.value + ' ' + saturatedFat.unit;
 document.getElementById('nf_trans_fat').innerText = transFat.value + ' ' + transFat.unit;
 document.getElementById('nf_poly_fat').innerText = polyunsaturatedFat.value + ' ' + polyunsaturatedFat.unit;
 document.getElementById('mf_mono_fat').innerText = monounsaturatedFat.value + ' ' + monounsaturatedFat.unit;
 document.getElementById('nf_cholesterol').innerText = cholesterol.value + ' ' + cholesterol.unit;
 document.getElementById('nf_sodium').innerText = sodium.value + ' ' + sodium.unit;
 document.getElementById('nf_carbs').innerText = totalCarbohydrates.value + ' ' + totalCarbohydrates.unit;
 document.getElementById('nf_fiber').innerText = dietaryFiber.value + ' ' + dietaryFiber.unit;
 document.getElementById('nf_sugars').innerText = sugars.value + ' ' + sugars.unit;
 document.getElementById('nf_protein').innerText = protein.value + ' ' + protein.unit;
 document.getElementById('nf_vitamin_d').innerText = vitaminD.value === 'N/A' ? nutritionixData.foods[0].nf_vitamin_d + ' IU' : vitaminD.value + ' ' + vitaminD.unit; // check if vitaminD exists
 document.getElementById('nf_calcium').innerText = calcium.value + ' ' + calcium.unit;
 document.getElementById('nf_iron').innerText = iron.value + ' ' + iron.unit;
 document.getElementById('nf_potassium').textContent = nutritionixData.foods[0].nf_potassium + ' MG';
 document.getElementById('nf_caffeine').innerText = caffeine.value === 'N/A' ? nutritionixData.foods[0].nf_caffeine + ' MG' : caffeine.value + ' ' + caffeine.unit; // check if caffeine exists
})
.catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
});

// Function to get the nutrient value from the foodNutrients array
function getNutrientValue(foodNutrients, nutrientName) {
  const nutrient = foodNutrients.find(n => n.nutrientName === nutrientName);
  return {
    value: nutrient ? nutrient.value : 'N/A',
    unit: nutrient ? nutrient.unitName : ''
  };
}