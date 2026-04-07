import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useState, useEffect } from 'react';
import { getCategories, getProducts } from '../api/index.js'

const BASE_URL = 'http://192.168.68.114:8888/';

const CoffeeMenu = () => {
  const [menuByCategory, setMenuByCategory] = useState([]);

  useEffect(() => {
    Promise.all([getCategories(), getProducts()])
      .then(([categoriesRes, productsRes]) => {
        const categories = categoriesRes.data;
        const products = productsRes.data;

        const grouped = categories.map(cat => ({
          id: cat.id,
          name: cat.name,
          items: products.filter(p => p.category_id === cat.id)
        })).filter(cat => cat.items.length > 0);

        setMenuByCategory(grouped);
      });
  }, []);

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#coffees',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      }
    })

    parallaxTimeline
      .from('#c-left-leaf', { x: -100, y: 100 })
      .from('#c-right-leaf', { x: 100, y: 100 })
  })

  return (
    <section id="coffees" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

      <div className="list">
        {menuByCategory.map((category) => (
          <div key={category.id} className="popular">
            <h2>{category.name}</h2>
            <ul>
              {category.items.map(({ id, name, subtitle, price }) => (
                <li key={id}>
                  <div className="md:me-28">
                    <h3>{name}</h3>
                    <p>{subtitle}</p>
                  </div>
                  <span>- {price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoffeeMenu