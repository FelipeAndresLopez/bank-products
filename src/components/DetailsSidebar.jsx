import React from 'react';
import { connect } from 'react-redux';
import closeIcon from '../assets/static/close.png';
import { showAccountInfo } from '../Actions/Index';
import Detail from './Detail';

const DetailsSidebar = (props) => {
  const { accountInfo } = props;
  if (accountInfo) {
    return (
      <div className="details-sidebar">
        <div className="details-sidebar__header">
          <button type="button" onClick={() => props.showAccountInfo(null)}>
            <img src={closeIcon} alt="Close details side bar" />
          </button>
        </div>
        <div className="details-sidebar__body">
          <Detail label="Tipo de cuenta" value={accountInfo.typeAccount} />
          <Detail label="Nro." value={accountInfo.accountInformation.accountIdentifier} />
          <Detail label="Banco" value={accountInfo.accountInformation.bank} />
          <Detail label="Estado" value={accountInfo.status} />
          <Detail label="Fecha de vencimiento" value={accountInfo.dueDate} />
          <Detail label="Asegurada" value={accountInfo.locked ? 'Si' : 'No'} />
          <Detail label="Última transacción" value={accountInfo.lastTransactionDate} />
          <hr />
          <Detail label="Saldo actual" value={accountInfo.productAccountBalances?.saldo_actual?.amount} />
          <Detail label="Saldo disponible" value={accountInfo.productAccountBalances?.saldo_disponible?.amount} />
          <Detail label="Saldo de ayer" value={accountInfo.productAccountBalances?.saldo_ayer?.amount} />
          <Detail label="Saldo en canje" value={accountInfo.productAccountBalances?.saldo_canje?.amount} />
          <Detail label="Saldo en canje 24 horas" value={accountInfo.productAccountBalances?.saldo_canje_24_horas?.amount} />
          <Detail label="Saldo en canje 48 horas" value={accountInfo.productAccountBalances?.saldo_canje_48_horas?.amount} />
          <Detail label="Saldo en canje 72 horas" value={accountInfo.productAccountBalances?.saldo_canje_72_horas?.amount} />
          <p>Pagos</p>
          <p>Transferencias</p>
          <p>Certificados</p>
          <p>Seguridad</p>
        </div>
      </div>
    );
  }

  return null;
};

const mapStateToProps = (reducer) => {
  return reducer;
};

export default connect(mapStateToProps, { showAccountInfo })(DetailsSidebar);
