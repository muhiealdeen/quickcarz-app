// component.CarCard.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent } from '@/utils';
interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    class: carClass,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p>
        <span>{carRent}</span>
      </p>
    </div>
  );
};

export default CarCard;
// ==========================================
// // component.CarCard.tsx
// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import React from 'react';
// import { CarProps } from '@/types';
// import CustomButton from './CustomButton';

// interface CarCardProps {
//   car: CarProps;
// }

// const CarCard = ({ car }: CarCardProps) => {
//   const {
//     city_mpg,
//     class: carClass,
//     combination_mpg,
//     cylinders,
//     displacement,
//     drive,
//     fuel_type,
//     highway_mpg,
//     make,
//     model,
//     transmission,
//     year,
//   } = car;

//   return (
//     <div className="car-card border p-4 rounded-lg shadow-md bg-white">
//       {/* Car Title */}
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-xl font-bold">{`${make} ${model}`}</h3>
//         <span className="text-sm text-gray-500">{year}</span>
//       </div>

//       {/* Car Image (optional placeholder) */}
//       <div className="mb-4">
//         <Image
//           src="/car-placeholder.png" // Replace with actual car image URL if available
//           alt={`${make} ${model}`}
//           width={300}
//           height={200}
//           className="object-cover rounded-lg"
//         />
//       </div>

//       {/* Car Details */}
//       <div className="mb-4">
//         <p>
//           <strong>Class:</strong> {carClass}
//         </p>
//         <p>
//           <strong>Transmission:</strong>{' '}
//           {transmission === 'a' ? 'Automatic' : 'Manual'}
//         </p>
//         <p>
//           <strong>Drive:</strong> {drive.toUpperCase()}
//         </p>
//         <p>
//           <strong>Fuel Type:</strong> {fuel_type}
//         </p>
//         <p>
//           <strong>Displacement:</strong> {displacement}L
//         </p>
//         <p>
//           <strong>Cylinders:</strong> {cylinders}
//         </p>
//       </div>

//       {/* MPG Information */}
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <p>
//             <strong>City MPG:</strong> {city_mpg}
//           </p>
//           <p>
//             <strong>Highway MPG:</strong> {highway_mpg}
//           </p>
//           <p>
//             <strong>Combined MPG:</strong> {combination_mpg}
//           </p>
//         </div>
//       </div>

//       {/* Action Button */}
//       <CustomButton
//         title="View Details"
//         btnType="button"
//         containerStyles="w-full bg-blue-500 text-white py-2 rounded-lg"
//         handleClick={() => console.log(`${make} ${model} details clicked`)}
//       />
//     </div>
//   );
// };

// export default CarCard;
