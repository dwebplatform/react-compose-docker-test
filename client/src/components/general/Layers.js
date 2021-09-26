// react
import React from "react";

// openlayers
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {Fill, Stroke, Style} from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import Group from "ol/layer/Group";

import graph2 from "../../static/Graph.json";
import obl from "../../static/obl.json"; 

import {
    Textstyle,
    styleFunctionAgrEdge,
    styleFunctionAgrNode,
    styleFunctionMGEdge,
    styleFunctionMGNode,
    styleFunctionBranchEdge,
    styleFunctionBranchNode,
    styleFunctionArrowAgr,
    styleFunctionArrowMG,
} from "./styleOL";

// create and add vector source layer
// векторное изображение(граф)
let vectorSource = new VectorSource({
    features: new GeoJSON().readFeatures(graph2),
});
let area = new VectorSource({
    features: new GeoJSON().readFeatures(obl),
});

let layerArea = new VectorLayer({
    source: area,
    style: function (feature, flag) {
        let styleL;
        let color = feature.get("color");

        styleL = new Style({
            stroke: new Stroke({
                color: 'lightgrey',//'rgba(212, 212, 212, 0.5)',//'lightgrey',
                //lineDash: [4],
                width: 1,
            }),
            fill: new Fill({
                color: color,//'white'//'rgba(0, 0, 255, 0.1)',    / getRandomColor(),//
                         
            }),
        })

        let styles = {
            'Polygon': styleL,
        };

        return styles[feature.getGeometry().getType()];
    },
});
layerArea.title = "Регионы";
layerArea.name = "Полигоны";

let TextlayerArea = new VectorLayer({
    declutter: true,
    visible: true,
    source: area,
    style: function (feature) {
        // debugger
        // console.log(feature)
        let name = feature.get("name");

        Textstyle.getText().setOverflow = false;
        
        if (name) {
            Textstyle.getText().setText(String(name));
        } else {
            Textstyle.getText().setText(feature.get(""));
        }
        return Textstyle;
    },
});
TextlayerArea.name = "Text";
TextlayerArea.title = "Регионы";

export let layerGroupArea = new Group({
    layers: [
        layerArea,
        TextlayerArea
    ],
});
layerGroupArea.title = "Регионы";

//Агрегированная схема
let layerEdgeAggregate = new VectorLayer({
    source: vectorSource,
    style: styleFunctionAgrEdge,
});
layerEdgeAggregate.title = "Агрегированная схема"; //'Агрегированная схема. Дуги'
layerEdgeAggregate.name = "Edge";

let vectorLayerArrowAgr = new VectorLayer({
    source: vectorSource,
    style: styleFunctionArrowAgr,
});
vectorLayerArrowAgr.title = "Агрегированная схема";
vectorLayerArrowAgr.name = "Arrow";

let layerNodeAggregate = new VectorLayer({
    source: vectorSource,
    style: styleFunctionAgrNode,
});
layerNodeAggregate.title = "Агрегированная схема"; //'Агрегированная схема. Узлы'
layerEdgeAggregate.name = "Node";

let TextlayerAgr = new VectorLayer({
    declutter: true,
    visible: true,
    source: vectorSource,
    style: function (feature) {
        let length = feature.get("length");
        let name = feature.get("name");
        let layerId = feature.get("layerId");

        if (name === "Edge") {
            Textstyle.getText().setText(String(length));
        } else {
            Textstyle.getText().setText(feature.get(""));
        }
        return Textstyle;
    },
});
TextlayerAgr.name = "Text";
TextlayerAgr.title = "Агрегированная схема";

export let layerGroupAgr = new Group({
    layers: [
        layerEdgeAggregate,
        vectorLayerArrowAgr,
        layerNodeAggregate,
        TextlayerAgr,
    ],
});
layerGroupAgr.title = "Агрегированная схема";

//Магистральный слой
let layerEdgeMG = new VectorLayer({
    //title: 'Магистральный слой',
    source: vectorSource,
    style: styleFunctionMGEdge,
});
layerEdgeMG.title = "Магистральный слой";
layerEdgeMG.name = "Edge";

let vectorLayerArrowMG = new VectorLayer({
    //title: 'Магистральный слой',
    source: vectorSource,
    style: styleFunctionArrowMG,
});
vectorLayerArrowMG.title = "Магистральный слой";
vectorLayerArrowMG.name = "Arrow";

let layerNodeMG = new VectorLayer({
    //title: 'Магистральный слой',
    source: vectorSource,
    style: styleFunctionMGNode,
});
layerNodeMG.title = "Магистральный слой";
layerNodeMG.name = "Node";

let TextlayerMG = new VectorLayer({
    declutter: true,
    visible: true,
    source: vectorSource,
    style: function (feature) {
        let length = feature.get("length");
        let name = feature.get("name");

        if (name === "MG") {
            Textstyle.getText().setText(String(length));
        } else {
            Textstyle.getText().setText(feature.get(""));
        }
        return Textstyle;
    },
});
TextlayerMG.name = "Text";
TextlayerMG.title = "Магистральный слой";

export let layerGroupMG = new Group({
    //title: 'Магистральный слой',
    layers: [layerEdgeMG, vectorLayerArrowMG, layerNodeMG, TextlayerMG],
});
layerGroupMG.title = "Магистральный слой";

//Газопроводы-отводы
let layerEdgeBranch = new VectorLayer({
    source: vectorSource,
    style: styleFunctionBranchEdge,
});
layerEdgeBranch.title = "Газопроводы-отводы";
layerEdgeBranch.name = "Edge";
let layerNodeBranch = new VectorLayer({
    source: vectorSource,
    style: styleFunctionBranchNode,
});
layerNodeBranch.title = "Газопроводы-отводы";
layerNodeBranch.layerId = 1;
layerNodeBranch.name = "Node";

let TextlayerBranch = new VectorLayer({
    declutter: true,
    visible: true,
    source: vectorSource,
    style: function (feature) {
        let name = feature.get("name");
        let nameGRS = feature.get("nameGRS");
        let type = feature.get("type");
        //let style
        if ((name === "Node") & (type === 8000)) {
            if (nameGRS) Textstyle.getText().setText(String(nameGRS));
            //Textstyle.color='red'
        } else {
            Textstyle.getText().setText(feature.get(""));
        }
        return Textstyle;
    },
});
TextlayerBranch.name = "Text";
TextlayerBranch.setVisible(false);
TextlayerBranch.title = "Газопроводы-отводы";

export let layerGroupBranch = new Group({
    //title: 'Магистральный слой',
    layers: [layerEdgeBranch, layerNodeBranch, TextlayerBranch],
});
layerGroupBranch.title = "Газопроводы-отводы";

export let layerPath2 = new Group();


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }