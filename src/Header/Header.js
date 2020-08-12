import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {

  render() {
    return (
      <header className="main-header">
        <a href="http://modzadrot.ru" target="_self"><img src="logo.jpg" alt="MODZADROT" className="main-header-logo" /></a>
        <div className="button-container">
          <a download href="http://modzadrot.ru/MZ_Launcher.exe">Скачать лаунчер</a>
        </div>
      </header>
    );
  }
}

export default Header;