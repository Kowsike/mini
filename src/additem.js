// Create the container for the form
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

// Create the heading
const heading = document.createElement('h1');
heading.textContent = 'Add Item';
container.appendChild(heading);

// Create the form
const form = document.createElement('form');
form.id = 'addItemForm';
container.appendChild(form);

// Function to create form fields
function createFormField(type, id, placeholder, labelText) {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;
    form.appendChild(label);

    let input;
    if (type === 'textarea') {
        input = document.createElement('textarea');
        input.placeholder = placeholder;
    } else if (type === 'select') {
        input = document.createElement('select');
        input.required = true;
        const materials = ['Select Material', 'Plastic', 'Metal', 'Paper', 'Glass'];
        materials.forEach(material => {
            const option = document.createElement('option');
            option.value = material;
            option.textContent = material;
            input.appendChild(option);
        });
    } else {
        input = document.createElement('input');
        input.type = type;
        input.id = id;
        input.placeholder = placeholder;
        input.required = true;
    }
    
    input.id = id;
    input.name = id;
    form.appendChild(input);

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.id = `${id}Error`;
    form.appendChild(errorDiv);
}

// Create the form fields
createFormField('text', 'productName', 'Enter product name', 'Product Name:');
createFormField('file', 'productImage', '', 'Product Image:');
createFormField('select', 'productMaterial', '', 'Product Material:');
createFormField('textarea', 'productDescription', 'Enter product description', 'Product Description:');

// Create the submit button
const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Submit';
form.appendChild(submitButton);

// Add event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Clear previous error messages
    clearErrors();

    // Get form values
    let productName = document.getElementById("productName").value.trim();
    let productImage = document.getElementById("productImage").value;
    let productMaterial = document.getElementById("productMaterial").value;
    let productDescription = document.getElementById("productDescription").value.trim();

    // Validate form fields
    let isValid = true;

    if (productName === "") {
        document.getElementById("nameError").textContent = "Product name is required.";
        isValid = false;
    }
    if (productImage === "") {
        document.getElementById("imageError").textContent = "Product image is required.";
        isValid = false;
    }
    if (productMaterial === "") {
        document.getElementById("materialError").textContent = "Product material is required.";
        isValid = false;
    }
    if (productDescription === "") {
        document.getElementById("descriptionError").textContent = "Product description is required.";
        isValid = false;
    }

    // If the form is valid, you can proceed with submission logic (e.g., sending data to the server)
    if (isValid) {
        alert("Form submitted successfully!");
        // Example of data you can send
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productImage', document.getElementById('productImage').files[0]);
        formData.append('productMaterial', productMaterial);
        formData.append('productDescription', productDescription);
        // Here, you can send the formData using AJAX or Fetch API
    }
});

// Function to clear previous error messages
function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("imageError").textContent = "";
    document.getElementById("materialError").textContent = "";
    document.getElementById("descriptionError").textContent = "";
}

// Add CSS styles to the document
const styles = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #f4f4f4;
    }
    .container {
        max-width: 600px;
        margin: 0 auto;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
    }
    label {
        display: block;
        font-size: 14px;
        margin-bottom: 8px;
        font-weight: bold;
    }
    input[type="text"], textarea, select, input[type="file"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 14px;
    }
    textarea {
        resize: vertical;
        min-height: 100px;
    }
    input[type="submit"] {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 16px;
        display: block;
        margin: 0 auto;
    }
    input[type="submit"]:hover {
        background-color: #218838;
    }
    .error {
        color: red;
        margin-top: -15px;
        margin-bottom: 10px;
        font-size: 12px;
    }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
//kowsikesh