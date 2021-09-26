import React from 'react';
import Box from '@material-ui/core/Box';
import { Text } from '../ui/Text';
import {ServiceItem} from './ServiceItem';
import '../../styles/general/service-container.scss';
import { useCustomSelector } from './../../hooks/redux-hooks/useCustomSelector';

import {Images} from '../../components/shared/shared-images/index';
import { useHistory } from 'react-router';
interface ISupportedService {
  id: number;
  iconName: string;
  title?: string;
  description?: string;
}
interface ISupportedServices {
  supportedServices: Array<ISupportedService>
}

const ServiceList:React.FC<ISupportedServices> = ({supportedServices}) =>{
  const history = useHistory();
  const handleServiceClick=(id:number)=>{
    history.push(`supported-services/${id}`);    
  }
  const renderTempl = supportedServices.map((service)=>{
    return (<Box key={service.id}  className="service-container__item">
         <ServiceItem 
            id={service.id} 
            handleClick={()=>handleServiceClick(service.id)} 
            iconName={service.iconName} 
            title={service.title} 
            description={service.description}
          />
    </Box>)
  });
  return (
  <Box className="service-container__list">{renderTempl}</Box>);
}

export const ServiceContainer = () => {
  const { selectedService }  = useCustomSelector(state=>state.categories);
  if(selectedService === null){
    return <Box>Выберите сервис</Box>
  }
 
  return (
  <Box className="service-container">
    {
      (()=>{
        if(selectedService.backImage){
          return (<img alt={selectedService.tag} 
            className="service-container__image"
            src={Images[selectedService.backImage]}/>)
        }
      })()
    }
    <Text type="secondary"  className="service-container__title" >{selectedService.name}</Text>
    {selectedService.supportedServices && <ServiceList 

    supportedServices={selectedService.supportedServices}/>}
  </Box>);
}