import React from 'react';
import './Main.css';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

class Main extends React.Component {

  render() {
    const description = this.props.description;
    const patchList = this.props.patchList;
    return (
      <main className="tabContainer">
        <Tabs defaultTab="hor-tab-one" className="tabs main-tab">
          <TabList className="mainThemes">
            <Tab tabFor="hor-tab-one" className="tabHeader">Описание сборки</Tab>
            <Tab tabFor="hor-tab-two" className="tabHeader">Патчноты</Tab>
          </TabList>

          <TabPanel tabId="hor-tab-one" className='description horTabs'>
            {description}
          </TabPanel>

          <TabPanel tabId="hor-tab-two" className='horTabs'>
            <Tabs defaultTab="vert-tab-0" className="tabs" vertical>
              <TabList className='patchNumbList'>
                {Object.keys(patchList).map((current, index) => {
                  return <Tab tabFor={`vert-tab-${index}`} className="patches" key={current}>{current}</Tab>;
                })}
              </TabList>
              {Object.entries(patchList).map((current, index) => {
                return (
                  <TabPanel tabId={`vert-tab-${index}`} key={current[0]} className='description'>
                    {current[1]}
                  </TabPanel>
                );
              })}
            </Tabs>
          </TabPanel>
        </Tabs>
      </main>
    );
  }
}

export default Main;