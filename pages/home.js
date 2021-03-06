import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import LandingHome from '../components/landinghome';

  export default function AutoGrid() {

  return (
    <div className="mx-auto">
          <div className='mx-auto'>
            <Header />
            <LandingHome />
            <Footer />
        </div>
    </div>
  );
}