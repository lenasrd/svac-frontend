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

export default function VisualizationUniversitiesPage() {
  const classes = useStyles();

  return (
    <main>
      <Typography variant="h4">Universities</Typography>
      <Typography>
        In this section, we will display our findings related to universities in
        our dataset.
      </Typography>
      <div className={classes.questionList}>
        <Question
          title="#7 How have the top publishing institutions developed?"
          flourishId="3188543"
          iframeHeight="2500px"
        ></Question>
        <Divider></Divider>
        <Question
          title="#9 Which institutions have been collaborating?"
          flourishId="3189234"
          interactive={true}
        ></Question>
        <Divider></Divider>
        <Question
          title="#16 Which are the top 100 universities in terms of the number of downloads of their publications?"
          flourishId="3137816"
          iframeHeight="2500px"
        ></Question>
        <Divider></Divider>
        <Question
          title="#28 What are the institutions that have the most authors?"
          flourishId="3114554"
          iframeHeight="1400px"
        ></Question>
      </div>
    </main>
  );
}
