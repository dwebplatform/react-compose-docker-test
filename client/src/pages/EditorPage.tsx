import React, { useState } from "react";
import { Grid, Paper, Container } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core";
// import Graph from "../components/Graph";
//import MapWrapper from "../components/PrintGraphOL"
// import MapWrapper from "../components/MapWrapper";
import Editor from "../components/general/Editor";
import EditorGraph from "../components/general/EditorGraph";
// import SimpleBreadcrumbs from "../components/Breadcrumbs_";
import AlertDialogSlide from "../components/general/Dialog";

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
  },
}));

export const EditorPage: React.FC = () => {
  const classes = useStyles();
  const [answer, setAnswer] = useState("");

  return (
    <>
      <Container className={classes.container} maxWidth="xl">
        <AlertDialogSlide setState={setAnswer} />
        <div>
          {answer === "NEW" ? <Editor /> : answer === "GTS" ? <EditorGraph />: <></>}
        </div>
      </Container>
    </>
  );
};
