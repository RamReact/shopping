import React from 'react';
import './Tab.css';
import CategoryData from '../../Assets/json/category.json';
import TechCategoryData from '../../Assets/json/Techcategory.json';
import DetailsComponent from '../product/Details';
import { CategoryItem } from '../../Typescript/category';
import { TechCategoryDataArray } from '../../Typescript/TechCategory';
import TechInformation from '../product/Techinformation';

//---------------------------------------------- Typescript Data Declarations -----------------------------------------//
interface TabProps {
  selectedTab: string;
  Catid: string;
  onChange: (tabName: string) => void;
}

interface TabState {
  currentTab: string;
}


//---------------------------------------------- Typescript Data Declarations -----------------------------------------//

class TabComponent extends React.Component<TabProps, TabState> {
  constructor(props: TabProps) {
    super(props);
    this.state = {
      currentTab: this.props.selectedTab
    };
  }

  setActiveTab = (tabName: string) => {
    this.setState({ currentTab: tabName });
    this.props.onChange(tabName);
  };

  render() {
    const { currentTab } = this.state;
   
    return (
      <div>
        <div className="tab-container">
          <button
            onClick={() => this.setActiveTab('Tab1')}
            className={`tabs ${currentTab === 'Tab1' ? 'highlight' : 'nothighlight'}`}
            style={{ borderTopLeftRadius: 10 }}
          >
            Details
          </button>
          <button
            onClick={() => this.setActiveTab('Tab2')}
            className={`tabs ${currentTab === 'Tab2' ? 'highlight' : 'nothighlight'}`}
          >
            Technical Information
          </button>
        </div>
        <div className="tabcontainer">
          {currentTab === 'Tab1' &&(
            <DetailsComponent cateId={this?.props?.Catid || ''} />
          )}
          {currentTab === 'Tab2' && 
          <TechInformation catId={this?.props?.Catid || ''} />
          }
        </div>
      </div>
    );
  }
}

export default TabComponent;
