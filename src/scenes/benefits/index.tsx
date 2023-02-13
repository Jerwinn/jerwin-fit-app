import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div>
          <HText>MORE THAN JUST A GYM.</HText>
          <p>ENTER Descrpition here - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in laoreet arcu. Vivamus ac pharetra leo. Pellentesque ut congue ante. Curabitur ut blandit magna, vel ultrices nulla. Sed vehicula gravida risus sed sodales. Ut gravida massa vulputate sapien finibus, ac sodales justo congue. Fusce finibus elit et tellus laoreet, non finibus dolor rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean eget lorem sit amet leo faucibus vehicula.

Aenean rutrum lorem et metus ullamcorper malesuada. Quisque nunc dui, dignissim et tempor et, luctus aliquam risus. Duis nec nibh ultricies, fringilla erat vel, auctor diam. Ut sed pretium purus. Morbi ac tortor id velit tristique porttitor. Donec viverra scelerisque diam, nec finibus justo convallis eu. Sed et ante ut libero pretium pellentesque. Mauris luctus odio ut mi lacinia efficitur.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
