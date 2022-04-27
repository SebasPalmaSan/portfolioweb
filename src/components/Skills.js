import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Technologies from './Technologies';

const Skills = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
           <Typography variant="h3">{title}</Typography>
           <Technologies />
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
      minHeight:"100vh",

  },
  sectiondark:{
      backgroundColor:"#f4f4f4",
      color:"#333",
  },
  sectioncontent: {
      maxWidth: "80vw",
      margin: "0 auto",
      color:"#333",
      padding: theme.spacing(5),
  }
}));

export default Skills