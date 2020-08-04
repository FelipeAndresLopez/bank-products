import React from 'react';

import Sidebar from '../components/Sidebar';
import Profilebar from '../components/Profilebar';
import Card from '../components/Card';
import products from '../data.json';
import CardContainer from '../components/CardContainer';

const Home = () => {
  return (
    <main>
      <Sidebar />
      <section>
        <Profilebar />
        <CardContainer>
          {
            products.product.map((item) => item.accountInformation.bank === 'BANCO_1' && <Card accountInfo={item} />)
          }
        </CardContainer>
      </section>
    </main>
  );
};

export default Home;
