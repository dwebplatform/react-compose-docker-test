import React from 'react';
import Card from '@material-ui/core/Card';
import { Text } from '../ui/Text';
import { Paragraph } from '../ui/Paragraph';
import { Icons } from '../ui/Icons';
import Box from '@material-ui/core/Box';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import '../../styles/general/service-item.scss';

interface IServiceItem {
  id: number;
  iconName?: string;
  title?: string;
  description?: string;
  handleClick: (id: number) => void;
}
export const ServiceItem: React.FC<IServiceItem>
  = (
    {
      id,
      iconName = '',
      title,
      description,
      handleClick }) => {
    return (
      <Card className="supported-service-item" onClick={() => handleClick(id)}>
        <Box className="supported-service-item__icon-wrapper">
          {Icons[iconName] ? Icons[iconName] : <AccessAlarmIcon />}
        </Box>
        <Text type="basic"
          size="large"
          className="supported-service-item__title">{title}</Text>
        <Paragraph className="supported-service-item__description"
          size="sub-large">{description}</Paragraph>
      </Card>
    )
  }