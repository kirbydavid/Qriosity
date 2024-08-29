function addIngredient() {
  // Get input values from the modal

  // Create a new row and cells
  const tableBody = document.getElementById("ingredientsList");
  const newRow = document.createElement("tr");
  const ingredientInput = document.getElementById("ingredientInputBox").value;

  newRow.innerHTML = `
    <td>IMAGE</td>
    <td>Name</td>
    <td>Quantity</td>
    <td>Weight</td>
    <td>Unit</td>
    <td>Calories</td>
    <td>Food Group</td>
    <td><button class="remove-btn" onclick="deleteRow(this)"><i class="fa-solid fa-trash"></i></button></td>
    `;

  // Append the new row to the table body
  tableBody.appendChild(newRow);

  // Show the table if it's currently hidden
  const ingredientsTable = document.getElementById("ingredientsTable");
  if (tableBody.rows.length > 0) {
    ingredientsTable.style.display = "table";
  }
}

// Hide the table if there are no rows
function checkTableVisibility() {
  const tableBody = document.getElementById("ingredientsList");
  const ingredientsTable = document.getElementById("ingredientsTable");
  if (tableBody.rows.length === 0) {
    ingredientsTable.style.display = "none";
  }
}

// Function to delete a row
function deleteRow(button) {
  const row = button.parentNode.parentNode; // Get the row
  row.parentNode.removeChild(row); // Remove the row from the table body

  // Hide the table if there are no rows
  checkTableVisibility();
}

// Run this function initially to check if the table should be hidden
checkTableVisibility();
