import React, { useState } from 'react';

const AddItem = () => {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productMaterial, setProductMaterial] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result); // Base64 image data
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (productImage) {
      console.log('Product Name:', productName);
      console.log('Product Image:', productImage);
      console.log('Product Material:', productMaterial);
      console.log('Product Description:', productDescription);
    } else {
      console.log('Please upload a product image');
    }

    // You can add your API call or further processing here
  };

  return (
    <div className="container">
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product Image:</label>
          <input
            type="file"
            id="productImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productMaterial">Product Material:</label>
          <select
            id="productMaterial"
            value={productMaterial}
            onChange={(e) => setProductMaterial(e.target.value)}
            required
          >
            <option value="">Select Material</option>
            <option value="plastic">Plastic</option>
            <option value="iron">Iron</option>
            <option value="cloth">Cloth</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            rows="4"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Enter product description"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItem;
