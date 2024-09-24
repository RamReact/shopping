// TabComponent.tsx
import React from 'react';
import './Tab.css'
interface TabProps {
  selectedTab: string;
  onChange: (tabName: string) => void;
}

interface TabState {
  currentTab: string;
}

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
            className={`tabs ${
              currentTab === 'Tab1' ? 'highlight':'nothighlight'
            }`}
            style={{borderTopLeftRadius:10}}
          >
            Details
          </button>
          <button
            onClick={() => this.setActiveTab('Tab2')}
            className={`tabs ${
              currentTab === 'Tab2' ? 'highlight':'nothighlight'
            }`}
          >
            Technical Information
          </button>
        </div>
        <div className="tabcontainer">
          {
             currentTab === 'Tab1' && 
                <div>Content of Tab 1</div>
          }
          {
             currentTab === 'Tab2' && 
             <div>Content of Tab 2</div>
         }
        </div>
      </div>
    );
  }
}

export default TabComponent;
