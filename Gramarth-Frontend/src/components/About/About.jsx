import React from 'react';

function About() {
  return (
    <section id="about" className="flex items-center justify-center min-h-screen bg-gray-800 p-6">
      <div className="max-w-4xl w-full bg-gray-900 text-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="mb-4">
          Welcome to <strong>Rural Handmade Products</strong>, a platform dedicated to showcasing and promoting unique handicrafts and tourism attractions from various regions of India.
        </p>
        <p className="mb-6">
          Founded by <strong>Vivek Pandey</strong>, our mission is to empower rural artisans by providing them with a platform to reach a wider audience. We believe that every handcrafted product tells a story, and we aim to bring these stories to life through our marketplace.
        </p>
        
        <h3 className="text-2xl font-semibold mt-6">Our History</h3>
        <p className="mb-4">
          Our journey began in 2023, when Vivek Pandey recognized the need for a platform that connects rural artisans with consumers across the country. Many talented craftsmen and women were struggling to make a living due to the lack of exposure and market access.
        </p>
        <p className="mb-6">
          With a passion for preserving traditional crafts, we established Rural Handmade Products. We started by collaborating with local artisans, providing them with the tools and support they needed to thrive. As we grew, so did our commitment to sustainability and ethical sourcing.
        </p>

        <h3 className="text-2xl font-semibold mt-6">Our Team</h3>
        <p className="mb-4">We are a dedicated team working towards the empowerment of artisans and the promotion of rural tourism:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Vivek Pandey - Founder</li>
          <li>Ravi Kumar - Marketing Head</li>
          <li>Anjali Sharma - Product Manager</li>
          <li>Sunita Devi - Artisans Liaison</li>
        </ul>
        
        <h3 className="text-2xl font-semibold mt-6">Our Products</h3>
        <p className="mb-4">
          Our products range from exquisite handmade baskets to intricate woodwork, each reflecting the rich culture and heritage of Indian craftsmanship. We are committed to sustainable practices and supporting local economies.
        </p>
        <div className="image-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <img src="/3 frontend/basket.png" alt="Handmade Basket" className="gallery-image rounded-lg shadow-md" />
          <img src="/3 frontend/Wood Lac Turnery.png" alt="Wood Lac Turnery" className="gallery-image rounded-lg shadow-md" />
          <img src="/3 frontend/wall painting.png" alt="Wall Painting" className="gallery-image rounded-lg shadow-md" />
        </div>
        <p>
          Join us on our journey to celebrate the artistry of rural India. Together, we can make a difference and help preserve the art of traditional craftsmanship.
        </p>
      </div>
    </section>
  );
}

export default About;
