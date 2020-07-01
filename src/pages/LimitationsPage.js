import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    marginBottom: "2em",
  },
  section: {
    marginBottom: "2em",
  },
}));

export default function LimitationsPage() {
  const classes = useStyles();
  return (
    <main>
      <Typography variant="h4">Limitations</Typography>
      <Typography className={classes.listItem}>
        In this section we will point out the limitations our visualizations and
        analyses are bound to.
      </Typography>
      <Typography variant="h5">Absolute statements</Typography>
      <Typography className={classes.listItem}>
        Statements made in this publication are never absolute and always refer
        to the captured dataset.
      </Typography>
      <Typography variant="h5">Author names</Typography>
      <Typography className={classes.listItem}>
        Authors with the same name can not be differentiated.
        <br />
        <strong>Effect: </strong> For visualisations including author names,
        authors with the same name will be interpreted as the same author. (is
        this exactly what happens?)
      </Typography>
      <Typography variant="h5">University names</Typography>
      <Typography className={classes.listItem}>
        Springer does not suggest fixed spellings for universities. A unifying
        algorithm has been implemented, but certain different spellings may have
        remained.
        <br />
        <strong>Effect: </strong> Different spellings of one university will be
        interpreted as several universities.
      </Typography>
      <Typography variant="h5">Keywords</Typography>
      <Typography className={classes.listItem}>
        There are two types of keywords, those that have been generated
        automatically and those that have been added manually. In this
        publication only the manually added keywords are taken into
        consideration as a certain inaccuracy was assumed (or observed?) within
        the automatically generated keywords.
        <br />
        <strong>Effect: </strong> Ununified spellings of one university will be
        interpreted as several universities.
      </Typography>

      <Typography className={classes.listItem}>
        Springer does not suggest fixed spellings for keywords. A unifying
        algorithm has been implemented, but certain different spellings may have
        remained.
        <br />
        <strong>Effect: </strong> Ununified spellings of one keyword will be
        interpreted as several keywords.
      </Typography>
      <Typography variant="h5">Null values</Typography>

      <Typography className={classes.listItem}>
        Null value analysis (display latest values here)
        <br />
        <strong>Effect: </strong> ?
      </Typography>
    </main>
  );
}
