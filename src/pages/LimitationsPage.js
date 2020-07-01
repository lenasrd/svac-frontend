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
    </main>
  );
}
