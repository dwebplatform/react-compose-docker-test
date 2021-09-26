// react
import React, { useState, useEffect, useRef } from "react";

// openlayers
import Map from "ol/Map";
import View from "ol/View";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { transform } from "ol/proj";
import { toStringXY } from "ol/coordinate";
import { Stroke, Style } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import Group from "ol/layer/Group";
import {
  Attribution,
  defaults as defaultControls,
  ScaleLine,
} from "ol/control";
import axios from 'axios'

// material ui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton, Paper } from "@material-ui/core";
import { Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import { AppBar, Tab, Tabs, Box, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

// модифицированные реакт-компоненты
import CheckboxList from "./CheckList";
//import EnhancedTable from "./Table";
import DataTable from "./DataTable";

// контекстное меню
import { contextmenu, contextmenuOpen } from "./contextmenu";

import graph from "../../static/Graph.json";
//import main from '../client_node/node/src/greeter_client.js'

import {
  layerGroupArea,
  layerGroupAgr,
  layerGroupMG,
  layerGroupBranch,
} from "./Layers";
import Layer from "ol/layer/Layer";

//от вершины 14928704 до 12492994
let paths = [
  [
    14928706, 4221557, 4220523, 4220360, 23507083, 4220306, 7563764, 4220313,
    4220260, 4220288, 4220280, 11735789, 4220298, 4220269, 4220299, 4220270,
    4220271, 4220284, 4220286, 4220287, 4220278, 4221636, 4220279, 4221631,
    4220281, 4221718, 4220282, 104394257, 4220307, 21543431, 12655089, 4220347,
    21379418, 4220323, 17987840, 12492994, 4221521, 15162914,
  ],
  [
    14928706, 4221557, 4220523, 4220360, 23507083, 4220306, 7563764, 4220313,
    4220260, 4220289, 4220290, 4220291, 4220292, 4220293, 4221689, 4220261,
    4220960, 4220302, 4220286, 4220287, 4220288, 4220278, 4221636, 4220279,
    4221631, 4220281, 4221718, 4220282, 104394257, 4220307, 21543431, 12655089,
    4220347, 21379418, 4220323, 17987840, 12492994,
  ],
  [
    14928706, 4221544, 4221543, 4220379, 11667297, 4220380, 4220363, 4220394,
    4220367, 4220383, 4220368, 4220381, 4220392, 4220393, 6032990, 4220752,
    4220974, 4220430, 126504328, 4220520, 4220406, 4220407, 4220349, 4220337,
    4220969, 7372640, 4220350, 113133698, 101106736, 4220386, 4220284, 4220278,
    4221636, 4220279, 4221631, 4220281, 4221718, 4220282, 104394257, 4220307,
    21543431, 12655089, 4220347, 21379418, 4220323, 17987840, 12492994, 4220286,
    4220287,
  ],
  [
    14928706, 4221544, 4221543, 4220379, 11667297, 4220380, 4220363, 4220394,
    4220367, 4220383, 4220368, 4220381, 4220392, 4220393, 6032990, 4220752,
    4220974, 4220430, 126504328, 4220520, 4220406, 4220407, 4220349, 4220337,
    4220969, 7372640, 4220350, 113133698, 4220262, 4220961, 4220960, 4220302,
    4220278, 4221636, 4220279, 4221631, 4220281, 4221718, 4220282, 104394257,
    4220307, 21543431, 12655089, 4220347, 21379418, 4220323, 17987840, 12492994,
    4220286, 4220287,
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];



function MapWrapper() {
  // set intial state
  const [map, setMap] = useState();
  const [selectedCoord, setSelectedCoord] = useState();
  const [selectedObjectType, setSelectedObjectType] = useState();
  const [selectedObjectValue, setSelectedObjectValue] = useState();
  const [layerNames, setLayerName] = useState([
    "Агрегированная схема",
    "Магистральный слой",
    "Газопроводы-отводы",
    "Регионы",
  ]);

  const [path, setPath] = useState([]);

  const [value, setValue] = useState(0);
  const [valueButton, setValueButton] = useState(false);
  const [valueCheckList, setValueCheckList] = useState([]);
  const [valueCheckList2, setValueCheckList2] = useState([]); //для таблицы нового формата
  const [pointsStart, setStartPoints] = useState([]); //id точек маршрута (вход и выход)
  const [pointsFinish, setFinishPoints] = useState([]); //id точек маршрута (вход и выход)


  let rows = [];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mapElement = useRef();

  // create state ref that can be accessed in OpenLayers onclick callback function
  const mapRef = useRef();
  mapRef.current = map;

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {
    let attribution = new Attribution({
      collapsible: false,
    });

    layerGroupArea.setVisible(true)
    layerGroupAgr.setVisible(true)
    layerGroupMG.setVisible(true)
    layerGroupBranch.setVisible(true)

    // create map
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        layerGroupArea,
        layerGroupAgr,
        layerGroupMG,
        layerGroupBranch,
      ],
      controls: defaultControls({ attribution: false }).extend([attribution]),
      view: new View({
        projection: "EPSG:3857",
        center: [50, -20],
        zoom: 23,
      }),
    });
    initialMap.addControl(new ScaleLine());

    initialMap.on("click", handleMapClick);
    initialMap.on("moveend", mouseWheel);

    initialMap.addControl(contextmenu);

    setMap(initialMap);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  contextmenu.on("open", function (event) {
    let feature;

    if (mapRef.current)
      feature = mapRef.current.forEachFeatureAtPixel(
        event.pixel,
        function (feature) {
          return feature;
        }
      );

    if (feature !== undefined) {
      contextmenuOpen(feature, setStartPoints, setFinishPoints);
    }
  });

  const funcSetLayer = () => {
    let flag;
    let layers = mapRef.current.getLayers();

    layers.forEach(function (layer) {
      flag = false;
      layerNames.map((layerName) => {
        if (layer.title === layerName) {
          layer.setVisible(true);
          flag = true;
        } else if (flag === false) {
          layer.setVisible(false);
        }
      });
      if (layerNames.length === 0) layer.setVisible(false);
    });
  };

  useEffect(() => {
    if (mapRef.current) {
      funcSetLayer();
      mouseWheel();
    }
  }, [layerNames]);// eslint-disable-line react-hooks/exhaustive-deps

  // map click handler
  const handleMapClick = (event) => {

    // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
    //  https://stackoverflow.com/a/60643670
    const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);

    // transform coord to EPSG 4326 standard Lat Long
    const transormedCoord = transform(clickedCoord, "EPSG:3857", "EPSG:4326");

    let feature = mapRef.current.forEachFeatureAtPixel(
      event.pixel,
      function (feature) {
        return feature;
      }
    );

    if (feature !== undefined) {
      let typeFeature = feature.get("name");
      let valueFeature;
      setSelectedObjectType("Тип узла");
      if (typeFeature === "Node") {
        valueFeature = feature.get("type");
        if (valueFeature === 2000) {
          valueFeature = feature.get("id");
          setSelectedObjectType("id дуги");
          setSelectedObjectValue(valueFeature);
          //setSelectedObjectValue("Месторождение")
        } else if (valueFeature === 3000) {
          setSelectedObjectValue("ГПЗ");
        } else if (valueFeature === 4000) {
          setSelectedObjectValue("Граница ТГ");
        } else if (valueFeature === 5000) {
          setSelectedObjectValue("Узел редуцирования");
        } else if (valueFeature === 6000) {
          setSelectedObjectValue("Врезка");
        } else if (valueFeature === 7000) {
          setSelectedObjectValue("КС");
        } else if (valueFeature === 8000) {
          setSelectedObjectValue("ГРС");
        } else if (valueFeature === 9000) {
          setSelectedObjectValue("ГИС");
        } else if (valueFeature === 10000) {
          setSelectedObjectValue("ПХГ");
        }
      } else if (
        typeFeature === "Edge" ||
        typeFeature === "Branch" ||
        typeFeature === "MG"
      ) {
        valueFeature = feature.get("id");
        setSelectedObjectType("id дуги");
        setSelectedObjectValue(valueFeature);
        //valueFeature = feature.get('length')
        //setSelectedObjectType("Длина дуги, км")
        //setSelectedObjectValue(valueFeature)
      } else {
        setSelectedObjectValue("");
      }
    } else {
      setSelectedObjectType("");
      setSelectedObjectValue("");
    }

    setSelectedCoord(transormedCoord);
  };

  const mouseWheel = (event) => {
    const zoom = mapRef.current.getView().getZoom();
    let layers = mapRef.current.getLayers();
    //console.log(zoom);

    layers.forEach(function (grouplayer) {
      //debugger
      //console.log(grouplayer.getVisible());
      if (grouplayer.getVisible()) {
        if (zoom <= 22) {
          grouplayer.getLayers().forEach(function (layer) {
            if (
              (layer.name === "Node") &
              (layer.title === "Газопроводы-отводы")
            )
              layer.setVisible(false);
            if (
              (layer.name === "Node") &
              (layer.title === "Магистральный слой")
            )
              layer.setVisible(false);
          });
          //layerGRS.setVisible(false)
        }
        if (zoom < 21) {
          grouplayer.getLayers().forEach(function (layer) {
            //debugger
            if (
              (layer.name === "Text") &
              (layer.title !== "Газопроводы-отводы")
            )
              layer.setVisible(false);
            if (layer.name === "Arrow") layer.setVisible(false);
            //flarGRS = false;
          });
        }
        if (zoom >= 21) {
          grouplayer.getLayers().forEach(function (layer) {
            //debugger
            if (
              (layer.name === "Text") &
              (layer.title !== "Газопроводы-отводы")
            )
              layer.setVisible(true);
            if (layer.name === "Arrow") layer.setVisible(true);
            //flarGRS = false;
          });
        }
        if (zoom < 23.5) {
          grouplayer.getLayers().forEach(function (layer) {
            if (
              (layer.name === "Text") &
              (layer.title === "Газопроводы-отводы")
            )
              layer.setVisible(false);
          });
        }
        if (zoom >= 23.5) {
          grouplayer.getLayers().forEach(function (layer) {
            if (
              (layer.name === "Text") &
              (layer.title === "Газопроводы-отводы")
            )
              layer.setVisible(true);
          });
        }
        if (zoom >= 22) {
          //flarGRS == false &&
          grouplayer.getLayers().forEach(function (layer) {
            //debugger
            if (
              (layer.name === "Node") &
              (layer.title === "Газопроводы-отводы")
            )
              layer.setVisible(true);

            if (
              (layer.name === "Node") &
              (layer.title === "Магистральный слой")
            )
              layer.setVisible(true);
            //flarGRS = false;
          });
        }
      }
    });
  };


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
      height: window.innerHeight - 70,//1000,//700,
      marginTop: theme.spacing(0),
      marginLeft: theme.spacing(0)
      //  marginBottom: theme.spacing(2),
    },
    padding: {
padding:5
    }
  }));

  const classes = useStyles();

  const onSubmit = async (event) => {
    // event.preventDefault();
    await axios
      .post("/ms-graph", {
        inZoneNodes: pointsStart,
        outZoneNodes: pointsFinish,
      })
      .then((response) => {
        console.log(response.data);
        paths = response.data;
        //  setPath(response.data);
        // setResult(response.data);
      });
    let checkList = [];

    paths.map((path2, index) => {
      checkList.push(`Маршрут №${index + 1}`);
      rows.push(createData(`Маршрут №${index + 1}`, getRandomArbitrary(1000, 1500)));
    });

    setValueCheckList(checkList);
    setValueCheckList2(rows);
  };

  const calcPath = (event, newValue) => {
    setValueButton(true);
    onSubmit();
    console.log("вернулся ответ с сервера");
  };

  function PathList(props) {
    const { checkList, value, mapRef, rows } = props;

    if (value) {
      drawPath(path, checkList, mapRef);
    }
    return (
      <div>
        {value && (
          <Box>
            {/* <CheckboxList
              state={path}
              checkList={checkList}
              setState={setPath}
              flag={1}
            ></CheckboxList> */}

            <DataTable
              rows={rows}
              selectionModel={path}
              setSelectionModel={setPath}
            ></DataTable>
          </Box>
        )}
      </div>
    );
  }

  function clearPath() {
    let layers = mapRef.current.getLayers();
    layers.forEach(function (group) {
      if (group.name === "Маршрут") mapRef.current.removeLayer(group);
    });
    setPath([]);
    setValueButton(false);
  }

  let checkList = [
    "Агрегированная схема",
    "Магистральный слой",
    "Газопроводы-отводы",
    "Регионы",
  ]; //, "Текст на схеме"

  function createData(id, length) {
    return { id, length };
  }

  return (
    <Grid container className={classes.Grid}>
      <Grid item xs={9}>
        <Paper ref={mapElement} className={classes.paper} />
      </Grid>
      <Grid item xs={3}>
        <div  className={classes.padding}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              //   aria-label="scrollable auto tabs example"
              //centered
            >
              <Tab label="Параметры" />
              <Tab label="Слои" />
              <Tab label="Маршруты" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Table
              className={classes.table2}
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Свойство</TableCell>
                  <TableCell align="center">Значение</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">{selectedObjectType}</TableCell>
                  <TableCell align="center">{selectedObjectValue}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Координаты</TableCell>
                  <TableCell align="center">
                    {selectedCoord ? toStringXY(selectedCoord, 6) : ""}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CheckboxList
              state={layerNames}
              setState={setLayerName}
              checkList={checkList}
            ></CheckboxList>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Button variant="contained" color="primary" onClick={calcPath}>
              Рассчитать маршруты
            </Button>
            <IconButton aria-label="Очистить маршруты" onClick={clearPath}>
              <DeleteIcon />
            </IconButton>
            <PathList
              value={valueButton}
              checkList={valueCheckList}
              mapRef={mapRef}
              rows={valueCheckList2}
            />
          </TabPanel>
        </div>
      </Grid>
    </Grid>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{value === index && <Box p={3}>{children}</Box>}</div>;
}

