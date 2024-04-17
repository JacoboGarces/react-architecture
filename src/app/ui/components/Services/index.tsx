  
import { ReactElement } from 'react';
import { IService } from '../../../core/models/service.model';
import { Service } from '../../elements/Service';
import './style.css';


interface IServicesProps {
  services: IService[];
}
export const Services = ({ services }: IServicesProps): ReactElement => {
  return (
    <ul className='header__menu'>
      {
        services.map((service) => (
          <Service key={service.name} name={service.name} price={service.price}/>
        ))
      }
    </ul>
  );
};