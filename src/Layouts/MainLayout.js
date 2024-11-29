import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

import Home from './Home/Home';
// import Produit from '../Layouts/Produit/Produit';
import Contact from '../Layouts/Contact/Contact';
import Categorie from '../Layouts/Categorie/Categorie';


const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Categorie />
      <Contact />
      {/* <Produit /> */}

      <Footer />
    </div>
  );
};

export default MainLayout;
