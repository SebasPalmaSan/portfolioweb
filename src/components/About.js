import { Card, CardContent, CardMedia, CardActions, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Seba from '../images/seba1.jpg'
import TypeWriterEffect from 'react-typewriter-effect'
import pdf from '../images/SEBASTIÁN-ESTEBAN-PALMA-SÁNCHEZ.2022.pdf'

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
           <Typography variant="h3">{title}</Typography>
           <Card className={classes.card}>
               <CardMedia image={ Seba } className={classes.cardmedia} title="picture"/>
               <CardContent className={classes.cardcontent}>
                   <TypeWriterEffect
                     text="Hola!, Soy Sebastián Palma Sánchez"
                     textStyle={{fontSize: "2.5rem", fontWeight: "bold", color: "#c34f0cbe"}}
                     startDelay={100}
                     cursorColor="#333"
                     typeSpeed={100}
                   />
                   <TypeWriterEffect
                     text="Soy Developer Web Full Stack Jr"
                     textStyle={{fontSize: "1.5rem", fontWeight: "500", color: "#546e7a"}}
                     startDelay={2500}
                     cursorColor="#333"
                     typeSpeed={100}
                   />
                   <Typography variant="h6" color="textSecondary">
                     Nací en 1986, en el sur de la provincia de Buenos Aires.
                     Soy un apasionado por la música!, estudié varios años en el Conservatorio de Música de Bahía Blanca la carrera de "Canto Lírico y Camarístico".
                     De grande adquirí una nueva pasión por la tecnología y la programación.
                     Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales, 
                     siempre tengo la mejor disposición para la realización de mis labores.
                   </Typography>
               </CardContent>
               <CardActions>
                   <Button variant="contained" className={classes.pdfCv}>
                       <a href={ pdf } download>
                       Descargar CV
                       </a>
                       </Button>
               </CardActions>
            </Card>
        </div>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
    section: {
        minHeight:"100vh",
    },
    sectiondark:{
        backgroundColor:"#333",
        color:"#f4f4f4",
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
        padding: theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            maxWidth: "98vw",
        },

    },
    card: {
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(5),
        position: "relative",
    },
    cardmedia: {
        width: "40vw",
        height: "60vh",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5),
        border: "1px solid #263238",
        [theme.breakpoints.down("sm")]:{
            display: "none",
        },

    },
    cardcontent: {
        marginTop: theme.spacing(2),
        "& h6": {
            marginTop: theme.spacing(6),
            [theme.breakpoints.down("sm")]:{
                display: "none",
            },
        },
    },
    pdfCv: {
        position: "absolute",
        bottom: "4vh",
        right: "2rem",
        [theme.breakpoints.down("sm")]:{
            bottom: 10,
            right: "1rem"
        },
        backgroundColor: "#263238",
        color: "#f4f4f4",
        padding: theme.spacing(2),
        "&:hover": {
            backgroundColor: "f4f4f4",
        },
        "& a": {
            color: "#f4f4f4",
            textDecoration: "none",
            fontWeight: 900,
        },
        "& a:hover": {
            color: "#263238",
            backgroundColor: "#c34f0cbe",
        }
    }
  }));

export default About