import classnames from 'classnames';

export const HomeIcon=({ type='',style={}, className='',...restProps})=>{
  let typeClass = type ? ('icon__'+ type):'';
  
  return (<svg fill="currentColor"  
  height="24px" 
  width="24px"
  className={classnames("icon",typeClass, className)}
    {...restProps}
  style={style}

  viewBox="0 0 24 24"   preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M12 3.15l-9 9.472 1.352 1.433L12 6.007l7.648 8.048L21 12.622z"></path><path d="M12 6.007l-7 7.366v2.132l7.475-9z" opacity=".6"></path><path d="M12.475 6.506l-.475.57V14l2 .002V21h5v-7.627z" opacity=".8"></path><path d="M5 15.505V21h5v-7h2V7.077z"></path></svg>);
}