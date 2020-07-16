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

export default function VisualizationPricingPage() {
  const classes = useStyles();

  return (
    <main>
      <Typography variant="h4">Pricing</Typography>
      <Typography>
        In this section, we will display our findings related to pricing in our
        dataset.
      </Typography>
      <div className={classes.questionList}>
        <Question
          title="#10 How much of the publications is open access and how did the share develop?"
          flourishId="3092096"
        ></Question>
        <Divider></Divider>
        <Question
          title="#24 Is the price of a book related to the page count?"
          flourishId="3106275"
        ></Question>
      </div>
    </main>
  );
}
