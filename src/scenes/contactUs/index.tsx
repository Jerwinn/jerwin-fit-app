import { SelectedPage } from "@/shared/types";
import React from "react";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pretium libero id lorem egestas, eget tempor quam maximus. Etiam
            molestie in ipsum eget tincidunt. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Aenean id lorem et odio imperdiet
            ultricies vitae ac turpis.
          </p>
        </motion.div>
        {/*form and image*/}
        <div></div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
