import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { home, school, person } from 'ionicons/icons';
import './CurvedTabBar.css';

interface TabItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

const tabs: TabItem[] = [
  { id: 'tab1', label: 'Home', icon: home, path: '/tab1' },
  { id: 'tab2', label: 'Academy', icon: school, path: '/tab2' },
  { id: 'tab3', label: 'Profile', icon: person, path: '/tab3' },
];

const CurvedTabBar: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const handleTabClick = (path: string) => {
    history.push(path);
  };

  return (
    <div className="curved-tab-bar">
      <div className="tab-bar-container">
        <div className="tab-bar-background">
          {tabs.map((tab, index) => {
            const isActive = location.pathname === tab.path;
            return (
              <button
                key={tab.id}
                className={`tab-button ${isActive ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.path)}
                aria-label={tab.label}
              >
                <div className="tab-icon-container">
                  <IonIcon 
                    icon={tab.icon} 
                    className={`tab-icon ${isActive ? 'active' : ''}`}
                  />
                </div>
                <span className={`tab-label ${isActive ? 'active' : ''}`}>
                  {tab.label}
                </span>
                {isActive && <div className="active-indicator"></div>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurvedTabBar;
