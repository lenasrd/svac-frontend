import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../Question";
import question13 from "../images/question13.png";

const useStyles = makeStyles((theme) => ({
  questionList: {
    marginTop: "3em",
  },
}));

export default function VisualizationGeographicDataPage() {
  const classes = useStyles();

  return (
    <main>
      <Typography variant="h4">Geographic data</Typography>
      <Typography>
        In this section, we will display our findings related to geographic data
        in our dataset.
      </Typography>
      <div className={classes.questionList}>
        <Question title="#1" flourishId="3072954"></Question>
        <Divider></Divider>
        <Question title="#5" flourishId="3073035"></Question>
        <Divider></Divider>
        <Question title="#11" flourishId="2905295"></Question>
        <Divider></Divider>
        <Question title="#13" imageSrc={question13}></Question>
        <Divider></Divider>
        <Question title="#14" flourishId="3118439"></Question>
        <Divider></Divider>
        <Question title="#15" flourishId="3107129"></Question>
        <Divider></Divider>
        <Question title="#18" flourishId="3125292"></Question>
      </div>
    </main>
  );
}
