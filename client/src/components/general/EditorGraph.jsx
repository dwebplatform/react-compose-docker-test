// react
import React, { useState, useEffect, useRef } from "react";

// openlayers
import Map from "ol/Map";
import View from "ol/View";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { Attribution, defaults as defaultControls } from "ol/control";
import Icon from "ol/style/Icon";
import "ol/ol.css";
//import { Circle as CircleStyle, Fill } from "ol/style";
import { Draw, Modify, Snap } from "ol/interaction";
//import { OSM } from "ol/source";
//import { Tile as TileLayer } from "ol/layer";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import field from "../../images/field.png";
import grs from "../../images/grs.png";

// модифицированные реакт-компоненты
import CheckboxList from "./CheckList";

// import {
//   layerGroupArea,
//   layerGroupAgr,
//   layerGroupMG,
//   layerGroupBranch,
// } from "./Layers";

import GeoJSON from "ol/format/GeoJSON";
// import Group from "ol/layer/Group";

import graph from "../../static/Graph.json";
// import obl from "../static/obl.json";

//const source = new VectorSource();
var source = new VectorSource({
  features: new GeoJSON().readFeatures(graph),
});
//var source = new VectorSource();
let draw, snap;
let imageName;
let vector;

function EditorGraph() {
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
        let style;

        if (!feature.get("name")) { //нужно будет добавить адекватную проверку на то, что элемента еще нет в списке
          if (imageName === "Месторождение") {
            feature.setProperties({ name: "Node", type: 2000 });
          } else if (imageName === "Газораспределительная станция") {
            feature.setProperties({ name: "Node", type: 8000 });
          } else if (imageName === "Трубопровод") {
            feature.setProperties({ name: "Edge" });
          }
        }

        if (feature.get("name") === "Node" && feature.get("type") === 2000) {
          style = new Style({
            image: new Icon({
              src: field,
              scale: 0.15,
            }),
          });
        } else if (
          feature.get("name") === "Node" &&
          feature.get("type") === 8000
        ) {
          style = new Style({
            image: new Icon({
              src: grs,
              scale: 0.15,
            }),
          });
        } else if (feature.get("name") === "Edge") {
          style = new Style({
            stroke: new Stroke({
              color: "rgb(55, 121, 188)",
              width: 2,
            }),
          });
        } else if (feature.get("name") === "MG") {
          style = new Style({
            stroke: new Stroke({
              color: "rgb(67, 150, 232)",
              width: 1,
            }),
          });
        } else if (feature.get("name") === "Branch") {
          style = new Style({
            stroke: new Stroke({
              color: "rgb(5, 242, 242)",
              width: 0.4,
            }),
          });
        } else {
          style = new Style({
            image: new CircleStyle({
              radius: 1,
              fill: new Fill({
                color: "darkblue",
              }),
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
        zoom: 23,
      }),
    });

    const modify = new Modify({ source: source });
    initialMap.addInteraction(modify);

    setMap(initialMap);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    
    if (mapRef.current)
    {
      map.removeInteraction(draw);
      map.removeInteraction(snap);
      if (layerNames.length !==0)
      addInteractions();
    }
  }, [layerNames]);// eslint-disable-line react-hooks/exhaustive-deps

  function addInteractions() {
    let type;

    if (layerNames[0] === "Месторождение") {
      type = "Point";
      imageName = "Месторождение";
    }
    if (layerNames[0] === "Газораспределительная станция") {
      type = "Point";
      imageName = "Газораспределительная станция";
    } else if (layerNames[0] === "Трубопровод") {
      type = "LineString";
      imageName = "Трубопровод";
    }

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
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(15),
      marginBottom: theme.spacing(4),
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
        </div>
      </Grid>
    </Grid>
  );
}

export default EditorGraph;
