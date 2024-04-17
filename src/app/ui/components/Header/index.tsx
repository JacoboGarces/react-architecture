import { ReactElement } from 'react';
import './style.css';
import { IItemMenu } from '../../../core/models/item-menu.model';
import { ItemMenu } from '../../elements/ItemMenu';

export const Header = (): ReactElement => {
  const menuItems: IItemMenu[] = [
    {
      text: 'Home',
      url: ''
    },
    {
      text: 'About',
      url: '/about'
    },
    {
      text: 'Services',
      url: '/services'
    },
  ];

  return (
    <header className='header'>
      <h2 className='header__title'>HEADER</h2>

      <nav>
        <ul className='header__menu'>
          {
            menuItems.map((item) => (
              <ItemMenu key={item.text} text={item.text} url={item.url}/>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};