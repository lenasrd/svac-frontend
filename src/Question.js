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
    backgroundColor: "#2171a1",
    border: "none",
    color: "white",
    padding: "0.5em",
    borderRadius: "5em",
    fontSize: "1em",
    marginLeft: "0.5em",
  },
  highlightInteractive: {
    backgroundColor: "#35a9a0bb",
    border: "none",
    color: "white",
    padding: "0.5em",
    borderRadius: "5em",
    fontSize: "1em",
    marginLeft: "0.5em",
  },
  titleBox: {
    display: "flex",
  },
  infoBox: {
    padding: "0.8em",
    background: "#288BA244",
    borderRadius: "0.5em",
  },
}));

export default function Question(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  const height = props.iframeHeight ? props.iframeHeight : "600px";
  const iframe = "<iframe src='https://flo.uri.sh/visualisation/".concat(
    props.flourishId,
    "/embed' frameborder='0' scrolling='no' style='width:100%;height:",
    height,
    ";'></iframe>"
  );

  const secondHeight = props.secondIframeHeight
    ? props.secondIframeHeight
    : "600px";
  const secondIframe = "<iframe src='https://flo.uri.sh/visualisation/".concat(
    props.secondFlourishId,
    "/embed' frameborder='0' scrolling='no' style='width:100%;height:",
    secondHeight,
    ";'></iframe>"
  );
  const altText = "Visualization of".concat(props.title);

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
          {props.interactive && (
            <Typography variant="h5" className={classes.highlightInteractive}>
              interactive
            </Typography>
          )}
        </div>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      <div>
        <Collapse in={open}>
          {props.children}
          {props.info && (
            <Typography className={classes.infoBox}>{props.info}</Typography>
          )}
          {props.flourishId && (
            <div
              dangerouslySetInnerHTML={{
                __html: iframe,
              }}
            />
          )}
          {props.secondFlourishId && (
            <div
              dangerouslySetInnerHTML={{
                __html: secondIframe,
              }}
            />
          )}
          {props.imageSrc && (
            <img src={props.imageSrc} width="100%" alt={altText} />
          )}
        </Collapse>
      </div>
    </main>
  );
}
