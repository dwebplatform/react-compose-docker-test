import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Button,
  Container,
  Grid,
  Input,
  TextField,
  useTheme,
} from "@material-ui/core";
import { useInput } from "../hooks/useInput";
import axios from "axios";
// import SimpleBreadcrumbs from "../components/Breadcrumbs_"

const useStyles = makeStyles((theme) => ({
  Grid: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(4),
  },
  table: {
    marginLeft: theme.spacing(8),
  },
  button: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(15),
    marginBottom: theme.spacing(4),
  },
}));

function createData(name: string, value: any, unit: string) {
  return { name, value, unit };
}

export const Microservice1: React.FC = () => {
  const classes = useStyles();
  const inputFlow = useInput(50);
  const inputPressure = useInput(7.5);
  const inputTemperature = useInput(15);
  const inputDiameter = useInput(1420);
  const inputLength = useInput(100);

  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    console.log('/ms-one')
    await axios
      .post("/ms-one", {
        pressure: inputPressure.value,
        flow: inputFlow.value,
        temperature: inputTemperature.value,
        length: inputLength.value,
        diameter: inputDiameter.value,
      })
      .then((response) => {
        //debugger;
        setResult(response.data[0]);
      });
  };
console.log(inputPressure.value)
console.log(inputFlow.value)
console.log(inputTemperature.value)
console.log(inputLength.value)
console.log(inputDiameter.value)

  const rows = [
    createData(
      "Поток на входе в участок",
      <TextField
        variant="outlined"
        size="small"
        defaultValue={inputFlow.value}
        onChange={(e) => inputFlow.onChange(e.target.value)}
      />,
      "млн.м³/сут"
    ),
    createData(
      "Давление на входе в участок",
      <TextField
        variant="outlined"
        size="small"
        defaultValue={inputPressure.value}
        onChange={(e) => inputPressure.onChange(e.target.value)}
      />,
      "МПа"
    ),
    createData(
      "Температура на входе в участок",
      <TextField
        variant="outlined"
        size="small"
        defaultValue={inputTemperature.value}
        onChange={(e) => inputTemperature.onChange(e.target.value)}
      />,
      "°C"
    ),
    createData(
      "Внешний диаметр",
      <TextField
        variant="outlined"
        size="small"
        defaultValue={inputDiameter.value}
        onChange={(e) => inputDiameter.onChange(e.target.value)}
      />,
      "км"
    ),
    createData(
      "Длина участка",
      <TextField
        variant="outlined"
        size="small"
        defaultValue={inputLength.value}
        onChange={(e) => inputLength.onChange(e.target.value)}
      />,
      "мм"
    ),
  ];

  const results = [
    createData("Давление на выходе из участка", result, "млн.м³/сут"),
  ];

  return (
    <Container fixed>
      {/* <SimpleBreadcrumbs/> */}
      <Grid container className={classes.Grid}>
        <Grid item md={4}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">Параметр</TableCell>
                <TableCell width="70" align="left">
                  Значение
                </TableCell>
                <TableCell width="70" align="left">
                  Единица измерения
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>{row.unit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item md={2}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={onSubmit}
          >
            Расчет
          </Button>
        </Grid>
        <Grid item md={4}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">Параметр</TableCell>
                <TableCell width="70" align="left">
                  Значение
                </TableCell>
                <TableCell width="70" align="left">
                  Единица измерения
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{Number(row.value).toFixed(2)}</TableCell>
                  <TableCell>{row.unit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Container>
  );
}