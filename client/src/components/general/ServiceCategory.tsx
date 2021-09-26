import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {changeServiceAction} from '../../actions/changeServiceAction'
import {serviceListRenderer} from '../../renderers/serviceListRenderer';
import Box from '@material-ui/core/Box';
import { Text } from '../ui/Text';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {useCustomSelector} from '../../hooks/redux-hooks/useCustomSelector';
import { useCustomDispatch } from '../../hooks/redux-hooks/useCustomDispatch';
import { useHistory } from "react-router-dom";

import '../../styles/general/service-menu-style.scss';

interface IServiceCategory{
  title: string;
  services: Array<any>;
}
export const ServiceCategory : React.FC<IServiceCategory>=({title,services})=>{
  const { toggleMenuAction } = useCustomDispatch();
  const { selectedService  } = useCustomSelector(state=>state.categories);
  const history = useHistory();
  const handleChooseService=(tag:string)=>{
    history.push(`/services/${tag}`);
    toggleMenuAction();
  };
  const [isExpanded, setExpanded] = useState(true);
  const [isAccordeonHovered,setAccordeonHovered] = useState(false);
  const renderService = serviceListRenderer(services, selectedService, handleChooseService)
  return (<Box className="service-menu">
  <Accordion style={{width:'100%', boxShadow:'none'  }} 
  expanded={isExpanded} onChange={()=>setExpanded(!isExpanded)}>
    <AccordionSummary 
    expandIcon={<ExpandMoreIcon />}
    onMouseOver={()=>{ setAccordeonHovered(true)}}
    onMouseLeave={()=>{setAccordeonHovered(false)}}
    style={{
      height:'36px',
      minHeight:'36px',
    }}
    className={`${isAccordeonHovered?'service-menu-summary--hovered':''}`}
    >
      <Text 
        type="secondary" 
        weight="bold"
        capitalized={true}
        className="service-menu__title" 
    >{title}</Text>
    </AccordionSummary>
   <AccordionDetails className="service-menu__accordion-details" >
  {renderService} 
  </AccordionDetails>
  </Accordion>
</Box>)
}