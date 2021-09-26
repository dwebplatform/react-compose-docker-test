import classnames from 'classnames';
import { Text } from '../components/ui/Text';
import Box from '@material-ui/core/Box';
import { Icons } from '../components/ui/Icons';

import {IService} from '../reducers/categoryReducer';

export const serviceListRenderer = (services: Array<IService>, selectedService: IService|null, onClick: (tag: string) => void) => {
  return services.map((service: IService) => {
    let selectedClass = "";
    if (selectedService && selectedService.id === service.id) {
      selectedClass = "service-menu__item--chosen";
    }
    return (
      <Box key={service.id} onClick={(e) => onClick(service.tag)} 
      className={classnames('service-menu__item', selectedClass)}>
        <Box className="service-menu__icon-wrapper">
          {Icons[service.iconName] ? Icons[service.iconName] : ''}
        </Box>
        <Text className="service-menu__body">{service.name}</Text>
      </Box>);
  })
}