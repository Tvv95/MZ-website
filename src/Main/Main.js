import React from 'react';
import './Main.css';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import dompurify from 'dompurify';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      patchNames: [],
      patchesContent: [],
      btnActiveIndex: null,
      tablesList: {},
    }
  }

  toogleTable = (e, index) => {
    e.preventDefault();
    this.state.btnActiveIndex === null ? this.setState({ btnActiveIndex: index }) : this.setState({ btnActiveIndex: null });
  }

  componentDidMount() {
    fetch('./patchList/patchList.json')
      .then(response => response.json())
      .then(patchNames => {
        this.setState({ patchNames: Object.keys(patchNames) });
        return Object.values(patchNames);
      })
      .then(patchUrlArr => Promise.all(patchUrlArr.map(current => fetch(current))))
      .then(responses => Promise.all(responses.map(res => res.text())))
      .then(resultText => this.setState({ patchesContent: resultText }))
    fetch('./tables/tablesList.json')
      .then(responseTables => responseTables.json())
      .then(resultTables => this.setState({ tablesList: resultTables }))
  }

  render() {
    const description = this.props.description;
    const sanitizer = dompurify.sanitize;

    return (
      <main className="tabContainer">
        <Tabs defaultTab="hor-tab-one" className="tabs main-tab">
          <TabList className="mainThemes">
            <Tab tabFor="hor-tab-one" className="tabHeader">Описание сборки</Tab>
            <Tab tabFor="hor-tab-two" className="tabHeader">Changelogs</Tab>
            <Tab tabFor="hor-tab-three" className="tabHeader">Таблицы</Tab>
          </TabList>

          <TabPanel tabId="hor-tab-one" className='description horTabs'>
            {description}
          </TabPanel>

          <TabPanel tabId="hor-tab-two" className='horTabs'>
            <Tabs defaultTab="vert-tab-0" className="tabs" vertical>
              <TabList className='patchNumbList'>
                {this.state.patchNames.map((current, index) => {
                  return <Tab tabFor={`vert-tab-${index}`} className="patches" key={`patchName_${index}`}>{current}</Tab>;
                })}
              </TabList>
              {this.state.patchesContent.map((current, index) => {
                return (
                  <TabPanel tabId={`vert-tab-${index}`} key={`patchCont_${index}`} className='description'
                    dangerouslySetInnerHTML={{ __html: sanitizer(current) }} />
                );
              })}
            </Tabs>
          </TabPanel>

          <TabPanel tabId="hor-tab-three" className='horTabs listTableBtn'>
            {Object.keys(this.state.tablesList).map((current, index) => {
              return <button className='btnOpenTable' onClick={(e) => this.toogleTable(e, current)} key={`tables_${index}`}>{current}</button>;
            })}
            {this.state.btnActiveIndex !== null ?
              <React.Fragment>
                <iframe className='activeTable' title="currentTable" src={this.state.tablesList[this.state.btnActiveIndex]}></iframe>
                <button className='btnCloseTable' onClick={this.toogleTable}></button>
              </React.Fragment>
              : null}
          </TabPanel>
        </Tabs>
      </main>
    );
  }
}

export default Main;