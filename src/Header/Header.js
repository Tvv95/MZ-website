import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {

  render() {
    return (
      <header className="main-header">
        <img src="logo.jpg" alt="MODZADROT" className="main-header-logo" />
        <div className="button-container">
          <a download href="http://modzadrot.ru/MZ_Launcher.exe">Скачать лаунчер</a>
        </div>
      </header>
    );
  }
}

export default Header;