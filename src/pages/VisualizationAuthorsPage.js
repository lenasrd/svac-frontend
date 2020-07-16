import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../Question";
import question32 from "../images/question32.png";

const useStyles = makeStyles((theme) => ({
  questionList: {
    marginTop: "3em",
  },
}));

export default function VisualizationAuthorsPage() {
  const classes = useStyles();

  return (
    <main>
      <Typography variant="h4">Authors</Typography>
      <Typography>
        In this section, we will display our findings related to the authors in
        our dataset.
      </Typography>
      <div className={classes.questionList}>
        <Question
          title="#12"
          flourishId="3139343"
          iframeHeight="2500px"
          info="This is a descriptive text about visualization #12 that briefly explains what is displayed here."
        ></Question>
        <Divider></Divider>
        <Question title="#19" flourishId="2993152"></Question>
        <Divider></Divider>
        <Question
          title="#20"
          flourishId="3137839"
          iframeHeight="2500px"
        ></Question>
        <Divider></Divider>
        <Question
          title="#21"
          flourishId="3139367"
          iframeHeight="2500px"
        ></Question>
        <Divider></Divider>
        <Question title="#23" flourishId="3126620"></Question>
        <Divider></Divider>
        <Question title="#29" flourishId="3080892"></Question>
        <Divider></Divider>
        <Question title="#30" flourishId="3194602"></Question>
        <Divider></Divider>
        <Question title="#31" flourishId="3194658"></Question>
        <Divider></Divider>
        <Question title="#32" imageSrc={question32}></Question>
      </div>
    </main>
  );
}
