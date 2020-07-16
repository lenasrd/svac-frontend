import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../Question";

const useStyles = makeStyles((theme) => ({
  questionList: {
    marginTop: "3em",
  },
}));

export default function VisualizationPaperMetaDataPage() {
  const classes = useStyles();

  return (
    <main>
      <Typography variant="h4">Paper metadata</Typography>
      <Typography>
        In this section, we will display our findings related to paper meta data
        in our dataset.
      </Typography>
      <div className={classes.questionList}>
        <Question title="#22" flourishId="3080901"></Question>
        <Divider></Divider>
        <Question title="#33" flourishId="3126640"></Question>
        <Divider></Divider>
        <Question
          title="#35"
          flourishId="3148146"
          secondFlourishId="3148165"
        ></Question>
      </div>
    </main>
  );
}
