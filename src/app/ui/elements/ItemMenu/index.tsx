import { ReactElement } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { IItemMenu } from '../../../core/models/item-menu.model';

export const ItemMenu = ({ text, url }: IItemMenu): ReactElement => {
  return (
    <li className='item-menu'>
      <Link className='item-menu__link' to={url}>{text}</Link>
    </li>
  );
};