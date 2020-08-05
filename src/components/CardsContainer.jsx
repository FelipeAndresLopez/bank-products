import React from 'react';
import Card from './Card';

const CardsContainer = ({ productInfo }) => (
  <div className="cards-container">
    <h1 className="cards-container__title">
      {`${productInfo.productType} (${productInfo.accounts.length})`}
    </h1>
    <div className="cards-container__body">
      {productInfo.accounts.map((account) => <Card key={account.id} accountInfo={account} />)}
    </div>
  </div>
);

export default CardsContainer;
