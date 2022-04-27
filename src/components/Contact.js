import React from 'react';
import Linkedin from '../images/linkedin.jpg'
import Github from '../images/github.jpg'
import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core';


const Contact = ({title, dark, id}) => {
  const classes = useStyles();
  const contacto = [
    {
        title: 'Linkedin',
        image: Linkedin,
        link: 'https://www.linkedin.com/in/sebastian-esteban-palma-s%C3%A1nchez-8707aa12a',
    },
    {
        title: 'GitHub',
        image: Github,
        link: 'https://github.com/SebasPalmaSan',
    }
]
  return (
  <div className={`${classes.section} ${dark && classes.sectiondark}`}>
    <div className={classes.sectioncontact} id={id}>
      
      <Typography variant="h3">{title}</Typography>
           <Grid container className={classes.grid}>
            { 
              contacto.map(({title, image,link}, index)=>(
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia image={image} className={classes.caratula} titulo="caratula"/>
                    <CardContent>
                      <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                        {title}
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            }
           </Grid>
    </div>
  </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight:"40vh",
  },
  sectiondark:{
    backgroundColor:"#f4f4f4",
    color:"#333",
  }, 
  sectioncontact: {
    maxWidth: "80vw",
    margin: "0 auto",
    
    padding: theme.spacing(2),
  },
  title: {
    
  },
  grid:{
    marginTop: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
    minHeight: 275,
    margin: theme.spacing(2),
    borderRadius: "50px",
    border: "5px solid #263238",
  },
  caratula:{
    height: 200,
    paddingTop: '56.25%', //16:9
  }
}));

export default Contact