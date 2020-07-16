import React from "react";
import Fab from "@material-ui/core/Fab";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    position: "fixed",
    right: "2em",
    bottom: "2em",
    background: "#35A9A0",
    color: "white",
  },
}));

export default function VisualizationAuthorsPage() {
  const classes = useStyles();

  return (
    <Fab
      aria-label="edit"
      className={classes.button}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
}
