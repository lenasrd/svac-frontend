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
          title="#12 Which are the top 100 authors in terms of the number of their publications?"
          flourishId="3139343"
          iframeHeight="2500px"
          info="This is a descriptive text about visualization #12 that briefly explains what is displayed here."
        ></Question>
        <Divider></Divider>
        <Question
          title="#19 What is the distribution of the collaborations of authors?"
          flourishId="2993152"
        ></Question>
        <Divider></Divider>
        <Question
          title="#20 Which are the top 100 papers in terms of the count of authors involved?"
          flourishId="3137839"
          iframeHeight="2500px"
        ></Question>
        <Divider></Divider>
        <Question
          title="#21 Which are the top 100 authors in terms of the number of downloads?"
          flourishId="3139367"
          iframeHeight="2500px"
        ></Question>
        <Divider></Divider>
        <Question
          title="#23 What is the distribution of the number of authors in all publications?"
          flourishId="3126620"
        ></Question>
        <Divider></Divider>
        <Question
          title="#29 What is the distribution between the number of authors of a publication and it's number of downloads?"
          flourishId="3080892"
        ></Question>
        <Divider></Divider>
        <Question
          title="#30 Do authors prefer to work with people from the same university?"
          flourishId="3194602"
        ></Question>
        <Divider></Divider>
        <Question
          title="#31 Do authors prefer to work with people from the same country?"
          flourishId="3194658"
        ></Question>
        <Divider></Divider>
        <Question
          title="#32 Which authors' publications have been downloaded the most?"
          imageSrc={question32}
        ></Question>
      </div>
    </main>
  );
}
