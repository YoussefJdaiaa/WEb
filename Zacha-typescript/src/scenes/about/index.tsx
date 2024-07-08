import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { AboutType, SelectedPage } from "@/shared/types";
import {
  UserGroupIcon,
  StarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import ZackaText from "@/assets/ZackaText.png";
import About from "./About";

const about: Array<AboutType> = [
  {
    icon: <StarIcon className="h-6 w-6" />,
    title: "Define Your Looks",
    description:
      "Upgrade your casual look with our newest trendy t-shirt collection. Discover your perfect fit and shine with ease!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Step into Elegance",
    description:
      "Explore a realm where each garment whispers tales of sophistication and style, inviting you to indulge in the timeless allure of fashion's finest offerings",
  },
  {
    icon: <RocketLaunchIcon className="h-6 w-6" />,
    title: "Cozy Up in Style",
    description:
      "Experience ultimate comfort and style with our new hoodies. Stay warm with a touch of fashion, available now!",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-full py-20 bg-black">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A FASHION COMPANY.</HText>
          <p className="my-5 text-sm">
          At our fashion company, we offer world-class clothing, 
          and personalized fashion experiences to help you achieve your ultimate style goals effortlessly. 
          We genuinely care about each and every customer, ensuring you always look and feel your best.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}  
        >
          {about.map((aboute: AboutType) => (
            <About
              key={aboute.title}
              icon={aboute.icon}
              title={aboute.title}
              description={aboute.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="Zacka-Text"
            src={ZackaText}
            style={{width:'50%', height:'50%'}}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] ">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                  HUNDREDS OF SATISFIED CUSTOMERS ENJOYING  {" "}
                    <span className="text-primary-500">EUPHORIA</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              Join the wave of happiness with our exclusive fashion line, where hundreds of satisfied 
              customers are enjoying euphoria. Our meticulously crafted designs and high-quality fabrics
               ensure you feel as good as you look. Each piece in our collection is tailored to provide unparalleled 
               comfort and style, making everyday wear an extraordinary experience. Discover the joy of looking your 
               best and feeling even better with our trendsetting apparel
              . Elevate your wardrobe and join the euphoria today
              </p>
              <p className="mb-5">
              Our collection is designed to suit every personality and preference. 
              Crafted from premium materials, these t-shirts and hoodies ensure both comfort and durability. 
              Discover your perfect fit and shine with ease, making a statement wherever you go. 
              Elevate your everyday wardrobe
               and experience the perfect blend of fashion and functionality.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  By Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
