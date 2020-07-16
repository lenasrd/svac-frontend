import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../Question";
import InfoBox from "../InfoBox";

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
        <Question
          title="#22 What is the distribution between the length of the abstract of a publication and its number of downloads?"
          flourishId="3080901"
        >
          <InfoBox>
            <Typography>
              This scatterplot shows the distribution between the length of the
              abstract of a publication on the x-axis and its number of
              downloads on the y-axis.
            </Typography>
          </InfoBox>
        </Question>
        <Divider></Divider>
        <Question
          title="#33 Did the avarage length of papers change over time?"
          flourishId="3126640"
        ></Question>
        <Divider></Divider>
        <Question
          title="#35 Does an increasing number of citations result in more downloads of the cited paper?"
          flourishId="3148146"
          secondFlourishId="3148165"
        ></Question>
      </div>
    </main>
  );
}
