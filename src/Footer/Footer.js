import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import "../Footer/footer.css";

const useStyles = makeStyles((theme) => ({

  footer: {
    marginTop: "1.5%",
    width: '95%',
    height: '5%',
    backgroundColor: 'rgba(196, 196, 196, 0.25)',
  },

}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className="root">
      <Paper elevation={3} className={classes.footer}> 
      <Typography variant="h6" className="text">
      This project is developed by team "RAVENCLAW"
    </Typography>
      </Paper>
    </div>
  );
}

