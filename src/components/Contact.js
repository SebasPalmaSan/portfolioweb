import { Button, makeStyles, Paper, Radio, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  const [ value, setValue ] = useState("tu mensaje");
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
           <Typography variant="h3">{title}</Typography>
           <Paper className={classes.root}>
             <div className={classes.titlechoices}>
               <Typography variant="h5">Hola! ponete en contacto conmigo!</Typography>
               <div className={classes.choices}>
                 <span>Dejame tu mensaje</span>
                 <Radio 
                    value="tu mensaje"
                    checked={value === "tu mensaje"}
                    color="primary"
                    onChange={handleChange}
                 />
                 <span>Presupuesto</span>
                 <Radio 
                    value="Presupuesto"
                    checked={value === "Presupuesto"}
                    color="primary"
                    onChange={handleChange}
                 />
               </div>
             </div>
             <form className={classes.formulario} Validate autoComplete="off">
               <TextField label="Nombre"/>
               <TextField label="Apellido"/>
               <TextField label="Email"/>
               {
                 value === "Presupuesto" ? (
                   <>
                   <TextField label="Servicio Solicitado"/>
                   <TextField label="Presupuesto Estimado"/>
                   </>
                 ) : null
               }
               <TextField label="Tu Mensaje"/>
             </form>
             <Button variant="contained">Enviar</Button>
           </Paper>
      </div>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  section: {
      minHeight:"100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",

  },
  sectiondark:{
      backgroundColor:"#f4f4f4",
      color:"#333",
  },
  root: {
    marginTop: theme.spacing(4),
    backgroundColor:"#c34f0cbe",
    color: "#f4f4f4",
    fontSize: "1.5rem",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    "& Button": {
      backgroundColor: "#f4f4f4",
      color: "#c34f0cbe",
      fontWeight: 800,
      fontSize: "1.3rem",
      marginTop: theme.spacing(5)
    },
    "& Button:hover" : {
      backgroundColor: "#c34f0cbe",
      color: "#f4f4f4"
    }
  },
  sectioncontent: {
      maxWidth: "80vw",
      margin: "0 auto",
      color:"#333",
  },
  titlechoices: {
    "& h5" : {
      marginTop: theme.spacing(5)
    }
  },
  choices: {
    display: "flex",
    flexDirection: "column"
  }
}));

export default Contact