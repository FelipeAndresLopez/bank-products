import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {
  CdtIcon,
  CreditIcon,
  CreditCardIcon,
  CurrentAccountIcon,
  DepositAccountIcon
} from './AccountTypeIcon';

import Progressbar from './Progressbar';
import { showAccountInfo } from '../Actions/Index';
import { formatCurrency } from './Utils';

class Card extends Component {
  getDataAccordingToProductType = ({ typeAccount, productAccountBalances, accountInformation, dueDate }) => {
    switch (typeAccount) {
      case 'CERTIFIED_DEPOSIT_TERM':
        return {
          icon: <CdtIcon />,
          amount: formatCurrency(productAccountBalances.saldo_pendiente_pago.amount),
          accountIdentifier: accountInformation.accountIdentifier
        };

      case 'CREDIT':
        return {
          icon: <CreditIcon />,
          amount: 'No disponible',
          accountIdentifier: accountInformation.accountIdentifier
        };

      case 'CREDIT_CARD':
        return {
          icon: <CreditCardIcon />,
          amount: formatCurrency(productAccountBalances.cupo_disponible_avances_pesos.amount),
          accountIdentifier: String(accountInformation.accountIdentifier).replace(/\d{4}(?=\d{4})/g, '**** '),
          dueDate: (
            <div>
              <p>Fecha de corte:</p>
              <h1>{moment(dueDate, 'YYYY-MM-DD hmmsss').format('LL')}</h1>
            </div>
          ),
          pagoTotalPesos: (
            <div>
              <p>Total gastado: {formatCurrency(productAccountBalances.pago_total_pesos.amount)}</p>
              <Progressbar productAccountBalances={productAccountBalances} />
            </div>
          )
        };

      case 'CURRENT_ACCOUNT':
        return {
          icon: <CurrentAccountIcon />,
          amount: formatCurrency(productAccountBalances.saldo_disponible.amount),
          accountIdentifier: accountInformation.accountIdentifier
        };

      case 'DEPOSIT_ACCOUNT':
        return {
          icon: <DepositAccountIcon />,
          amount: formatCurrency(productAccountBalances.saldo_disponible.amount),
          accountIdentifier: accountInformation.accountIdentifier
        };

      default:
        return {
          icon: null,
          amount: '',
          accountIdentifier: ''
        };
    }
  }

  render() {
    const {
      accountInformation: {
        productType
      }
    } = this.props.accountInfo;

    const accountInfo = this.getDataAccordingToProductType(this.props.accountInfo);

    return (
      <div className="card">
        <div className="card__header">
          {accountInfo.icon}
          <button type="button" className="card__header__view-details" onClick={() => this.props.showAccountInfo(this.props.accountInfo)}>
            Ver detalle
          </button>
        </div>
        <div className="card__body">
          <h1>
            {productType}
          </h1>
          <p>
            Nro. {accountInfo.accountIdentifier}
          </p>
          <br />
          <p>Saldo disponible:</p>
          <h1>{accountInfo.amount}</h1>
          {accountInfo.dueDate}
          {accountInfo.pagoTotalPesos}
        </div>
      </div>
    );
  }
}

export default connect(null, { showAccountInfo })(Card);
