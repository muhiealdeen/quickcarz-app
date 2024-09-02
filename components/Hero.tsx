// components/Hero.tsx
'use client';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className=" hero ">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Your Ride, Your Way — Fast and Simple!</h1>
        <p className="hero__subtitle">
          Discover the easiest way to find, book, and rent the perfect car in
          just a few clicks.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="flex-1 hero-image-container ">
        <div className="hero__image">
          <Image src="/car.png" alt="hero" fill className="object-contain" />
        </div>

        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  );
};

export default Hero;
