import React from 'react';
import accountCircleIcon from '../assets/static/account_circle.png';
import notificationsIcon from '../assets/static/notifications.png';
import exitIcon from '../assets/static/exit_to_app.png';

const Profilebar = () => {
  return (
    <div className="profile">
      <div className="profile__username">
        <h2>
          Buenos días, Felipe Andrés.
        </h2>
      </div>
      <div className="profile__option">
        <p>Perfil</p>
        <img src={accountCircleIcon} alt="Profile" />
      </div>
      <div className="profile__option">
        <p>Alertas</p>
        <img src={notificationsIcon} alt="Notification" />
      </div>
      <div className="profile__option">
        <p>Salida segura</p>
        <img src={exitIcon} alt="Exit" />
      </div>
    </div>
  );
};

export default Profilebar;
