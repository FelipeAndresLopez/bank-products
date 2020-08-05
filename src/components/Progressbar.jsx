import React from 'react';

const Progressbar = ({ productAccountBalances }) => {
  const { pago_total_pesos: pagoTotalPesos, cupo_total: cupoTotal } = productAccountBalances;
  const progress = (pagoTotalPesos.amount * 100) / cupoTotal.amount;
  return (
    <div className="progressbar">
      <div className="progressbar__progress" style={{ width: `${progress}%` }} />
    </div>
  )
}

export default Progressbar
