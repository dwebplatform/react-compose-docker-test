import classnames from 'classnames';
export const HydroStationIcon=({ type='',style={}, className='',...restProps})=>{
  let typeClass = type ? ('icon__'+ type):'';

return (<svg version="1.1" 
baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" 
 x="0px" y="0px" 
viewBox="0 0 123.5 130" 
width="32"
height="32"
className={classnames("icon",typeClass, className)}
{...restProps}
>
  <defs>
    <clipPath id="wawe-top-clip_3">
      <rect x="7.6" y="107.7" width="101.4" height="15.3"></rect>
    </clipPath>
    <clipPath id="wawe-bottom-clip_3">
      <rect x="16.1" y="115.3" width="83.9" height="15.3"></rect>
    </clipPath>
    <mask id="footClipping_3">
      <rect height="100%" width="100%" fill="white" data-darkreader-inline-fill="" 
      ></rect>
      <path  fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M391.7,120c-5-4.8-8.6-5.4-11-5c-4.6,0.7-5.7,5-10,5c-4,0-6-5-10-5s-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-5,5-10,5s-6-5-10-5
            s-6,5-10,5c-6,0-7-5-11-5s-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-5,5-10,5s-6-5-10-5s-6,5-10,5
            c-6,0-7-5-11-5s-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-5,5-10,5s-6-5-10-5s-6,5-10,5c-6,0-7-5-11-5
            s-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-5,5-10,5s-6-5-10-5s-6,5-10,5c-0.6,2.6,0,12.3,0,12.3h404.1
            C391.8,132.3,391.8,122.6,391.7,120z" transform="matrix(1,0,0,1,-0.6344171654705769,0)"
             ></path>
    </mask>
  </defs>
<path fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" d="M32,61h-4c-1.1,0-2-0.9-2-2l0,0c0-1.1,0.9-2,2-2h4
  c1.1,0,2,0.9,2,2l0,0C34,60.1,33.1,61,32,61z" data-darkreader-inline-stroke=""></path>
<path fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" d="M70.5,53h-19c-1.4,0-2.5-1.1-2.5-2.5l0,0
  c0-1.4,1.1-2.5,2.5-2.5h19c1.4,0,2.5,1.1,2.5,2.5l0,0C73,51.9,71.9,53,70.5,53z" data-darkreader-inline-stroke="" 
  ></path>
<path fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" d="M40,90H21c0,0,0-1.6,0-3.5l0,0
  c0-1.9,1.6-3.5,3.5-3.5h12c1.9,0,3.5,1.6,3.5,3.5l0,0C40,88.4,40,90,40,90z" data-darkreader-inline-stroke=""></path>
<path fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" d="M97,96H18c-1.6,0-3-1.3-3-3l0,0c0-1.7,1.3-3,3-3h79
  c1.7,0,3,1.3,3,3l0,0C100,94.7,98.7,96,97,96z" data-darkreader-inline-stroke=""
   ></path>
<path fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" d="M77,90H45c0,0,0-1.1,0-2.5l0,0
  c0-1.4,1.1-2.5,2.5-2.5h27c1.4,0,2.5,1.1,2.5,2.5l0,0C77,88.9,77,90,77,90z"></path>

<g mask="url(#footClipping_3)">
  <line  fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" x1="86" y1="96" x2="86" y2="125"
   data-darkreader-inline-stroke="" ></line>
  <line  fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" x1="75" y1="96" x2="75" y2="125" 
   ></line>
  <line  fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" x1="41" y1="96" x2="41" y2="125"
   ></line>
  <line  fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" x1="29" y1="96" x2="29" y2="125" 
  ></line>
 </g>

<line fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" x1="24" y1="83" x2="27" y2="61" 
 ></line>
<line fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" x1="33" y1="61" x2="37" y2="83" 
 ></line>
<line fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" x1="52" y1="53" x2="48" y2="85"  
></line>
<line fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" x1="70" y1="53" x2="74" y2="85" 
 ></line>
<line fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" x1="86" y1="67" x2="109" y2="48"></line>
<line fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" x1="87" y1="90" x2="109" y2="53" ></line>
<line fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" x1="86" y1="75" x2="109" y2="50"
></line>
<path fill="none" stroke="#004188" stroke-width="2" stroke-miterlimit="10" d="M81,90l1-24c0-0.5,0.5-1,1-1h1.9
  c0.6,0,1.1,0.5,1.1,1.1L87,90" 
   ></path>
<polyline fill="none" stroke="#004188" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" points="90.1,84.8
  90.1,70.5 95.9,75 96,64.1 101.5,65.7 102.3,57.3 107,56.4 " data-darkreader-inline-stroke="" 
  ></polyline>
<polyline fill="none" stroke="#004188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
  48,85 72,72 51.3,59 61.4,53 70.7,58.6 50,72 73,85 " data-darkreader-inline-stroke="" 
  ></polyline>
<polyline fill="none" stroke="#004188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
  54,47 67,35 56.8,24.6 " data-darkreader-inline-stroke=""></polyline>
<polyline fill="none" stroke="#004188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
  65.2,24.6 55.1,35 68.9,48 65,23 57,23 53,48 " data-darkreader-inline-stroke=""></polyline>
<g id="hook">
  <line  fill="none" stroke="#004188" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="109" y1="60" x2="109" y2="48" data-darkreader-inline-stroke=""
   ></line>
  <path  fill="none" stroke="#004188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
    M111.9,63c-0.2,1.1-1.2,2-2.4,2c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5" data-svg-origin="107 60" transform="matrix(1,0,0,1,0,0)"
     data-darkreader-inline-stroke=""></path>
</g>
<path  fill="none" stroke="#004188" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M26.3,54.000149568291995c0,0,-2.9991025902480493,-2.3989530219560575,-2.2995512951240245,-5.799002878053388c1.0993518707347025,-5.099052734150718,0.20064812926529763,-7.298753597566735,-1.2993518707347025,-11.098753597566734c-0.2,-0.4,-0.19980057561067766,-0.4001994243893224,0.20019942438932237,-0.20019942438932237c1.5,0.6,5.898803453664066,4.599002878053388,6.398803453664066,7.798205180496098c0.20014956829199176,1.2000498560973305,1.6993518707347024,2.5000498560973305,2.7998005756106776,2.300099712194661
                    c1.200099712194661,-0.19995014390266944,2.200299136583984,-0.9006979853626282,2.5002991365839837,-2.500697985362628c0,-0.2,0.00014956829199175848,-0.30009971219466114,0.10014956829199176,-0.00009971219466117232c0.7996011512213553,2.2,2.299850431708008,7.9001994243893225,-1.500348992681314,9.500448704875975"></path>
<path  fill="#004188" d="M24.5,18.7c2.9,0,5.2,2.3,5.2,5.2s-2.3,5.2-5.2,5.2c-1.6,0-6.1,0-7.6,0
  c-2.3,0-4.1-1.6-4.1-3.9s1.8-4.1,4.1-4.1c1.1,0,2,0.4,2.7,1.1C20.3,20.1,22.2,18.7,24.5,18.7 M24.5,16.9c-2.2,0-4.3,1.1-5.6,2.8
  c-0.7-0.2-1.3-0.4-2.1-0.4c-3.3,0-5.9,2.7-5.9,5.9s2.6,5.7,5.9,5.7h3.7h3.9c3.9,0,7-3.1,7-7C31.5,20,28.4,16.9,24.5,16.9L24.5,16.9z
  " data-svg-origin="10.899999618530273 16.899999618530273" transform="matrix(1,0,0,1,6.002225814195924,0)"></path>
<path  fill="#004188" d="M104.3,5.2c2.1,0,3.8,1.7,3.8,3.8s-1.7,3.8-3.8,3.8c-1.2,0-4.5,0-5.6,0c-1.7,0-3-1.2-3-2.9
  s1.4-3,3-3c0.8,0,1.5,0.3,2,0.8C101.3,6.3,102.7,5.2,104.3,5.2 M104.3,3.2c-1.7,0-3.2,0.7-4.3,1.9C99.6,5,99.2,5,98.7,5
  c-2.8,0-5,2.3-5,5s2.2,4.9,5,4.9h2.7h2.9c3.2,0,5.8-2.6,5.8-5.8C110.2,5.8,107.6,3.2,104.3,3.2L104.3,3.2z" data-svg-origin="93.69999694824219 3.200000047683716" transform="matrix(1,0,0,1,-8.002543787652485,0)" 
></path>
<g clip-path="url(#wawe-bottom-clip_3)">
    <path  fill="none" stroke="#004188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
    M298,123c-4,0-6,4-10,4s-6-4-10-4s-6,4-10,4s-6-4-10-4s-6,4-10,4s-6-4-10-4s-5,4-10,4s-6-4-10-4s-6,4-10,4s-6-4-10-4s-6,4-10,4
    s-6-4-10-4s-6,4-10,4s-6-4-10-4s-5,4-10,4s-6-4-10-4s-6,4-10,4s-6-4-10-4s-6,4-10,4s-6-4-10-4s-6,4-10,4s-6-4-10-4s-5,4-10,4
    s-6-4-10-4s-6,4-10,4s-6-4-10-4s-6,4-10,4s-6-4-10-4s-6,4-10,4s-6-4-10-4s-5,4-10,4s-6-4-10-4" data-svg-origin="-22 123" transform="matrix(1,0,0,1,-0.6344171654705769,0)" data-darkreader-inline-stroke=""
      ></path>
</g>
<g clip-path="url(#wawe-top-clip_3)">
    <path  fill="none" stroke="#004188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
    M391.7,120c-6,0-7-5-11-5s-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-5,5-10,5s-6-5-10-5s-6,5-10,5
    c-6,0-7-5-11-5s-6,5-10,5s-6-5-10-5c-4,0-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-5,5-10,5s-6-5-10-5s-6,5-10,5c-6,0-7-5-11-5
    s-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-6,5-10,5c-4,0-6-5-10-5s-5,5-10,5s-6-5-10-5s-6,5-10,5c-6,0-7-5-11-5s-6,5-10,5
    s-6-5-10-5s-6,5-10,5s-6-5-10-5s-6,5-10,5s-6-5-10-5s-5,5-10,5s-6-5-10-5s-6,5-10,5" 
    data-svg-origin="-12.29998779296875 115" transform="matrix(1,0,0,1,-0.6344171654705769,0)" ></path>
</g>
</svg>);
}