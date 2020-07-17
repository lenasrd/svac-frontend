import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../Question";
import InfoBox from "../InfoBox";
import ScrollUpButton from "./ScrollUpButton";

const useStyles = makeStyles((theme) => ({
  questionList: {
    marginTop: "3em",
  },
}));

export default function VisualizationGeographicDataPage() {
  const classes = useStyles();

  return (
    <main>
      <ScrollUpButton></ScrollUpButton>
      <Typography variant="h4">Geographic data</Typography>
      <div className={classes.questionList}>
        <Question
          title="Which countries have published the most papers?"
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
          title="How much and with which keywords have german institutions been publishing?"
          flourishId="3073035"
          interactive={true}
        >
          <InfoBox>
            <Typography>
              The data points on this map each represent an institution located
              in Germany. The size visualizes the number of pubications that
              this institution has published. On hover the three most commonly
              used keywords in said papers are displayed.
              <br />
              <strong>Limitations:</strong> It is possible that positions
              displayed on the map are not correct. This may be due to
              inaccurate or incomplete data. Some institutions have been
              localized only by the indicated city, so that several institutions
              may be displayed in the same position. In some cases several data
              points of the same institution may be displayed. In these cases
              the data could not be mapped.
            </Typography>
          </InfoBox>
        </Question>
        <Divider></Divider>
        <Question
          title="How has the annual number of papers per university developed?"
          flourishId="2905295"
          interactive={true}
          animated={true}
        >
          <InfoBox>
            <Typography>
              This map shows the annual distribution of papers of all given
              institutions worldwide.
            </Typography>
          </InfoBox>
        </Question>
        <Divider></Divider>
        <Question
          title="How has the number of papers published worldwide developed?"
          flourishId="3196692"
        ></Question>
        <Divider></Divider>
        <Question
          title="Which countries publish how much per year?"
          flourishId="3118439"
          animated={true}
        ></Question>
        <Divider></Divider>
        <Question
          title="Which countries contributed to the 1000 most downloaded papers?"
          flourishId="3107129"
        ></Question>
        <Divider></Divider>
        <Question
          title="Which are the top three keywords per country?"
          flourishId="3125292"
          interactive={true}
        ></Question>
      </div>
    </main>
  );
}
