import React from 'react';

class DetailsSidebar extends React.Component {

  render() {

    console.log(this.props)
    return (
      <div className="details-sidebar">

        <ul className="sidebar__options">
          <li>{this.props.test}</li>
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
  }
};

export default DetailsSidebar;
