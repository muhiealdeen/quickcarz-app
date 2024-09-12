// utils/index.ts
import { CarProps } from '@/types';

export async function getCars() {
  try {
    const headers = {
      'x-rapidapi-key': '9b834280f5msh43f88bb752ee0acp171ad0jsna7a5c773c343',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
    };
    const response = await fetch(
      'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
      { headers: headers },
    );
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
export const calculateCarRent = (city_mpg: number, year: number) => {
  const baseRate = 40; // Lower base rate in dollars per day
  const mileageMultiplier = 0.2; // Different factor for mileage impact
  const depreciationRate = 0.03; // Lower additional rate per year of vehicle age
  const luxuryFactor = 1.2; // Additional rate for newer cars (luxury models)

  // Calculate the age of the car
  const carAge = new Date().getFullYear() - year;

  // Adjust the price based on mileage and age
  const mileageCost = city_mpg * mileageMultiplier;
  const ageCost = carAge * depreciationRate;

  // Apply a luxury factor for newer cars (under 3 years old)
  const luxuryAdjustment = carAge < 3 ? luxuryFactor : 1;

  // Calculate final rental rate per day
  const finalRate = (baseRate + mileageCost - ageCost) * luxuryAdjustment;

  // Round based on decimal part: < 0.50 = down to 0, >= 0.50 = up to 1
  const roundedRate = Math.round(finalRate);

  return roundedRate;
};

export const createCarImage = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { make, model, year } = car;

  url.searchParams.append(
    'customer',
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '',
  );
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

// export const createCarImage1 = async (car: CarProps, angle?: string) => {
//   const { make, model, year } = car;
//   const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
//   const url = `https://carapi.app/api/v1/car-image?make=${make}&model=${model}&year=${year}`;

//   try {
//     const response = await fetch(url, {
//       headers: {
//         Authorization: `Bearer 6c11a7aa7a0ba3fea650fe4ecc8a99c1de2821ab`, // Authentication with API key
//       },
//     });
//     const data = await response.json();

//     if (data.success) {
//       return data.image_url; // This would be the car image URL
//     } else {
//       throw new Error('Car image not found');
//     }
//   } catch (error) {
//     console.error('Error fetching car image:', error);
//     return null;
//   }
// };

export const createCarImage1 = (car: CarProps, angle?: string) => {
  const { make, model, year } = car;
  const apiKey = '6c11a7aa7a0ba3fea650fe4ecc8a99c1de2821ab'; // Replace with your actual API key

  // Construct the URL with query parameters
  const url = new URL('https://carapi.app/api/v1/car-image');

  url.searchParams.append(
    'customer',
    '6c11a7aa7a0ba3fea650fe4ecc8a99c1de2821ab' || '',
  );
  // customer=hrjavascript-mastery
  url.searchParams.append('make', make);
  url.searchParams.append('model', model);
  url.searchParams.append('year', `${year}`);
  if (angle) {
    url.searchParams.append('angle', angle);
  }

  // Return the constructed URL
  return `${url}`;
};
