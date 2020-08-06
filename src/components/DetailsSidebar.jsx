import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import closeIcon from '../assets/static/close.png';
import { showAccountInfo } from '../Actions/Index';
import Detail from './Detail';
import { formatCurrency } from './Utils';

const setDetailsByTypeAccount = (accountInfo) => {
  const dateFormats = ['YYYY-MM-DD hmmsss'];
  switch (accountInfo.typeAccount) {
    case 'CERTIFIED_DEPOSIT_TERM':
      return (
        <>
          <Detail label="Fecha de apertura" value={moment(accountInfo.openedDate, dateFormats).format('LL')} />
          <Detail label="Fecha de cierre" value={moment(accountInfo.closedDate, dateFormats).format('LL')} />
          <Detail label="Fecha de vencimiento" value={moment(accountInfo.dueDate, dateFormats).format('LL')} />
          <Detail label="Última transacción" value={moment(accountInfo.lastTransactionDate, dateFormats).format('LL')} />
          <Detail label="Asegurada" value={accountInfo.locked ? 'Si' : 'No'} />
          <Detail label="Periocidad de pago" value={`${accountInfo.periodicityOfPayment.count} días`} />
          <hr />
          <Detail label="Interes pagado" value={formatCurrency(accountInfo.productAccountBalances?.interes_pagado?.amount)} />
          <Detail label="Intereses causados" value={formatCurrency(accountInfo.productAccountBalances?.intereses_causados?.amount)} />
          <Detail label="Retefuente" value={formatCurrency(accountInfo.productAccountBalances?.retefuente?.amount)} />
          <Detail label="Saldo pendiente pago" value={formatCurrency(accountInfo.productAccountBalances?.saldo_pendiente_pago?.amount)} />
          <Detail label="Tasa nominal" value={formatCurrency(accountInfo.productAccountBalances?.tasa_nominal?.rate)} />
          <Detail label="Valor constitución" value={formatCurrency(accountInfo.productAccountBalances?.valor_constitucion?.amount)} />
          <Detail label="Término" value={`${accountInfo.term?.count} días`} />
        </>
      );

    case 'CREDIT':
      return <Detail label="Asegurada" value={accountInfo.locked ? 'Si' : 'No'} />;

    case 'CREDIT_CARD':
      return (
        <>
          <Detail label="Capacidad" value={accountInfo.capacity} />
          <Detail label="Fecha de vencimiento" value={moment(accountInfo.dueDate, dateFormats).format('LL')} />
          <Detail label="Asegurada" value={accountInfo.locked ? 'Si' : 'No'} />
          <hr />
          <Detail label="Cupo disponible avance en pesos" value={formatCurrency(accountInfo.productAccountBalances?.cupo_disponible_avances_pesos?.amount)} />
          <Detail label="Cupo disponible compras en pesos" value={formatCurrency(accountInfo.productAccountBalances?.cupo_disponible_compras_pesos?.amount)} />
          <Detail label="Cupo total" value={formatCurrency(accountInfo.productAccountBalances?.cupo_total?.amount)} />
          <Detail label="Pago total pesos" value={formatCurrency(accountInfo.productAccountBalances?.pago_total_pesos?.amount)} />
          <Detail label="Saldo actual" value={formatCurrency(accountInfo.productAccountBalances?.saldo_actual?.amount)} />
          <Detail label="Saldo mora pesos" value={formatCurrency(accountInfo.productAccountBalances?.saldo_mora_pesos?.amount)} />
          <Detail label="Valor pago mínimo" value={formatCurrency(accountInfo.productAccountBalances?.valor_pago_minimo?.amount)} />
        </>
      );

    case 'CURRENT_ACCOUNT':
      return (
        <>
          <Detail label="Fecha de vencimiento" value={moment(accountInfo.dueDate, dateFormats).format('LL')} />
          <Detail label="Última transacción" value={moment(accountInfo.lastTransactionDate, dateFormats).format('LL')} />
          <Detail label="Asegurada" value={accountInfo.locked ? 'Si' : 'No'} />
          <Detail label="Dis de sobregiro" value={accountInfo.overDraftDays} />
          <hr />
          <Detail label="Cupo aprobado remesas" value={formatCurrency(accountInfo.productAccountBalances?.cupo_aprobado_remesas?.amount)} />
          <Detail label="Cupo disponible sobregiro" value={formatCurrency(accountInfo.productAccountBalances?.cupo_disponible_sobregiro?.amount)} />
          <Detail label="Cupos aprobado sobregiro" value={formatCurrency(accountInfo.productAccountBalances?.cupos_aprobado_sobregiro?.amount)} />
          <Detail label="Saldo actual" value={accountInfo.productAccountBalances?.saldo_actual?.amount} />
          <Detail label="Saldo disponible" value={accountInfo.productAccountBalances?.saldo_disponible?.amount} />
          <Detail label="Saldo de ayer" value={accountInfo.productAccountBalances?.saldo_ayer?.amount} />
          <Detail label="Saldo en canje" value={accountInfo.productAccountBalances?.saldo_canje?.amount} />
          <Detail label="Saldo en canje 24 horas" value={accountInfo.productAccountBalances?.saldo_canje_24_horas?.amount} />
          <Detail label="Saldo en canje 48 horas" value={accountInfo.productAccountBalances?.saldo_canje_48_horas?.amount} />
          <Detail label="Saldo en canje 72 horas" value={accountInfo.productAccountBalances?.saldo_canje_72_horas?.amount} />
          <Detail label="Estado" value={accountInfo.status} />
        </>
      );

    case 'DEPOSIT_ACCOUNT':
      return (
        <>
          <Detail label="Fecha de vencimiento" value={moment(accountInfo.dueDate, dateFormats).format('LL')} />
          <Detail label="Última transacción" value={moment(accountInfo.lastTransactionDate, dateFormats).format('LL')} />
          <Detail label="Asegurada" value={accountInfo.locked ? 'Si' : 'No'} />
          <Detail label="Estado" value={accountInfo.status} />
          <hr />
          <Detail label="Saldo actual" value={formatCurrency(accountInfo.productAccountBalances?.saldo_actual?.amount)} />
          <Detail label="Saldo disponible" value={formatCurrency(accountInfo.productAccountBalances?.saldo_disponible?.amount)} />
          <Detail label="Saldo de ayer" value={formatCurrency(accountInfo.productAccountBalances?.saldo_ayer?.amount)} />
          <Detail label="Saldo en canje" value={formatCurrency(accountInfo.productAccountBalances?.saldo_canje?.amount)} />
          <Detail label="Saldo en canje 24 horas" value={formatCurrency(accountInfo.productAccountBalances?.saldo_canje_24_horas?.amount)} />
          <Detail label="Saldo en canje 48 horas" value={formatCurrency(accountInfo.productAccountBalances?.saldo_canje_48_horas?.amount)} />
          <Detail label="Saldo en canje 72 horas" value={formatCurrency(accountInfo.productAccountBalances?.saldo_canje_72_horas?.amount)} />
        </>
      );

    default:
      return null;
  }
};

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
          {setDetailsByTypeAccount(accountInfo)}
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
