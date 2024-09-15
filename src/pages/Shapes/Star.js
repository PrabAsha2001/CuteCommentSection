import React from 'react'
import star from './Images/star.png';
import {easeInOut, motion} from 'framer-motion';

const Star = () => {
  return (
    <motion.div className='start'
    initial={{
        //starting point
        rotate:'0deg'
    }}
    animate={{
        //ending point
        rotate:'180deg'
    }}
    transition={{
        //how long the animation should be 
        duration:3,
        ease:"linear",
        repeat: Infinity, 
        
    }}
    ><img src={star}></img>
    </motion.div>
  )
}

export default Star
