import React from 'react';
import adlLogo from '../assets/static/adl-logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={adlLogo} alt="Logo" />
      </div>

      <ul className="sidebar__options">
        <li>Tus productos</li>
        <li>
          Tu origanizador
          <br />
          <small>¡Nuevo!</small>
        </li>
        <li>Pagos</li>
        <li>Transferencias</li>
        <li>Certificados</li>
        <li>Seguridad</li>
      </ul>
    </div>
  );
};

export default Sidebar;
