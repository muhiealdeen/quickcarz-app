const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '9b834280f5msh43f88bb752ee0acp171ad0jsna7a5c773c343',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
