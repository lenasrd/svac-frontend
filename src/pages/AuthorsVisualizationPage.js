import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import Question from "../Question";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    questionList: {
        marginTop: '3em',
    }
}));

export default function AuthorsVisualizationPage() {
    const classes = useStyles();

    return(
        <main>
            <Toolbar/>
            <h1>Authors</h1>
            <Typography>In this section, we will display our findings related to the Authors in our dataset.</Typography>
            <div className={classes.questionList}>
                <Question title="Which authors have published most papers?">
                    <div dangerouslySetInnerHTML={
                        {__html: '<iframe src="https://public.tableau.com/views/CTSchoolDistrictsbyIncomeandGradeLevels2009-13/Sheet1?:embed=y&:display_count=n&:origin=viz_share_link" width="800" height="600"></iframe>'}
                    }/>
                </Question>
                <Divider></Divider>
                <Question title="Which authors have been publishing over the longest time period?">
                    <div dangerouslySetInnerHTML={
                        {__html: '<iframe src="https://public.tableau.com/views/CTSchoolDistrictsbyIncomeandGradeLevels2009-13/Sheet1?:embed=y&:display_count=n&:origin=viz_share_link" width="800" height="600"></iframe>'}
                    }/>
                </Question>
                <Divider></Divider>
                <Question title="Which authors publish together often?">
                    <div dangerouslySetInnerHTML={
                        {__html: '<iframe src="https://public.tableau.com/views/CTSchoolDistrictsbyIncomeandGradeLevels2009-13/Sheet1?:embed=y&:display_count=n&:origin=viz_share_link" width="800" height="600"></iframe>'}
                    }/>
                </Question>
            </div>
        </main>
    )
};