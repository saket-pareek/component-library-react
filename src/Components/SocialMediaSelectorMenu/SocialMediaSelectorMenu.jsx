import { useEffect, useState, useRef } from 'react';
import './SocialMediaSelectorMenu.scss';
import data from './data';

function SocialMediaSelectorMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState(null);
  const menuRef = useRef(null);

  const { title, Icon } = selectedSocial || {};

  const handleSocialSelection = id => {
    setSelectedSocial(data.find(item => item.id === id));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current?.contains(e.target)) return;
      setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className='social-media-selector-menu mt-[120px]'>
      <div className='container flex w-[400px] flex-col'>
        <div
          onClick={() => setIsOpen(o => !o)}
          className='dropdown flex h-[50px] cursor-pointer items-center justify-between bg-[lightgray] px-[20px] py-[10px] opacity-40'>
          <div className='flex items-center gap-[10px] capitalize'>
            {selectedSocial ? (
              <>
                <Icon className='h-[25px] w-[25px]' />
                <span>{title}</span>
              </>
            ) : (
              'Social Media'
            )}
          </div>
          <span
            className={`transform transition-transform duration-300 ${
              isOpen ? 'rotate-0' : 'rotate-180'
            }`}>
            ∧
          </span>
        </div>
        {isOpen && (
          <ul className='social-media-selector-menu__dropdown mt-[40px] list-none bg-[lightgrey] p-[10px] opacity-40'>
            {data.map(({ id, title, Icon }) => (
              <li
                key={id}
                className='group cursor-pointer p-[20px] hover:bg-gray-400'
                onClick={() => handleSocialSelection(id)}>
                <div className='flex transform items-center gap-[10px] capitalize transition-transform duration-300 group-hover:translate-x-[15px]'>
                  <Icon className='h-[25px] w-[25px]' />
                  <span>{title}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SocialMediaSelectorMenu;
