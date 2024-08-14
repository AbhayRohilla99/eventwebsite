import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import './Categories.css';

const categories = [
  {
    title: 'Venues',
    content: ' Find the perfect venue for your wedding.',
    imgSrc: 'category1.cms',
  },
  {
    title: 'Groom Wear',
    content: ' Explore the latest trends in groom wear.',
    imgSrc: 'category2.jpg',
  },
  {
    title: 'Bridal Wear',
    content: ' Discover stunning bridal wear collections.',
    imgSrc: 'category3.jpg',
  },
  {
    title: 'Photography',
    content: ' Capture every moment with professional photography.',
    imgSrc: 'category4.jpeg',
  },
  {
    title: 'Catering',
    content: ' Delicious catering services for your big day.',
    imgSrc: 'category5.jpg',
  },
  {
    title: 'Decorations',
    content: ' Beautiful decorations to enhance your wedding ambiance.',
    imgSrc: 'category6.jpg',
  },
];

function Category() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="wedding-categories-container p-4 w-[80vw] lg:h-[70vh] mx-auto">
      <h1 className="text-center text-[35px] mb-12">Wedding Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="accordion-item shadow-lg rounded-lg bg-white relative">
            <div
              className="accordion-header pl-4 flex justify-between items-center cursor-pointer h-[100px] overflow-hidden bg-gray-200 hover:border-animation"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center">
                <h2 className="text-lg font-semibold">{category.title}</h2>
                <MdKeyboardArrowDown
                  className={`ml-2 h-5 w-5 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <img 
                src={category.imgSrc} 
                alt={category.title} 
                className="w-[15vw] h-[18vh] object-cover rounded-l-full"
              />
            </div>
            {activeIndex === index && (
              <div className="accordion-content mt-4 text-gray-700 pl-4">
                <p>{category.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;