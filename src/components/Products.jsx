import React from 'react';
import { connect } from 'react-redux';

import products from '../data.json';
import CardsContainer from './CardsContainer';
import ToggleSwitch from './ToogleSwitch';

const insertProduct = (category, productsGrouped, productType, product) => {
  let index = category.indexOf(productType);
  if (index === -1) {
    category.push(productType);
    index = category.indexOf(productType);
    productsGrouped[index] = { productType, accounts: [product], id: index };
  } else {
    productsGrouped[index].accounts.push(product);
  }
};

const groupByCategory = (props) => {
  const productsGrouped = [];
  const category = [];

  products.forEach((product) => {
    const productType = product.accountInformation.productType;
    if (props.showOtherBanks) {
      insertProduct(category, productsGrouped, productType, product);
    } else if (product.accountInformation.bank === 'BANCO_1') {
      insertProduct(category, productsGrouped, productType, product);
    }
  });
  return productsGrouped;
};

const Products = (props) => {
  const productsGrouped = groupByCategory(props);
  return (
    <div className="products">
      <div>
        <p>Mostrar otros productos: </p>
        <ToggleSwitch />
      </div>
      {
        productsGrouped.map((product) => <CardsContainer key={product.id} productInfo={product} />)
      }
    </div>
  );
};
const mapStateToProps = (reducer) => reducer;

export default connect(mapStateToProps, null)(Products);
