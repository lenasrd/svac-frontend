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

export default function VisualizationKeywordsPage() {
  const classes = useStyles();

  return (
    <main>
      <Typography variant="h4">Keywords</Typography>
      <Typography>
        In this section, we will display our findings related to keywords in our
        dataset.
      </Typography>
      <div className={classes.questionList}>
        <Question title="#2" imageSrc={question2}></Question>
        <Divider></Divider>
        <Question title="#4" flourishId="3125292"></Question>
        <Divider></Divider>
        <Question title="#6">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<iframe src='https://vacs.htw.bytex.digital/keywordmap/index.html' frameborder='0' scrolling='no' style='width: 100%; height: 600px'></iframe> ",
            }}
          />
        </Question>
        <Divider></Divider>
        <Question title="#8" imageSrc={question8}></Question>
        <Divider></Divider>
        <Question
          title="#25"
          flourishId="3124774"
          secondFlourishId="3125623"
        ></Question>
        <Divider></Divider>
        <Question title="#26" flourishId="3119439"></Question>
        <Divider></Divider>
        <Question title="#34" flourishId="3126947"></Question>
        <Divider></Divider>
        <Question
          title="#52"
          flourishId="3125051"
          secondFlourishId="3124894"
        ></Question>
      </div>
    </main>
  );
}
