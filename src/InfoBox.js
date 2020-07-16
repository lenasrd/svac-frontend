import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  infoBox: {
    padding: "0.8em",
    background: "#288BA222",
    marginBottom: "8px",
    border: "1px solid #288BA255",
  },
}));

export default function Question(props) {
  const classes = useStyles();
  return <div className={classes.infoBox}>{props.children}</div>;
}
