import classnames from 'classnames';
export const StackIcon=({ type='',style={}, className='',...restProps})=>{
  let typeClass = type ? ('icon__'+ type):'';
  return (<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
  width="24" height="24" 
  viewBox="0 0 308.99 308.99" 
  style={style}
  className={classnames("icon",typeClass, className)}
         {...restProps}
  >
<g>
 <g>
   <path d="M301.135,82.438L159.869,19.441c-3.42-1.537-7.329-1.537-10.767,0L7.843,82.438c-4.611,2.053-7.656,6.572-7.827,11.623
     c-0.165,5.041,2.534,9.751,6.993,12.123l141.257,75.333c1.948,1.045,4.083,1.556,6.224,1.556c2.152,0,4.284-0.511,6.235-1.556
     l141.264-75.333c4.455-2.372,7.157-7.082,6.995-12.123C308.791,89.01,305.753,84.491,301.135,82.438z"/>
   <path d="M289.527,138.805l-135.045,72.04l-135.023-72.04c-6.464-3.449-14.468-1.002-17.894,5.45
     c-3.45,6.449-1.003,14.451,5.443,17.891L148.265,237.5c1.948,1.038,4.083,1.555,6.224,1.555c2.152,0,4.284-0.51,6.235-1.555
     l141.264-75.354c6.431-3.44,8.875-11.442,5.445-17.891C303.981,137.802,295.971,135.355,289.527,138.805z"/>
   <path d="M289.527,190.476l-135.045,72.016L19.459,190.476c-6.464-3.452-14.468-1.002-17.894,5.441
     c-3.45,6.449-1.003,14.459,5.443,17.894l141.257,75.33c1.948,1.045,4.083,1.562,6.224,1.562c2.152,0,4.284-0.51,6.235-1.562
     l141.264-75.33c6.431-3.435,8.875-11.444,5.445-17.894C303.981,189.474,295.982,187.023,289.527,190.476z"/>
 </g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>);
}