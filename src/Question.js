import React from "react";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  questionPreview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "0.35em",
    "&:hover": {
      cursor: "pointer",
    },
  },
  highlightAnimated: {
    backgroundClip: "text",
    color: "transparent",
    background:
      "linear-gradient(270deg, rgba(53,169,160,1) 0%, rgba(40,139,162,1) 100%)",
    paddingRight: "0.1em",
    marginLeft: "0.5em",
    fontStyle: "italic",
  },
  titleBox: {
    display: "flex",
  },
}));

export default function Question(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <main>
      <div className={classes.questionPreview} onClick={handleChange}>
        <div className={classes.titleBox}>
          <Typography variant="h5">{props.title}</Typography>
          {props.animated && (
            <Typography variant="h5" className={classes.highlightAnimated}>
              animated
            </Typography>
          )}
        </div>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      <div>
        <Collapse in={open}>{props.children}</Collapse>
      </div>
    </main>
  );
}
