import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgba(196, 196, 196, 0.25)',
    borderRadius: 0,
    textDecoration: 'none',
    fontFamily: 'Playfair Display',
    fontSize: '2.25em',
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="black"
        centered
      >
       <Tab component={Link} to="/" label="Home" />
        <Tab component={Link} to="/aboutus" label="About Us" />
        <Tab component={Link} to="/register" label="Register" />
        <Tab component={Link} to="/login" label="Login"/>
      </Tabs>
    </Paper>
  );
}