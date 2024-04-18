// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <div>
      <Header onToggleLanguage={() => console.log('Toggle Language')} />
      <Section 
        title="Discover 'Canales en Costa Rica'" 
        content="Introducing 'Canales en Costa Rica', a high-end real estate development offering exclusive investment opportunities in the transformation of 'Pelicanos Resort'. Located in the lush, vibrant region of Quepos, this project captures the essence of Costa Rican coastal landscape and luxury living."
      />
      <Section 
        title="Competitive Advantages of Investing" 
        content="Canales en Costa Rica offers: Premium Infrastructure with access to marinas and luxury properties, Strategic Location near key tourist attractions and direct access to the Pacific Ocean, and Long-Term Growth Potential with solid financial projections showing high profitability."
      />
      <CallToAction 
        title="Join the Exclusivity of 'Canales en Costa Rica'" 
        buttonText="Request Information" 
        onAction={() => console.log('Request Info')}
      />
      <Footer />
    </div>
  );
};

export default Home;
