import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

class App extends React.Component {

  render() {
    const description = this.props.description;
    return (
        <div className="wrapper">
          <YMInitializer accounts={[67282990]} />
          <Header />
          <Main description={description} />
          <Footer />
        </div>
    );
  }
}

export default App;
