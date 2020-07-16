import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../Question";
import question2 from "../images/question2.png";
import question8 from "../images/question8.png";

const useStyles = makeStyles((theme) => ({
  questionList: {
    marginTop: "3em",
  },
}));

export default function VisualizationPaperMetaDataPage() {
  const classes = useStyles();

  return (
    <main>
      <Typography variant="h4">Paper meta data</Typography>
      <Typography>
        In this section, we will display our findings related to paper meta data
        in our dataset.
      </Typography>
      <div className={classes.questionList}></div>
    </main>
  );
}
