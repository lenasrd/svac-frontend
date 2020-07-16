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

export default function VisualizationGeographicDataPage() {
  const classes = useStyles();

  return (
    <main>
      <Typography variant="h4">Geographic data</Typography>
      <div className={classes.questionList}>
        <Question
          title="#1 Which countries have published the most papers?"
          flourishId="3072954"
          interactive={true}
        >
          <InfoBox>
            <Typography>
              This map shows the total number of papers per country. A paper is
              assigned to a country if at least one of the author's institutions
              is in this country.
              <br />
              <strong>Limitations:</strong> Some papers might not count into the
              total, if they can not be mapped due to missing country
              information in the data set of the associated institution.
            </Typography>
          </InfoBox>
        </Question>
        <Divider></Divider>
        <Question
          title="#5 How much and with which keywords have german institutions been publishing?"
          flourishId="3073035"
          interactive={true}
        ></Question>
        <Divider></Divider>
        <Question
          title="#11 How has the annual number of papers per university developed?"
          flourishId="2905295"
          interactive={true}
          animated={true}
        ></Question>
        <Divider></Divider>
        <Question
          title="#13 How has the number of papers published worldwide developed?"
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
