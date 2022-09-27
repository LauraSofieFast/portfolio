import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Hero from './components/Hero/Hero';
import { useEffect, useState } from "react";
import About from './components/Aboutme/About';
import Projects from './components/Projects/Projects.js';
import DotRing from './components/Cursor/DotRing';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js'



function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
        const response = await fetch("https://portfolio.fastmultimedia.dk/wp-json/wp/v2/posts?_embed");
        const data = await response.json();
        console.log(data);
        setPosts(data);
    }
    getData();
}, []);


 return (
  <>
<DotRing />

<body>
<Navbar />
<section className="Hero-section">
<Hero />
</section>

<section className="About-section">
<About />
</section>

<section className="Projects-section">
<Projects />
</section>

<section className="Contact-section">
  <Contact />
</section>
<Footer />
</body>

</>
);
}


export default App;
