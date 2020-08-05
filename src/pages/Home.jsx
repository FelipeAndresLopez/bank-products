import React from 'react';
import Sidebar from '../components/Sidebar';
import Profilebar from '../components/Profilebar';
import Products from '../components/Products';
import DetailsSidebar from '../components/DetailsSidebar';


const Home = () => {
  return (
    <main>
      <Sidebar />
      <section>
        <Profilebar />
        <Products />
      </section>
      <DetailsSidebar />
    </main>
  );
};

export default Home;
