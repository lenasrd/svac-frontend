import React from "react";
import Question from "../Question";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  questionList: {
    marginTop: "3em",
  },
}));

export default function AuthorsVisualizationPage() {
  const classes = useStyles();

  return (
    <main>
      <Typography variant="h4">Authors</Typography>
      <Typography>
        In this section, we will display our findings related to the Authors in
        our dataset.
      </Typography>
      <div className={classes.questionList}>
        <Question
          title="Which authors have published most papers?"
          animated={true}
        >
          <Typography>I'm an explanatory text</Typography>
        </Question>
        <Divider></Divider>
        <Question title="Which authors have been publishing over the longest time period?">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<iframe src="https://public.tableau.com/views/CTSchoolDistrictsbyIncomeandGradeLevels2009-13/Sheet1?:embed=y&:display_count=n&:origin=viz_share_link" width="800" height="600"></iframe>',
            }}
          />
        </Question>
        <Divider></Divider>
        <Question title="Which authors publish together often?">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<iframe src='https://flo.uri.sh/visualisation/3092096/embed' frameborder='0' scrolling='no' style='width:100%;height:600px;'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/2780103/?utm_source=embed&utm_campaign=visualisation/2780103' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>",
            }}
          />
        </Question>
      </div>
    </main>
  );
}
