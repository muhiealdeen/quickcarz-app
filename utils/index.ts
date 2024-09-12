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
