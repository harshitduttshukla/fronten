import React, { useState } from 'react';

function Sell() {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    images: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProductData((prevData) => ({
      ...prevData,
      images: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the product data to your backend service or handle it as needed
    console.log('Product data submitted:', productData);
    setSubmitted(true);
    setProductData({
      name: '',
      description: '',
      price: '',
      images: [],
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Sell Your Product</h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 text-white">
            Product Name:
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="border rounded p-2 w-full mb-4 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </label>

          <label className="mb-2 text-white">
            Description:
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="border rounded p-2 w-full mb-4 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              rows="4"
              required
            />
          </label>

          <label className="mb-2 text-white">
            Price (in USD):
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="border rounded p-2 w-full mb-4 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </label>

          <label className="mb-2 text-white">
            Upload Images:
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="border rounded p-2 w-full mb-4 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <p className="text-green-500 mt-4">Thank you! Your product has been submitted.</p>
        )}
      </div>
    </div>
  );
}

export default Sell;
