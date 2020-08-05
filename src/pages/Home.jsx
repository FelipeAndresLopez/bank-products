import React from 'react';
import MenuSidebar from '../components/MenuSidebar';
import Profilebar from '../components/Profilebar';
import Products from '../components/Products';
import DetailsSidebar from '../components/DetailsSidebar';

const Home = () => {
  return (
    <main>
      <MenuSidebar />
      <section>
        <Profilebar />
        <Products />
      </section>
      <DetailsSidebar />
    </main>
  );
};

export default Home;
