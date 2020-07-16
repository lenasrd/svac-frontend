import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../Question";
import question2 from "../images/question2.png";

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
        <Question
          title="#2 Which keywords have been used most commonly?"
          imageSrc={question2}
        ></Question>
        <Divider></Divider>
        <Question
          title="#4 How have the most popular keywords developed?"
          flourishId="3030521"
          animated={true}
        ></Question>
        <Divider></Divider>
        <Question
          title="#6 Which keywords occur together in publications?"
          interactive={true}
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<iframe src='https://vacs.htw.bytex.digital/keywordmap/index.html' frameborder='0' scrolling='no' style='width: 100%; height: 600px'></iframe> ",
            }}
          />
        </Question>
        <Divider></Divider>
        <Question
          title="#8 How have the most commonly used keywords developed?"
          flourishId="3189384"
        ></Question>
        <Divider></Divider>
        <Question
          title="#25 Do the listed keywords appear in the introduction or abstract of a publication?"
          flourishId="3124774"
          secondFlourishId="3125623"
        ></Question>
        <Divider></Divider>
        <Question
          title="#34 What are the most used keywords for Open Access and for paid publications? Are they different?"
          flourishId="3126947"
        ></Question>
        <Divider></Divider>
        <Question
          title="#52 How many keywords are used to describe publications?"
          flourishId="3125051"
          secondFlourishId="3124894"
        ></Question>
      </div>
    </main>
  );
}
