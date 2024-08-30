function addIngredient() {
  const ingredientName = document.getElementById("ingredientInputBox").value;

  // Create a new row and cells
  const tableBody = document.getElementById("ingredientsList");
  const newRow = tableBody.insertRow();

  newRow.insertCell().textContent = 'IMAGE';
  newRow.insertCell().textContent = ingredientName;
  newRow.insertCell().textContent = ''; // Quantity
  newRow.insertCell().textContent = ''; // Weight
  newRow.insertCell().textContent = ''; // Unit
  newRow.insertCell().textContent = ''; // Calories
  newRow.insertCell().textContent = ''; // Food Group

  const deleteButtonCell = newRow.insertCell();
  deleteButtonCell.innerHTML = '<button class="remove-btn" onclick="deleteRow(this)"><i class="fa-solid fa-trash"></i></button>';

  

  // Fetch nutrition data for the added ingredient
  fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-app-id': 'fec30a29', // Replace with your API ID
      'x-app-key': 'aeaf7777cd89a85c211ec24a12d84215' // Replace with your API Key
    },
    body: JSON.stringify({
      "query": ingredientName
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Update the table cells with the fetched data
    newRow.cells[1].textContent = data.foods[0].food_name;
    newRow.cells[2].textContent = data.foods[0].serving_qty;
    newRow.cells[3].textContent = data.foods[0].serving_weight_grams;
    newRow.cells[4].textContent = data.foods[0].serving_unit;
    newRow.cells[5].textContent = data.foods[0].nf_calories;
    newRow.cells[6].textContent = data.foods[0].food_group;
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  // Show the table if it's currently hidden
  const ingredientsTable = document.getElementById("ingredientsTable");
  if (tableBody.rows.length > 0) {
    ingredientsTable.style.display = "table";
  }

  // Clear the input field
  document.getElementById("ingredientInputBox").value = "";
}

function deleteRow(button) {
  const row = button.parentNode.parentNode; // Get the row
  row.parentNode.removeChild(row); // Remove the row from the table body

  // Check if there are no rows left
  const tableBody = document.getElementById("ingredientsList");
  if (tableBody.rows.length === 0) {
    const ingredientsTable = document.getElementById("ingredientsTable");
    ingredientsTable.style.display = "none";
  }
}