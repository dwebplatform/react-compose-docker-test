import classnames from 'classnames';
export const PipeIcon=({ type='',style={}, className='',...restProps})=>{
  let typeClass = type ? ('icon__'+ type):'';
  return (
    <svg   height="24" 
    viewBox="0 0 64 64" width="24" 
    className={classnames("icon",typeClass, className)}
    {...restProps}
    xmlns="http://www.w3.org/2000/svg"><g><path d="m3 31h6v16h-6z"/><path d="m12 49h2c.551 0 1-.448 1-1v-18c0-.551-.449-1-1-1h-2c-.551 0-1 .449-1 1v18c0 .552.449 1 1 1z"/><path d="m30 24.819v4.181h4v-4.181c-.652.11-1.317.181-2 .181s-1.348-.071-2-.181z"/><path d="m32 23c5.514 0 10-4.486 10-10s-4.486-10-10-10-10 4.486-10 10 4.486 10 10 10zm-3-17s3 0 3 4v2c0-4 4-4 4-4 0 3 3 4 3 7 0 2-3 5-7 5s-7-3-7-5c0-5 4-6 4-9z"/><path d="m26 45c-1.654 0-3 1.346-3 3v7h18v-7c0-1.654-1.346-3-3-3z"/><path d="m55 31h6v16h-6z"/><path d="m50 49h2c.551 0 1-.448 1-1v-18c0-.551-.449-1-1-1h-2c-.551 0-1 .449-1 1v18c0 .552.449 1 1 1z"/><path d="m26 43h12c2.414 0 4.434 1.721 4.899 4h4.101v-16h-30v16h4.101c.465-2.279 2.485-4 4.899-4z"/><path d="m47 61v-1c0-1.654-1.346-3-3-3h-24c-1.654 0-3 1.346-3 3v1h-16v2h62v-2z"/></g></svg>)
}