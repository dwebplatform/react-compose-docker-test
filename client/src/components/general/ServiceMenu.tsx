import { ServiceCategory } from './ServiceCategory';
import Box from '@material-ui/core/Box';
import { useCustomSelector } from './../../hooks/redux-hooks/useCustomSelector';

export const ServiceMenu=()=>{
  const {servicesCategories} = useCustomSelector((state)=>state.categories);
  return (
  <>
    {(servicesCategories.length >0)  &&
    servicesCategories.map(category=>{
      // test-three-card
      if(category.isVisible === false){
        return null;
      }
      return (<ServiceCategory 
        key={category.id} 
        title={category.name} 
        services={category.services}
        />)
    })}
  </>);
}