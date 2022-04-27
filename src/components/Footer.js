import React from 'react'
import { makeStyles } from '@material-ui/styles';

const Footer = ({stars}) => {
    const classes = useStyles();
    return (
      <div className={classes.footer}>
        © Sebast - 2022. Todos los derechos reservados - Web apto para todo público
      </div>
    )
  }
  
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#263238",
        color: "#f4f4f4",
        fontSize: "1.5rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "6vh"
    }
  }));
  


export default Footer