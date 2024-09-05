export async function getCars() {
  try {
    const headers = {
      'x-rapidapi-key': '9b834280f5msh43f88bb752ee0acp171ad0jsna7a5c773c343',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
    };
    const response = await fetch(
      'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
      { headers: headers },
    );
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
