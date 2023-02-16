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

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan bibendum erat sed tristique. Praesent ut euismod ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum nisi nulla, vel vehicula lorem venenatis quis. Aenean hendrerit egestas ornare. Vestibulum a odio massa. Donec ultricies mi velit, in congue nulla placerat in. Phasellus facilisis, diam sed dictum ornare, urna justo gravida justo, eleifend aliquet metus nibh id felis.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100s of diverse class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan bibendum erat sed tristique. Praesent ut euismod ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum nisi nulla, vel vehicula lorem venenatis quis. Aenean hendrerit egestas ornare. Vestibulum a odio massa. Donec ultricies mi velit, in congue nulla placerat in. Phasellus facilisis, diam sed dictum ornare, urna justo gravida justo, eleifend aliquet metus nibh id felis.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Qualified trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan bibendum erat sed tristique. Praesent ut euismod ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum nisi nulla, vel vehicula lorem venenatis quis. Aenean hendrerit egestas ornare. Vestibulum a odio massa. Donec ultricies mi velit, in congue nulla placerat in. Phasellus facilisis, diam sed dictum ornare, urna justo gravida justo, eleifend aliquet metus nibh id felis.",
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
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/*Header for benefits*/}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            ENTER Descrpition here - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed in laoreet arcu. Vivamus ac pharetra leo.
            Pellentesque ut congue ante. Curabitur ut blandit magna, vel
            ultrices nulla. Sed vehicula gravida risus sed sodales. Ut gravida
            massa vulputate sapien finibus, ac sodales justo congue. Fusce
            finibus elit et tellus laoreet, non finibus dolor rhoncus.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Aenean eget lorem sit amet leo faucibus
            vehicula. Aenean rutrum lorem et metus ullamcorper malesuada.
            Quisque nunc dui, dignissim et tempor et, luctus aliquam risus. Duis
            nec nibh ultricies, fringilla erat vel, auctor diam. Ut sed pretium
            purus. Morbi ac tortor id velit tristique porttitor. Donec viverra
            scelerisque diam, nec finibus justo convallis eu. Sed et ante ut
            libero pretium pellentesque. Mauris luctus odio ut mi lacinia
            efficitur.
          </p>
        </motion.div>

        {/*Benefits boxes */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/*graphics and description */}
        <div>
          {/*graphics*/}
          <img/>

           {/*description*/}
           <div>
            {/*title*/}
            {/*descriotion/}
            {/*Button */}
            </div> 
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
