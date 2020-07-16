import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../Question";
import question2 from "../images/question2.png";
import InfoBox from "../InfoBox";

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
      <div className={classes.questionList}>
        <Question
          title="#2 How have the most commonly used keywords developed?"
          flourishId="3030521"
          secondFlourishId="3189384"
          imageSrc={question2}
          animated={true}
        ></Question>
        <Divider></Divider>
        <Question
          title="#6 Which keywords occur together in papers?"
          interactive={true}
        >
          <InfoBox>
            <Typography>
              A Keyword-Cloud-Cluster that visualizes the relation between
              keywords that appear together in papers and their density.
              <br />
              <strong>Limitations:</strong> The map shows only keywords that
              appear at least in 200 different papers and have at least one
              collaboration to another keyword with at least 15 occurences (the
              two keywords appear together in at least 15 different papers).
            </Typography>
          </InfoBox>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<iframe src='https://vacs.htw.bytex.digital/keywordmap/index.html' frameborder='0' scrolling='no' style='width: 100%; height: 600px'></iframe> ",
            }}
          />
        </Question>
        <Divider></Divider>
        <Question
          title="#25 Do the listed keywords appear in the introduction or abstract of a paper?"
          flourishId="3124774"
          secondFlourishId="3125623"
        ></Question>
        <Divider></Divider>
        <Question
          title="#34 What are the most used keywords for Open Access and for paid papers? Are they different?"
          flourishId="3126947"
        ></Question>
        <Divider></Divider>
        <Question
          title="#52 How many keywords are used to describe papers?"
          flourishId="3125051"
          secondFlourishId="3124894"
        ></Question>
      </div>
    </main>
  );
}
