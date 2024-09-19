import Hero from '@/components/Hero';

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <div className="padding-x pt-16">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-lg mt-4">
          Welcome to <span className="font-semibold">QuikCarz</span>! We are
          passionate about revolutionizing the car rental industry by offering a
          seamless, fast, and personalized car rental experience. Whether you're
          planning a road trip, need a vehicle for your daily commute, or
          require a luxury car for a special occasion, QuikCarz is here to
          ensure you find the perfect ride, with ease and speed.
        </p>

        <h3 className="text-2xl font-semibold mt-8">Our Mission</h3>
        <p className="text-lg mt-4">
          At QuikCarz, our mission is to simplify car rental by providing an
          intuitive platform where customers can find, book, and rent the best
          cars effortlessly. We believe in empowering our customers with a wide
          range of vehicle choices, competitive pricing, and top-tier customer
          support, all underpinned by cutting-edge technology.
        </p>

        <h3 className="text-2xl font-semibold mt-8">Meet the Team</h3>
        <p className="text-lg mt-4">
          Our team is comprised of passionate individuals with a deep
          understanding of both the automotive and technology industries. With
          years of experience, we are dedicated to creating a reliable and
          enjoyable car rental experience. We are committed to continually
          improving our platform to meet the evolving needs of our customers.
        </p>

        <h3 className="text-2xl font-semibold mt-8">Why Choose Us?</h3>
        <ul className="list-disc pl-6 mt-4 text-lg">
          <li>Wide selection of vehicles</li>
          <li>Competitive rental rates</li>
          <li>Convenient and quick booking process</li>
          <li>24/7 customer support</li>
          <li>Commitment to customer satisfaction</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
