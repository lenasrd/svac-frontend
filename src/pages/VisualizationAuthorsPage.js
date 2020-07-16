import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../Question";
import question32 from "../images/question32.png";
import InfoBox from "../InfoBox";

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
      <div className={classes.questionList}>
        <Question
          title="#12 Which are the top 100 authors in terms of the number of their papers?"
          flourishId="3139343"
          iframeHeight="2500px"
        ></Question>
        <Divider></Divider>
        <Question title="#19 What is the distribution of the collaborations of authors?">
          <InfoBox>
            <Typography>
              We investigated the distribution of how often authors have
              published together There are a total of 1.587.756 author pairs
              that published together at least once.
              <br />
              Below is a list of how many author pairs have published X times
              together: <br />
              <ul>
                <li>1 time: 1.382.284 (~87% of total)</li>
                <li>2 times: 139.193 (~8,77% of total)</li>
                <li>3 times: 34.828 (~2,19% of total)</li>
                <li>4 times: 15.053 (~0,95% of total)</li>
                <li>5 times: 6290 (~0,4% of total)</li>
                <li>5 to 19 times: 9750 (~0,61% of total)</li>
                <li>20 times or more: 327 (~0,021% of total)</li>
              </ul>
              The Top three authorpairs are the following:
              <ul>
                <li>
                  Yi Mu and Willy Susilo, both from University of Wollongon,
                  North Wollongon, Australia with 91 joint papers
                </li>
                <li>
                  Pew-Thian Yap and Dinggang Shen, both from University of North
                  Carolina, Greensboro, USA with 59 joint papers
                </li>
                <li>
                  Xilin Chen and Shiguang Shan, both from Chinese Academy of
                  Science, Hefei, China with 57 joint papers
                </li>
              </ul>
            </Typography>
          </InfoBox>
        </Question>
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
          title="#23 What is the distribution of the number of authors in all papers?"
          flourishId="3126620"
        >
          <InfoBox>
            <Typography>
              This bar chart shows the distribution of the number of authors in
              all papers. The x-axis defines the number of authors from a paper
              while the y-axis shows the number of papers which were published
              by that number of authors.
            </Typography>
          </InfoBox>
        </Question>
        <Divider></Divider>
        <Question
          title="#29 What is the distribution between the number of authors of a paper and its number of downloads?"
          flourishId="3080892"
        >
          <InfoBox>
            <Typography>
              This scatterplot shows the distribution between the number of
              authors of a paper on the x-axis and its number of downloads on
              the y-axis.
            </Typography>
          </InfoBox>
        </Question>
        <Divider></Divider>
        <Question
          title="#30 Do authors rather work with people from the same country?"
          flourishId="3194602"
        >
          <InfoBox>
            <Typography>
              A higher number indicates cooperations across multiple countries.
            </Typography>
          </InfoBox>
        </Question>
        <Divider></Divider>
        <Question
          title="#31 Do authors rather work with people from the same institution?"
          flourishId="3194658"
        >
          <InfoBox>
            <Typography>
              A higher number indicates cooperations across multiple
              institutions.
            </Typography>
          </InfoBox>
        </Question>
        <Divider></Divider>
        <Question
          title="#32 Which authors' papers have been downloaded the most?"
          imageSrc={question32}
        ></Question>
      </div>
    </main>
  );
}
