import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryCards from '../components/CategoryCards';
import Workflow from '../components/Workflow';
import CommunityLinks from '../components/CommunityLinks';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryCards />
        <Workflow />
        <CommunityLinks />
      </main>
      <Footer />
    </>
  );
}

export default Home;
