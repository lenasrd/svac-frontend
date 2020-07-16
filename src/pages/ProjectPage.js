import Typography from "@material-ui/core/Typography";
import React from "react";
import project_visual from "../images/project_visual.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  visual: {
    width: "22em",
    padding: "3em",
  },
}));

export default function ProjectPage() {
  const classes = useStyles();

  return (
    <main>
      <img
        src={project_visual}
        className={classes.visual}
        alt="data visual representing the project"
      ></img>
      <Typography variant="h4">Project</Typography>
      <Typography>
        In computer science, an estimation of hundreds of thousands of
        scientific publications are published every year. Even though the
        content itself is usually placed behind a payment barrier, some metadata
        are freely accessible, such as title, abstract, keywords of the
        publication, name of the conference as well as names and universities of
        the authors.
        <br />
        <br />
        A well-known publication series for computer science is the “Lecture
        Notes in Computer Science” by Springer-Verlag. Since 1973, more than 12
        000 books containing over 360 000 papers have been published in this
        series. The aim of the project was to visualize and analyze the metadata
        of these publications. For this purpose, the data first had to be
        extracted using web scraping and prepared for further processing using a
        range of different methods. This involved the use of natural language
        processing, similarity matching and geolocation services. Over 320 000
        keywords and 190 000 locations had to be normalized and matched. The
        main difficulties were to find duplicates within the inconsistent
        spellings and partially missing information of identical data sets. The
        processed data enabled numerous analyses to be carried out.
        <br />
        <br />
        Browse our topics to find answers to the questions you have about our
        data!
      </Typography>
    </main>
  );
}
