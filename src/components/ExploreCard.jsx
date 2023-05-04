'use client';

import { motion } from 'framer-motion';
import styles from '../styles/styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, img, title, desc, prompt, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[250px] h-[300px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover "
    />
    {/* <p className='text-white'>{desc}</p> */}
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-30 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[120px] h-[120px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src={img}
            alt="headset"
            className="object-contain"
          />
        </div>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <p className='text-white'>{desc}</p>
        <p className="font-normal text-[16px] leading-[20.16px] text-white ">
          {prompt}
        </p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
