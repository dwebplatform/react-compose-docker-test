import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { makeStyles } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props: any) {
  let { setState } = props;
  const [open, setOpen] = React.useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(5),
    },
    button: {
      marginRight: theme.spacing(18),
    },
  }));

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const clickY = () => {
    setState("NEW");
    handleClose();
  };

  const clickN = () => {
    setState("GTS");
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="primary"
        onClick={handleClickOpen}
        className={classes.menuButton}
      >
        Выберите схему
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Выберите схему для редактирования"}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">            
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button
            onClick={clickY}
            color="primary"
            className={classes.button}
          >
            Новая схема
          </Button>
          <Button onClick={clickN} color="primary"
          >
            Схема ГТС ЕСГ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
