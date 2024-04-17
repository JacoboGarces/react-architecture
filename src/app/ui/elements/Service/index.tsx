  
import { ReactElement } from 'react';
import './style.css';
import { IService } from '../../../core/models/service.model';

export const Service = ({ name, price }: IService): ReactElement => {
  return (
    <li className='item-menu'>
      {name}
      {price}
    </li>
  );
};