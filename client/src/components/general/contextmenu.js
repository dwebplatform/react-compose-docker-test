import ContextMenu from 'ol-contextmenu'
// import * as ol from 'ol'
import '../../styles/general/context.css'
import { transform } from "ol/proj";
// import { Point } from 'ol/geom'
// import { add, toStringXY, format } from "ol/coordinate";
import { Circle as CircleStyle, Fill, Stroke, Style, Text, Icon } from "ol/style";

///* global ol, ContextMenu */

import start from '../../images/redCircle.png'
import end from '../../images/redCircleEnd.png'
import line from '../../images/line.png'
import deleteIcon from '../../images/delete.png'

let features = []
let pointsStart = []
let pointsFinish = []

const clearPoint = (obj, map) => {

  let feature = map.get("target")
  //points.push(feature)

  // feature.setStyle(undefined);
  // let index = points.indexOf(feature.get("id"))
  // if (index !== -1) points.splice(index, 1)
  //console.log(features)
  features.map(element => {
    element.setStyle(undefined);
    pointsStart = []
    pointsFinish = []
    console.log(features)
  })
  features = []
  //console.log(feature.getStyle())
}

export let contextmenu_items = [
  {
    text: 'Сбросить точки',
    classname: 'bold',
    //icon: 'img/center.png',
    callback: clearPoint
  }
  // {
  //   text: 'Функционал 2',
  //   icon: 'img/view_list.png',
  //   items: [
  //     {
  //       text: 'Функционал 2.1',
  //       //icon: 'img/center.png',
  //       //callback: center,
  //     },
  //     {
  //       text: 'Функционал 2.2',
  //       //icon: 'img/pin_drop.png',
  //       callback: marker,
  //     },
  //   ],
  // },
  // {
  //   text: 'Функционал 3',
  //   //icon: 'img/pin_drop.png',
  //   callback: marker,
  // },
  // '-', // this is a separator
];

// var removeMarkerItem = {
//   text: 'Remove this Marker',
//   classname: 'marker',
//   callback: removeMarker,
// };

// const removeStyle(){

// }

export var contextmenu = new ContextMenu({
  width: 180,
  items: contextmenu_items,
});

// contextmenu.on('open', function (evt) {
//   var feature = map.forEachFeatureAtPixel(evt.pixel, function (ft, l) {
//     return ft;
//   });
// debugger
//   if (feature && feature.get('type') === 'removable') {
//     contextmenu.clear();
//     removeMarkerItem.data = {
//       marker: feature,
//     };
//     contextmenu.push(removeMarkerItem);
//   } else {
//     contextmenu.clear();
//     contextmenu.extend(contextmenu_items);
//     contextmenu.extend(contextmenu.getDefaultItems());
//   }
// });

// map.on('pointermove', function (e) {
//   var pixel = map.getEventPixel(e.originalEvent);
//   var hit = map.hasFeatureAtPixel(pixel);

//   if (e.dragging) return;

//   map.getTargetElement().style.cursor = hit ? 'pointer' : '';
// });

// from https://github.com/DmitryBaranovskiy/raphael
// function elastic(t) {
//   return (
//     Math.pow(2, -10 * t) * Math.sin(((t - 0.075) * (2 * Math.PI)) / 0.3) + 1
//   );
// }

// function removeMarker(obj) {

//   //vectorLayer.getSource().removeFeature(obj.data.marker);
// }


export const contextmenuOpen = (feature, setStartPoints, setFinishPoints) => {

  let typeFeature = feature.get("name");

  if (typeFeature === "Edge") {
    contextmenu.clear();
    contextmenu.extend([
      {
        text: "Длина участка",
        classname: "bold",
        icon: line,//"img/center.png",
        //callback: center,
      },
    ]);
  }
  else if (typeFeature === "Node") {

    contextmenu.clear();
    contextmenu.extend([
      {
        text: "Начальная точка",
        classname: "bold",
        icon: start,//function f () {return <FiberManualRecordIcon/>}//"img/center.png",
        callback: startPointFunc,
      },
      {
        text: "Конечная точка",
        classname: "bold",
        icon: end,//"img/center.png",
        callback: finishPointFunc,
      },
      {
        text: "Сбросить точку",
        classname: "bold",
        icon: deleteIcon,//"img/center.png",
        callback: removeStyle,
      },
    ]);
  }
  else {
    contextmenu.clear();
    contextmenu.extend(contextmenu_items)
    contextmenu.extend(contextmenu.getDefaultItems())
  }

  setStartPoints(pointsStart)
  setFinishPoints(pointsFinish)
}

const startPointFunc = (obj, map) => {
  var coord4326 = transform(obj.coordinate, 'EPSG:3857', 'EPSG:4326'),
    template = 'Стартовая точка',
    iconStyle = new Style({
      image: new Icon({ scale: 0.05, src: start }),
      // text: new Text({
      //   offsetY: 25,
      //   text: format(coord4326, template, 2),
      //   font: '10px Open Sans,sans-serif',
      //   fill: new Fill({ color: '#111' }),
      //   stroke: new Stroke({ color: '#eee', width: 2 }),
      // }),
    })

  let feature = map.forEachFeatureAtPixel(
    map.getPixelFromCoordinate(obj.coordinate),
    function (feature) {
      return feature;
    }
  );


  //points.push(feature)

  let index = pointsStart.indexOf(feature.get("id"))
  if (index === -1) {
    pointsStart.push(feature.get("id"))
    features.push(feature)
    feature.setStyle(iconStyle);
  }

  //console.log(points)
}
const finishPointFunc = (obj, map) => {
  let iconStyle = new Style({
    image: new Icon({ scale: 0.05, src: end })
  }),

    feature = map.forEachFeatureAtPixel(
      map.getPixelFromCoordinate(obj.coordinate),
      function (feature) {
        return feature;
      }
    );

  let index = pointsFinish.indexOf(feature.get("id"))
  if (index === -1) {
    pointsFinish.push(feature.get("id"))
    features.push(feature)
    feature.setStyle(iconStyle);
  }

  //console.log(points)
}

const removeStyle = (obj, map) => {

  let feature = map.forEachFeatureAtPixel(
    map.getPixelFromCoordinate(obj.coordinate),
    function (feature) {
      return feature;
    }
  );
  //points.push(feature)

  let index = pointsStart.indexOf(feature.get("id"))
  let indexFeature = pointsStart.indexOf(feature.get("id"))

  if (index !== -1) {
    pointsStart.splice(index, 1)
    if (indexFeature !== -1)
      features.splice(indexFeature, 1)

    feature.setStyle(undefined);
  }
  else {
    index = pointsFinish.indexOf(feature.get("id"))
    indexFeature = pointsFinish.indexOf(feature.get("id"))

    if (index !== -1) {
      pointsFinish.splice(index, 1)
      if (indexFeature !== -1)
        features.splice(indexFeature, 1)

      feature.setStyle(undefined);
    }
  }


  //console.log(points)
  //console.log(feature.getStyle())
}

