import React, { Component } from 'react';
import { CdtIcon, CreditIcon, CreditCardIcon, CurrentAccountIcon, DepositAccountIcon } from '../components/AccountTypeIcon';
import DetailsSidebar from './DetailsSidebar';

class Card extends Component {

  getDataAccordingToProductType = (accountInfo) => {
    switch (accountInfo.typeAccount) {
      case 'CERTIFIED_DEPOSIT_TERM':
        return {
          icon: <CdtIcon />,
          amount: accountInfo.productAccountBalances.saldo_pendiente_pago.amount
        };

      case 'CREDIT':
        return {
          icon: <CreditIcon />,
          amount: accountInfo.id
        };

      case 'CREDIT_CARD':
        return {
          icon: <CreditCardIcon />,
          amount: accountInfo.productAccountBalances.saldo_actual.amount
        };

      case 'CURRENT_ACCOUNT':
        return {
          icon: <CurrentAccountIcon />,
          amount: accountInfo.productAccountBalances.saldo_disponible.amount
        };

      case 'DEPOSIT_ACCOUNT':
        return {
          icon: <DepositAccountIcon />,
          amount: accountInfo.productAccountBalances.saldo_disponible.amount
        };

      default:
        return {
          icon: null,
          amount: ''
        };
    }
  }

  render() {
    const {
      accountInformation: {
        accountIdentifier,
        productType
      }
    } = this.props.accountInfo;

    const accountInfo = this.getDataAccordingToProductType(this.props.accountInfo);
    console.log(accountInfo)

    return (
      <div className="card">
        <div className="card__header">
          {accountInfo.icon}
          <button type="button" className="card__header__view-details" onClick={() => (<DetailsSidebar test="Hello" />)}>
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
          <h1>{accountInfo.amount}</h1>
        </div>
      </div>
    );
  }
}

export default Card;
