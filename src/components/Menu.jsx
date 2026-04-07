'use client';

import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { getProducts } from '../api/index.js'

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allCoffees, setAllCoffees] = useState([]);

  useEffect(() => {
    getProducts().then(({ data }) => {
      setAllCoffees(data);
    });
  }, []);

  useGSAP(() => {
    if (allCoffees.length === 0) return;
    gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo('.coffee img', { opacity: 0, xPercent: -100 }, {
      xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
    })
    gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
      yPercent: 0, opacity: 100, ease: 'power1.inOut'
    })
    gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
      yPercent: 0, opacity: 100, ease: 'power1.inOut'
    })
  }, [currentIndex, allCoffees]);

  if (allCoffees.length === 0) return null;

  const totalCoffees = allCoffees.length;

  const goToSlide = (index) => {
    setCurrentIndex((index + totalCoffees) % totalCoffees);
  }

  const getCoffeeAt = (indexOffset) => {
    return allCoffees[(currentIndex + indexOffset + totalCoffees) % totalCoffees]
  }

  const currentCoffee = getCoffeeAt(0);
  const prevCoffee = getCoffeeAt(-1);
  const nextCoffee = getCoffeeAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

      <h2 id="menu-heading" className="sr-only">Cafe Menu</h2>

      <div className="content">
        <div className="arrows">
          <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
            <span>{prevCoffee.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
          </button>

          <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
            <span>{nextCoffee.name}</span>
            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="coffee">
          <img
            src={currentCoffee.image ? `data:image/jpeg;base64,${currentCoffee.image}` : '/images/drink1.png'}
            className="object-contain"
            alt={currentCoffee.name}
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCoffee.name}</p>
          </div>

          <div className="details">
            <h2>{currentCoffee.subtitle}</h2>
            <p>{currentCoffee.price}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu