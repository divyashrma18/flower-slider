import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'
import Navbar from './Navbar'

const Hero = () => {
  const flowers = [
    {
      name: 'SUNFLOWER',
      image: './images/flower1.png',
      color: 'linear-gradient(to bottom right, #d4a017, #f2c94c)',
      desc: `Sunflowers are radiant blooms that follow the sun, symbolizing warmth,
      positivity, and happiness. Their golden petals and tall presence brighten up every garden and heart.
      A true emblem of nature’s optimism and endless energy.`,
    },
    {
      name: 'TULIPS',
      image: './images/flower2.png',
      color: 'linear-gradient(to bottom right, #4b0fcf, #8140d8)',
      desc: `Tulips are graceful spring flowers known for their bright, cup-shaped blooms.
      They represent love, renewal, and the arrival of new beginnings. A true emblem of nature’s optimism and endless energy.`,
    },
    {
      name: 'RED ROSE',
      image: './images/flower3.png',
      color: 'linear-gradient(to bottom right, #7a0b10, #b91c1c)',
      desc: `Roses are timeless symbols of love and passion.
      Their deep red petals express emotion, beauty, and strength of the heart. A true emblem of nature’s optimism and endless energy.`,
    },
    {
      name: 'CHERRY BLOSSOM',
      image: './images/flower4.png',
      color: 'linear-gradient(to bottom right, #e48aa0, #f06b9b)',
      desc: `Cherry blossoms bloom briefly, reminding us of life's fleeting beauty.
      Their soft pink petals symbolize renewal and tranquility. A true emblem of nature’s optimism and endless energy.`,
    },
    {
      name: 'ORCHID',
      image: './images/flower5.png',
      color: 'linear-gradient(to bottom right, #0f4ba8, #2b7ddf)',
      desc: `Orchids stand for elegance, grace, and mystery.
      Their exotic forms make them one of the most captivating flowers in the world. A true emblem of nature’s optimism and endless energy.`,
    },
  ]

  const [index, setIndex] = useState(0)
  const current = flowers[index]

  const handleNext = () => {
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % flowers.length)
    }, 800) 
  }

  return (
    <div
      className="hero"
      style={{ background: current.color, transition: 'background 0.6s ease' }}
    >
      <Navbar />
      <div className="hero-content">
      <motion.div
  key={current.name}
  className="hero-left"
  initial={{ y:450, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: -450, opacity: 0 }}
  transition={{ duration: 0.99, ease: 'easeInOut' }}
>
  <h1>{current.name}</h1>
  <p>{current.desc}</p>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="hero-btn"
  >
    Explore More
  </motion.button>
</motion.div>


        <div className="hero-right">
          <div className="capsule-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="capsule"
                initial={{ y: 250, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -250, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
  <motion.img
    key={current.image}
    src={current.image}
    className="flower-img"
    initial={{ scale: 0.99 }}
    animate={{ scale: 1 }}   
    exit={{ scale: 0.99 }}   
    transition={{
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.1, 
    }}
  />
</AnimatePresence>

          </div>

          <div className="down-arrow" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="arrow-icon"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
