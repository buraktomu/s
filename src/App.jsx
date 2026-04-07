import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CoffeeMenu from './components/CoffeeMenu.jsx'
import About from './components/About.jsx'
import Art from './components/Art.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
	<main>
	
	 <Hero />
	 <CoffeeMenu />
	 <About />
	 <Art />
	 <Menu />
	 <Contact />
	</main>
 )
}

export default App
