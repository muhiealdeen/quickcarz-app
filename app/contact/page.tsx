import { CustomButton } from '@/components';
import Hero from '@/components/Hero';

const ContactUs = () => {
  return (
    <div>
      <Hero />
      <div className="padding-x pt-16">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-lg mt-4">
          Got a question or need help with your booking? Our dedicated customer
          support team is here for you!
        </p>

        <h3 className="text-2xl font-semibold mt-8">How to Reach Us</h3>
        <p className="text-lg mt-4">
          Whether you have a general inquiry or need assistance, you can reach
          us via the following methods:
        </p>

        <ul className="list-disc pl-6 mt-4 text-lg">
          <li>
            <strong>Email:</strong> #############################
          </li>
          <li>
            <strong>Phone:</strong> #############################
          </li>
          <li>
            <strong>Address:</strong> ############################
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8">Get In Touch</h3>
        <p className="text-lg mt-4">
          Feel free to fill out the form below, and our support team will get
          back to you as soon as possible:
        </p>

        <form className="mt-6 max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              rows={5}
              placeholder="Type your message here..."
            />
          </div>

          <CustomButton
            title="submit"
            btnType="button"
            containerStyles="rounded-full m-2 "
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
