import React from 'react';
import Card from './Card';

export const CardsContainer = ({ productInfo }) => (
  <div className="cards-container">
    <h1 className="cards-container__title">
      {`${productInfo.productType} (${productInfo.accounts.length})`}
    </h1>
    <div className="cards-container__body">

      {productInfo.accounts.map((account) => <Card accountInfo={account} />)}
    </div>
  </div>
);

export default CardsContainer;
