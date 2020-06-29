import React from 'react';
import './App.css';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const patchList = this.props.patchList;
    const description = this.props.description;
    return (
        <div className="wrapper">
          <Header />
          <Main patchList={patchList} description={description} />
          <Footer />
        </div>
    );
  }
}

export default App;
