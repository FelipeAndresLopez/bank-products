import React, { Component } from 'react';
import { CdtIcon, CaIcon } from '../components/AccountTypeIcon';
import PropTypes from 'prop-types';

class Card extends Component {

  setIcon = (productType) => {
    switch (productType) {
      case 'DEPOSIT_ACCOUNT':
        return <CdtIcon />;

      default:
        return null;
    }
  }

  render() {
    const {
      accountInformation: {
        accountIdentifier,
        productType
      },
      productAccountBalances: {
        saldo_disponible: { amount }
      }
    } = this.props.accountInfo;

    return (
      <div className="card">
        <div className="card__header">
          {this.setIcon(productType)}
          <button type="button" className="card__header__view-details">
            Ver detalle
          </button>
        </div>
        <div className="card__body">
          <h1>
            {productType}
          </h1>
          <p>
            Nro. {accountIdentifier}
          </p>
          <br />
          <p>Saldo disponible:</p>
          <h1>{amount}</h1>
        </div>
      </div>
    );
  }
}

export default Card;
