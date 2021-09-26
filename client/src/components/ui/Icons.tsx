import classnames from 'classnames';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import SettingsIcon from '@material-ui/icons/Settings';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';

import '../../styles/ui/icon-style.scss';
import { BoxIcon } from '../shared/BoxIcon';
import { DropIcon } from '../shared/DropIcon';
import { PipeIcon } from '../shared/PipeIcon';
import { DashIcon } from '../shared/DashIcon';
import { HydroStationIcon } from '../shared/HydroStationIcon';
import { ForeCastIcon } from '../shared/ForeCastIcon';
import { HomeIcon } from '../shared/HomeIcon';
import { WheelIcon } from '../shared/WheelIcon';
import { StackIcon } from '../shared/StackIcon';
import { SchemaIcon } from '../shared/SchemaIcon';
import { RouteCalcIcon } from '../shared/RouteCalcIcon';

 

export const Icons: { [name: string]: any }  = {
  "HomeIcon":<HomeIcon />,
  "AddCircleIcon":<AddCircleIcon className="icon"/>,
  "DeleteIcon":<DeleteIcon className="icon"/>,
  "LibraryBooksIcon":<LibraryBooksIcon className="icon"/>,
  "EqualizerIcon":<EqualizerIcon className="icon"/>,
  "ControlCameraIcon":<ControlCameraIcon className="icon"/>,
  "GearIcon": <SettingsIcon className="icon"/>,
  "PowerBlock":<DeveloperBoardIcon className="icon icon__grey" />,
  "BoxIcon": <BoxIcon className="icon" type="grey"/>,
  "DropIcon": <DropIcon className="icon"/>,
  "PipeIcon":<PipeIcon className="icon" type="grey"/>,
  "DashIcon":<DashIcon className="icon"/>,
  "HydroStationIcon":<HydroStationIcon className="icon" />,
  "ForeCastIcon":<ForeCastIcon className="icon"/>,
  "WheelIcon": <WheelIcon type="base"/>,
  "StackIcon":<StackIcon  style={{fill:'red'}} />,
  "SchemaIcon":<SchemaIcon  type="base" className="icon"/>,
  "RouteCalcIcon":<RouteCalcIcon type="base" className="icon"/>
  // TODO: добавить иконку кубика, греческий дом, бд
}
 