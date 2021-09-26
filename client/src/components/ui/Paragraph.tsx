import  React  from 'react';
import classnames from 'classnames';
import '../../styles/ui/paragraph-style.scss';
interface IParagraph{
  size?: string;
  style?: React.CSSProperties,
  className?: string;
}
export const Paragraph: React.FC<IParagraph> =({className="", size='', style={},
children = null, ...restProps})=>{
  let sizeClass = size ? ('ui-paragraph__' + size):'';
  return (<p className={classnames("ui-paragraph",sizeClass,className)} style={style} {...restProps} >{children}</p>)
}