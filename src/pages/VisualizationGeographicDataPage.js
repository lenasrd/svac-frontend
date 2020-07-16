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
        <Question
          title="#1 Which countries have the most publications?"
          flourishId="3072954"
          interactive={true}
        ></Question>
        <Divider></Divider>
        <Question
          title="#5 How much and with which keywords have german institutions been publishing?"
          flourishId="3073035"
          interactive={true}
        ></Question>
        <Divider></Divider>
        <Question
          title="#11 How has the annual number of publications per university developed?"
          flourishId="2905295"
          interactive={true}
          animated={true}
        ></Question>
        <Divider></Divider>
        <Question
          title="#13 How has the total number of worldwide publications developed?"
          flourishId="3196692"
        ></Question>
        <Divider></Divider>
        <Question
          title="#14 Which countries publish how much per year?"
          flourishId="3118439"
          animated={true}
        ></Question>
        <Divider></Divider>
        <Question
          title="#15 Which countries contribute to the top 1000 popular papers?"
          flourishId="3107129"
        ></Question>
        <Divider></Divider>
        <Question
          title="#18 Which are the top three keywords per country?"
          flourishId="3125292"
          interactive={true}
        ></Question>
      </div>
    </main>
  );
}
