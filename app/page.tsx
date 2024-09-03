// app/page.tsx
import { Hero, SearchBar, CustomFilter } from '@/components';

import Image from 'next/image';

export default function Home() {
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
      </div>
    </main>
  );
}
