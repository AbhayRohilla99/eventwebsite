import React from 'react';
import { FaMapMarkerAlt, FaStar, FaHotel } from 'react-icons/fa';
import { useEffect } from 'react';

const VenueCard = ({ venue }) => {

useEffect(()=>{

   window.scrollTo(0,0);

},[]);


  return (
    <a href={venue.link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-transparent overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 rounded-tr-xl rounded-b-xl ">
        <div className="relative">
          <img src={venue.image} alt={venue.name} className="w-full h-[38vh] rounded-tr-xl rounded-b-xl object-cover" />
          <img 
            src={venue.logo} 
            alt="Hotel Logo" 
            className="absolute top-4 left-4 w-12 h-12 bg-white p-1 rounded-full shadow-md"
          />
        </div>
        <div className="p-4 text-gray-800">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold flex items-center">
              {venue.name}
            </h3>
            <h3 className='flex items-center'>
              <FaStar className="ml-2 text-yellow-500" />
              <span className="ml-1 text-gray-600">{venue.rating}</span>
            </h3>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-1 text-pink-500" />
              {venue.location}
            </div>
            <div className="flex items-center">
              <FaHotel className="mr-1 text-blue-500" />
              {venue.type}
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p>Seating Capacity: {venue.capacity}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

const Venues = () => {
  const venues = [
    {
      name: 'Grand Palace',
      location: 'New York, NY',
      type: '5-Star Hotel',
      capacity: '500 People',
      rating: '4.8',
      image: 'venue1.jpg',
      logo: 'venue1.jpg',
      link: 'https://example.com/grand-palace',
    },
    {
      name: 'Oceanview Banquet',
      location: 'Los Angeles, CA',
      type: 'Banquet Hall',
      capacity: '300 People',
      rating: '4.5',
      image: 'venue2.jpg',
      logo: 'venue2.jpg',
      link: 'https://example.com/oceanview-banquet',
    },
    {
      name: 'Oceanview Banquet',
      location: 'Los Angeles, CA',
      type: 'Banquet Hall',
      capacity: '300 People',
      rating: '4.5',
      image: 'venue3.jpg',
      logo: 'venue3.jpg',
      link: 'https://example.com/oceanview-banquet',
    },
    {
      name: 'Oceanview Banquet',
      location: 'Los Angeles, CA',
      type: 'Banquet Hall',
      capacity: '300 People',
      rating: '4.5',
      image: 'venue3.jpg',
      logo: 'venue3.jpg',
      link: 'https://example.com/oceanview-banquet',
    },
    {
      name: 'Oceanview Banquet',
      location: 'Los Angeles, CA',
      type: 'Banquet Hall',
      capacity: '300 People',
      rating: '4.5',
      image: 'venue1.jpg',
      logo: 'venue1.jpg',
      link: 'https://example.com/oceanview-banquet',
    },
    {
      name: 'Oceanview Banquet',
      location: 'Los Angeles, CA',
      type: 'Banquet Hall',
      capacity: '300 People',
      rating: '4.5',
      image: 'venue2.jpg',
      logo: 'venue2.jpg',
      link: 'https://example.com/oceanview-banquet',
    },
    // Add more dummy venues as needed
  ];

  return (
    <div className="w-[80vw] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
      {venues.map((venue, index) => (
        <VenueCard key={index} venue={venue} />
      ))}
    </div>
  );
};

export default Venues;

