// app/page.tsx
import { Hero, SearchBar, CustomFilter, CarCard } from '@/components';
import { getCars } from '@/utils';
import { log } from 'console';

import Image from 'next/image';

export default async function Home() {
  const cars = await getCars();
  // console.log('cars:==========', cars);
  // console.log('Number of cars:', cars.length);
  const isDataEmpty = !cars || cars.length < 1 || !Array.isArray(cars);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="m-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container -z-10">
          <h1 className="text-4xl font-extrabold ">Available Cars</h1>
          <p>
            Explore the cars available for rent. We have a wide range of cars
          </p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filtr-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, no cars available
              <p>{cars?.message}</p>
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
