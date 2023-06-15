
import { motion } from 'framer-motion';
import image from "./../../assets/images/depositphotos_172332390-stock-photo-man-hand-car.jpg"

const AboutUsSection = () => {
  return (
    <section className="bg-violet-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center  ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl leading-9 font-semibold text-violet-900 sm:text-4xl sm:leading-10"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-violet-900 sm:mt-4"
          >
            Welcome to our toy marketplace! We are passionate about bringing joy and happiness to children through our wide selection of high-quality toys.
          </motion.p>
        </div>
        <div className="mt-12 flex flex-col gap-6 md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-1/2"
          >
            <img
              className="h-auto w-full object-contain rounded-lg"
              src={image}
              alt="About Us"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl leading-8 font-semibold text-violet-900 ">
              Our Mission
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 text-xl leading-7 text-violet-900 "
            >
              We strive to provide a platform where parents and children can discover, explore, and purchase the most amazing toys. Our mission is to make every playtime a memorable experience filled with joy, creativity, and learning.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 text-xl leading-7 text-violet-900 "
            >
              With a focus on quality, safety, and innovation, we aim to become the go-to destination for all your toy needs.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
