import React, { useState } from 'react';

// Import images from the `img` folder within `Home`
import img1 from './img/Basket.png';
import img2 from './img/Wood Lac Turnery.png';
import img3 from './img/wall painting.png';
import img4 from './img/terracotta ware dl.png';
import img5 from './img/cane haversacks ArP.png';
import img6 from './img/Bell Metalware Odisa.png';
import img7 from './img/Leather Toys mp.png';
import img8 from './img/Bamboo Fluite up.png';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = [
    { id: 1, name: "Handmade Basket", image: img1, price: "₹50", description: "Mumbai" },
    { id: 2, name: "Wood Lac Turnery", image: img2, price: "₹300", description: "Gujarat" },
    { id: 3, name: "Wall Painting", image: img3, price: "₹500", description: "Jharkhand" },
    { id: 4, name: "Terracotta Ware", image: img4, price: "₹1500", description: "Delhi" },
    { id: 5, name: "Cane Haversacks", image: img5, price: "₹500", description: "Arunachal Pradesh" },
    { id: 6, name: "Bell Metalware", image: img6, price: "₹450", description: "Odisha" },
    { id: 7, name: "Leather Toys", image: img7, price: "₹500", description: "Madhya Pradesh" },
    { id: 8, name: "Bamboo Flute", image: img8, price: "₹99", description: "Uttar Pradesh" }
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Handicraft Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <p className="text-gray-500">{product.description}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
