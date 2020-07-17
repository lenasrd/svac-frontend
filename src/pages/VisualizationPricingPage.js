import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../Question";
import question24 from "../images/question24.png";
import ScrollUpButton from "./ScrollUpButton";

const useStyles = makeStyles((theme) => ({
  questionList: {
    marginTop: "3em",
  },
}));

export default function VisualizationPricingPage() {
  const classes = useStyles();

  return (
    <main>
      <ScrollUpButton></ScrollUpButton>
      <Typography variant="h4">Pricing</Typography>
      <div className={classes.questionList}>
        <Question
          title="How many of the papers are open access and how did the share develop?"
          flourishId="3092096"
        ></Question>
        <Divider></Divider>
        <Question
          title="Is the price of a book related to the page count?"
          imageSrc={question24}
        ></Question>
      </div>
    </main>
  );
}
