
import React from 'react';
import classnames from 'classnames';
import '../../styles/ui/text-style.scss';


interface IText {
  type?:string;
  size?: string;
  weight?:string;
  capitalized?: boolean;
  className?: string;
  style?: object;
}
export const Text:React.FC<IText>=({
type='basic', 
size='',
weight='', 
capitalized=false,
className='',
style={}, 
children = null, 
...restProps})=>{

  let sizeClass = size ? ('ui-text__'+size) : '';
  let weightClass = weight ?('ui-text__'+weight) : '';
  let typeClass = type ?('ui-text__' + type): '';
  let capitalizedClass = capitalized? 'ui-text__capitalized':'';
  
  return (<div className={classnames('ui-text',typeClass,sizeClass,weightClass,capitalizedClass,className)} style={style} {...restProps}>{children}</div>)
}