import React from 'react';
import adlLogo from '../assets/static/adl-logo.png';

const MenuSidebar = () => {
  return (
    <div className="menu-sidebar">
      <div className="menu-sidebar__logo">
        <img src={adlLogo} alt="Logo" />
      </div>
      <ul className="menu-sidebar__options">
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

export default MenuSidebar;
