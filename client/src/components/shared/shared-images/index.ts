

import webplatformFirst from '../../../images/webplatform_img.jpg';
import webplatformSecond from '../../../images/webplatform_img.jpg';

export enum IMAGE_VARIANTS  {
  HOME_IMAGE = "HOME_IMAGE",
  SERVICE_IMAGE = "SERVICE_IMAGE",
};
 
export const Images :{
  [ key in IMAGE_VARIANTS ]: string
} = {
 [IMAGE_VARIANTS.HOME_IMAGE]: webplatformFirst,
 [IMAGE_VARIANTS.SERVICE_IMAGE]: webplatformSecond

}
