import React, { useState, useEffect, ReactNode } from "react";
import { useInput } from "../hooks/useInput";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
// import "../index.css";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import SimpleBreadcrumbs from "../components/Breadcrumbs_";

var i: number;
const nameComponents: string[] = [
  "Метан",
  "Этан",
  "Пропан",
  "н-Бутан",
  "и-Бутан",
  "н-Пентан",
  "н-Гексан",
  "Азот",
  "Диоксид Углерода",
  "и-Пентан",
  "Водород",
  "Кислород",
  "Водяной пар",
  "Сероводород",
  "Гелий",
];
const recomConcentrations: any[] = [
  96.43611809,
  2.992797721,
  0.0490963,
  0.006693261,
  0.036788457,
  0.004108604,
  0.008100699,
  0,
  0.456148693,
  0.002060416,
  0.0005,
  0,
  0,
  0,
  0.0076,
];

export const Microservice2: React.FC = () => {
  const inputConcMethan = useInput(recomConcentrations[0]),
    inputConcEthan = useInput(recomConcentrations[1]),
    inputConcPropane = useInput(recomConcentrations[2]),
    inputConcN_Butane = useInput(recomConcentrations[3]),
    inputConcI_Butane = useInput(recomConcentrations[4]),
    inputConcN_Pentane = useInput(recomConcentrations[5]),
    inputConcN_Hexane = useInput(recomConcentrations[6]),
    inputConcNitrogen = useInput(recomConcentrations[7]),
    inputConcCO2 = useInput(recomConcentrations[8]),
    inputConcI_Pentane = useInput(recomConcentrations[9]),
    inputConcHydrogen = useInput(recomConcentrations[10]),
    inputConcOxygen = useInput(recomConcentrations[11]),
    inputConcH2O = useInput(recomConcentrations[12]),
    inputConcH2S = useInput(recomConcentrations[13]),
    inputConcHe = useInput(recomConcentrations[14]);
  const arrayConcentration: any[] = [
    inputConcMethan,
    inputConcEthan,
    inputConcPropane,
    inputConcN_Butane,
    inputConcI_Butane,
    inputConcN_Pentane,
    inputConcN_Hexane,
    inputConcNitrogen,
    inputConcCO2,
    inputConcI_Pentane,
    inputConcHydrogen,
    inputConcOxygen,
    inputConcH2O,
    inputConcH2S,
    inputConcHe,
  ];

  const [result, setResult] = useState([0, 0]);

  const onSubmit = async (event: any) => {
    event.preventDefault();

    await axios
      .post("/ms-two", {
        concMethane: inputConcMethan.value,
        concEthane: inputConcEthan.value,
        concPropane: inputConcPropane.value,
        concN_Butane: inputConcN_Butane.value,
        concI_Butane: inputConcI_Butane.value,
        concN_Pentane: inputConcN_Pentane.value,
        сoncN_Hexane: inputConcN_Hexane.value,
        сoncNitrogen: inputConcNitrogen.value,
        сoncCO2: inputConcCO2.value,
        сoncI_Pentane: inputConcI_Pentane.value,
        сoncHydrogen: inputConcHydrogen.value,
        сoncOxygen: inputConcOxygen.value,
        concH2O: inputConcH2O.value,
        concH2S: inputConcH2S.value,
        concHe: inputConcHe.value,
      })
      .then((response) => {
        console.log(response.data);
        setResult(response.data);
      });
  };



  const useStyles = makeStyles((theme) => ({
    Grid: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(4),
    },
    table: {
      marginLeft: theme.spacing(0),
      // maxWidth: 300,
      height: 10,
      // boxSizing: 'border-box'
    },
    table2: {
      marginLeft: theme.spacing(8),
      // maxWidth: 300,
      height: 10,
      // boxSizing: 'border-box'
    },
    button: {
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(15),
      marginBottom: theme.spacing(4),
    },
    tableContainer: {
      marginLeft: theme.spacing(8),
      height: 500
    }
  }));
function createData(number: number, name: string, index: number) {
    const concentration = arrayConcentration[index]
    return {
      number,
      name,
      concentration
    }
  }

  const rows = [
    createData(1, "Метан", 0),
    createData(2, "Этан", 1),
    createData(3, "Пропан", 2),
    createData(4, "и-Бутан", 3),
    createData(5, "н-Бутан", 4),
    createData(6, "н-Пентан", 5),
    createData(7, "и-Бутан", 6),
    createData(8, "н-Гексан", 7),
    createData(9, "Азот", 8),
    createData(10, "Диоксид Углерода", 9),
    createData(11, "и-Пентан", 10),
    createData(12, "Кислород", 11),
    createData(13, "Водяной пар", 12),
    createData(14, "Сероводород", 13),
    createData(15, "Гелий", 14)
  ];
  const classes = useStyles();
  return (
    <Container fixed>
      {/* <SimpleBreadcrumbs /> */}
      <Grid container className={classes.Grid}>
        <Grid item md={4}>
          <TableContainer className={classes.tableContainer}>
            <Table className={classes.table} stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center"> № </TableCell>
                  <TableCell align="center">Название компонента</TableCell>
                  <TableCell align="center">Концентрация</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} hover role="checkbox">
                    <TableCell align="center">{row.number}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="center">
                      <TextField
                        value={row.concentration.value}
                        onChange={(e) => row.concentration.onChange(e.target.value)}
                        id={String(row)}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={2}>
          <Button onClick={onSubmit} variant="contained" color="primary" className={classes.button}>
            Расчет
          </Button>
        </Grid>
        <Grid>
          {/* <TableContainer> */}
          <Table className={classes.table2} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">T, C </TableCell>
                <TableCell align="center">Теплота сгорания газа МДж/м^3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{0.0}</TableCell>
                <TableCell align="center">{result[0].toFixed(5)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">{20.0}</TableCell>
                <TableCell align="center">{result[1].toFixed(5)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {/* </TableContainer> */}
        </Grid>
      </Grid>

    </Container>
  );
};