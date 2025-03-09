import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <div className="  mx-4 md:mx-8 lg:mx-16 mt-20 mb-10 text-center place-items-center">
      <p className="text-3xl lg:text-6xl font-bold pl-2 pt-3">
        Let us help you get started with your journey!
      </p>
      <p className=" mt-4 lg:mt-10 pl-2 lg:text-xl">
        We over personalised assistance Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Adipisci, fuga!
      </p>

      <motion.button
        className="py-2 px-4 bg-green-200 rounded-full mt-4 font-semibold"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1.0 }}
        transition={{ duration: 0.4 }}
      >
        Book a Call
      </motion.button>
    </div>
  );
};

export default CallToAction;
