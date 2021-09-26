import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import '../../styles/general/search-style.scss';
export const SearchComponent=({style={}})=>{
  return (<Box className="search" style={style}>
    <SearchIcon />
    <InputBase type="text" placeholder="Поиск" style={{ flex:1,color: "#fff"}}/>
    </Box>);
}