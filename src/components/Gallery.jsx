import React from 'react';

const images = [
  { src: 'service1.jpg', title: 'Catering' },
  { src: 'service2.webp', title: 'Mehndi' },
  { src: 'service3.jpg', title: 'Photography' },
  { src: 'service4.jpg', title: 'Decorations' },
  { src: 'service5.webp', title: 'Lighting' },
  { src: 'service6.jpg', title: 'DJ Service' },
  { src: 'service7.webp', title: 'Floral Arrangements' },
  { src: 'service8.jpg', title: 'Seating' },
  { src: 'service9.jpeg', title: 'Venue' },
  { src: 'service10.jpg', title: 'Cake Decoration' },
];

function Gallery() {
  return (
    <div className="gallery-container p-4 my-16 w-[80vw] lg:h-[80vh] mx-auto">
      <h1 className="text-center text-[35px] mb-8">Our Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {images.map((image, index) => (
          <div key={index} className="gallery-item bg-white p-2 shadow-lg overflow-hidden rounded-lg">
            <img 
              src={image.src} 
              alt={image.title} 
              className="w-full h-32 object-cover rounded-t-lg hover:scale-125 transition-transform duration-500 ease-in-out " 
            />
            <div className="text-center mt-3">
              <h2 className="text-lg font-semibold">{image.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
