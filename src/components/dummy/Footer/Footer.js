import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import "./footer.css";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "1.5%",
    width: "95%",
    height: "5%",
    backgroundColor: "rgba(196, 196, 196, 0.25)",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    // <div className='root'>
    //   <Paper elevation={3} className={classes.footer}>
    //     <Typography variant='h6' className='text'>
    //       This project is developed by team "RAVENCLAW"
    //     </Typography>
    //   </Paper>
    // </div>
    <footer class='page-footer black' id='democss'>
      {/* <div class='container'>
        <div class='row'>
          <div class='col l6 s12'>
            <h5 class='white-text'>Footer Content</h5>
            <p class='grey-text text-lighten-4'>
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div class='col l4 offset-l2 s12'>
            <h5 class='white-text'>Links</h5>
            <ul>
              <li>
                <a class='grey-text text-lighten-3' href='#!'>
                  Link 1
                </a>
              </li>
              <li>
                <a class='grey-text text-lighten-3' href='#!'>
                  Link 2
                </a>
              </li>
              <li>
                <a class='grey-text text-lighten-3' href='#!'>
                  Link 3
                </a>
              </li>
              <li>
                <a class='grey-text text-lighten-3' href='#!'>
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div class='footer-copyright'>
        <div class='container'>
          This project is developed by team "RAVENCLAW" © 2020
          {/* <a class='grey-text text-lighten-4 right' href='#!'>
            More Links
          </a> */}
        </div>
      </div>
    </footer>
  );
}