function drawPath(path, checkList, mapRef) {
  let layerEdgeMG;

  let layers = mapRef.current.getLayers();
  let visible;

  //проверка видимости агрегированного слоя
  layers.forEach(function (layer) {
    if (layer.title === "Агрегированная схема") visible = layer.getVisible();
  });

  //удаляем предыдущий слой для новой отрисовки
  layers.forEach(function (layer) {
    if (layer.name === "Маршрут") mapRef.current.removeLayer(layer);
  });

  //записываем в один массив id всех путей (в будущем, возможно, все пути должны быть на разных слоях и при переключении должна меняться только их видимость)
  let edgeIdforPaths = [];
  checkList.map((check, index) => {
    path.map((p) => {
      if (check === p) {
        paths[index].map((idEdge) => {
          edgeIdforPaths.push(idEdge);
        });
      }
    });
  });

  //Cлой-маршрут в группе агрегированной схемы
  layerEdgeMG = new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(graph),
    }),
    style: function (feature) {
      let id = feature.get("id");
      let styleL;
      edgeIdforPaths.map((idEdge) => {
        if (idEdge === id) {
          styleL = new Style({
            stroke: new Stroke({
              color: "red", //'rgb(67, 150, 232)',
              width: 2,
            }),
          });
        }
      });

      let styles = {
        LineString: styleL,
      };

      return styles[feature.getGeometry().getType()];
    },
  });
  layerEdgeMG.name = "Маршрут";

  let layerGroupPath = new Group({
    layers: [layerEdgeMG],
  });
  layerGroupPath.title = "Агрегированная схема";
  layerGroupPath.name = "Маршрут";
  layerGroupPath.setVisible(visible);

  mapRef.current.addLayer(layerGroupPath);

  return layerEdgeMG;
}

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export default MapWrapper;
