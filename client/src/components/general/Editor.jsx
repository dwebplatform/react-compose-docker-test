// react
import React, { useState, useEffect, useRef } from "react";

// openlayers
import Map from "ol/Map";
import View from "ol/View";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {  Stroke, Style } from "ol/style";
import { Attribution, defaults as defaultControls } from "ol/control";
import Icon from "ol/style/Icon";
import "ol/ol.css";
//import {GeoJSON} from "ol/parser"

import GeoJSON from "ol/format/GeoJSON";
//import { Circle as CircleStyle, Fill } from "ol/style";
import { Draw, Modify, Snap } from "ol/interaction";
//import { OSM } from "ol/source";
//import { Tile as TileLayer } from "ol/layer";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper } from "@material-ui/core";

// import field from "../static/img/field.png";
// import grs from "../static/img/grs.png";
import field from "../../images/field.png";
import grs from "../../images/grs.png";

// модифицированные реакт-компоненты
import CheckboxList from "./CheckList";

const source = new VectorSource();
let draw, snap;
let imageName;
let vector;

function Editor() {
  const [map, setMap] = useState();
  const [layerNames, setLayerName] = useState([""]);

  const mapElement = useRef();

  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
    let attribution = new Attribution({
      collapsible: false,
    });

    vector = new VectorLayer({
      source: source,
      style: function (feature) {
        //debugger;
        let style;
        
        if (imageName === "Месторождение") {
            feature.setProperties({'name':'Node', 'type':'2000'})
          }
          if (imageName === "Газораспределительная станция") {
            feature.setProperties({'name':'Node', 'type':'8000'})
          } 
          else if (imageName === "Трубопровод") {              
            feature.setProperties({'name':'Edge'})
          }

        if (feature.get('name')==='Node' & feature.get('type')==='2000') {
          style = new Style({
            image: new Icon({
              src: field,
              scale: 0.15,
            }),
          });
        }
        if (feature.get('name')==='Node' & feature.get('type')==='8000') {
          style = new Style({
            image: new Icon({
              src: grs,
              scale: 0.15,
            }),
          });
        } else if (feature.get('name')==='Edge') {
          style = new Style({
            stroke: new Stroke({
              color: "#0F4FA8",
              width: 2,
            }),
          });
        }

        feature.setStyle(style);
        return style;
      },
    });

    // create map
    const initialMap = new Map({
      target: mapElement.current,
      layers: [vector], //raster
      controls: defaultControls({ attribution: false }).extend([attribution]),
      view: new View({
        projection: "EPSG:3857",
        center: [50, -20],
        zoom: 10,
      }),
    });

    const modify = new Modify({ source: source });
    initialMap.addInteraction(modify);

    setMap(initialMap);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (mapRef.current) {
      map.removeInteraction(draw);
      map.removeInteraction(snap);
      if (layerNames.length !==0)
      addInteractions();
    }
  }, layerNames);// eslint-disable-line react-hooks/exhaustive-deps

  function addInteractions() {
    let type;

    imageName=layerNames[0]

    if (imageName === "Трубопровод")
        type = "LineString";
    else 
        type = "Point";

    draw = new Draw({
      source: source,
      type: type,
      //   style: function () {
      //     let style = new Style({
      //       image: new Icon({
      //         src: image,
      //         scale: 0.3,
      //       }),
      //     });
      //     return style;
      //   },
    });

    
    if (mapRef.current) mapRef.current.addInteraction(draw);
    snap = new Snap({ source: source });
    if (mapRef.current) mapRef.current.addInteraction(snap);
  }

  const useStyles = makeStyles((theme) => ({
    Grid: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
    },
    table: {
      marginLeft: theme.spacing(0),
      // maxWidth: 300,
      height: 10,
      // boxSizing: 'border-box'
    },
    table2: {
      // marginLeft: theme.spacing(0),
      // maxWidth: 300,
      height: 0,
      // position: absolute,
      right: 0,
      top: 0,
      boxSizing: "border-box",
    },
    button: {
      //marginTop: theme.spacing(8),
      marginLeft: theme.spacing(2),
      //marginBottom: theme.spacing(4),
    },
    tableContainer: {
      marginLeft: theme.spacing(8),
      //height: 500,
    },
    paper: {
      height: window.innerHeight - 70, //1000,//700,
      marginTop: theme.spacing(0),
      marginLeft: theme.spacing(0),
      //  marginBottom: theme.spacing(2),
    },
    padding: {
      padding: 5,
    },
  }));

  const classes = useStyles();

  let checkList = [
    "Месторождение",
    "Газораспределительная станция",
    "Трубопровод",
  ];

  const click = () => {
    var geojson = new GeoJSON();
    var features = vector.getSource().getFeatures();
    var json = geojson.writeFeatures(features);
    alert(json);
  };

//   const click1 = () => {
//        snap = new Snap({ source: source });
//        if (mapRef.current) mapRef.current.addInteraction(snap);
//   }

//   const click2 = () => {
//       //    debugger
//     snap.setActive(false)
//     mapRef.current.removeInteraction(snap);
//     // addInteractions();
//     //snap = new Snap({ source: source });
//  //if (mapRef.current) mapRef.current.addInteraction(snap);
// }


  return (
    <Grid container className={classes.Grid}>
      <Grid item xs={9}>
        <Paper ref={mapElement} className={classes.paper} />
      </Grid>
      <Grid item xs={3}>
        <div className={classes.padding}>
          <CheckboxList
            state={layerNames}
            setState={setLayerName}
            checkList={checkList}
            flag={1}
          ></CheckboxList>
          <Button variant="contained" color="default" className={classes.button} onClick={click}>
            Преобразовать в json
          </Button>
          {/* <Button onClick={click1}>snap</Button>
          <Button onClick={click2}>no snap</Button> */}
        </div> 
      </Grid>
    </Grid>
  );
}

export default Editor;
