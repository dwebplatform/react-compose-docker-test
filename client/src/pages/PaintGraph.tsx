import React, { useState } from "react";
import {
  Grid,
  Paper,
  Container,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core";
// import Graph from "../components/Graph";
//import MapWrapper from "../components/PrintGraphOL"
import MapWrapper from "../components/general/MapWrapper"
// import Editor from '../components/Editor'
// import SimpleBreadcrumbs from "../components/Breadcrumbs_";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
  },
  root: {
    flexGrow: 1,
  },
  container: {
    // height: 600,
    maxWidth: "m",
    marginTop: theme.spacing(8.5),
  }
}));

export const PaintGraph: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} maxWidth="xl">
        {/* <SimpleBreadcrumbs /> */}
        {/* <Paper elevation={3} className={classes.paper}> */}
          {/* <Grid container> */}
            <MapWrapper />
          {/* </Grid> */}
        {/* </Paper> */}
      </Container>
    </>
  );
};
