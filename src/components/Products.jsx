import React from 'react';
import products from '../data.json';
import CardsContainer from '../components/CardsContainer';

const groupByBankAndCategory = () => {
  const productsGrouped = [];
  const category = [];
  products.forEach((product) => {
    const productType = product.accountInformation.productType;
    let index = category.indexOf(productType);
    if (index === -1) {
      category.push(productType);
      index = category.indexOf(productType);
      productsGrouped[index] = { productType, accounts: [product] };
    } else {
      productsGrouped[index].accounts.push(product);
    }
  });
  return productsGrouped;
};

const Products = () => {
  const productsGrouped = groupByBankAndCategory();
  return (
    <div className="products">
      {
        productsGrouped.map((product) => <CardsContainer productInfo={product} />)
      }
    </div>
  );
};

export default Products;
