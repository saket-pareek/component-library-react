import { useState } from 'react';
import './Tabs.scss';
import data from './data';

function Tabs() {
  const [activeTab, setActiveTab] = useState(data[0]?.id ?? null);
  const selectedTab = data.find(el => el.id === activeTab);

  return (
    <div className='tabs'>
      <img className='tabs__image' src={`${selectedTab.img}`} alt='' />
      <div className='tabs__content'>
        <div className='tabs__header'>
          {data.map(({ id, title }) => {
            const isActive = id === selectedTab.id ? 'tabs__tab--active' : '';
            return (
              <button
                onClick={() => setActiveTab(id)}
                key={id}
                className={`tabs__tab ${isActive}`}
                data-tab={`${id}`}>
                {title}
              </button>
            );
          })}
        </div>
        <div className='tabs__body'>
          <h3 className='tabs__title'>{selectedTab.title}</h3>
          <p className='tabs__text'>{selectedTab.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
