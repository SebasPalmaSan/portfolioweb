import React from 'react'
import { AppBar, makeStyles, Toolbar, List, IconButton, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core'
import logo from  '../images/LogoSebast.jpg'
import { Link } from 'react-scroll'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone'
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone'
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone'
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone'
import ListTwoTone from '@material-ui/icons/List'
import CancelTwoTone from '@material-ui/icons/Cancel'
import { useState } from 'react'



const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const links = [
    {
      id: "about",
      text: "Sobre mi",
      icon: <InfoTwoToneIcon fontSize="large" className={classes.iconcolour} />, 
    },
    {
      id: "skills",
      text: "Habilidades",
      icon: <EmojiPeopleTwoToneIcon fontSize="large" className={classes.iconcolour}/>, 
    },
    {
      id: "work",
      text: "Mis Proyectos",
      icon: <WorkTwoToneIcon fontSize="large" className={classes.iconcolour} />, 
    },
    {
      id: "contact",
      text: "Contactame",
      icon: <ContactMailTwoToneIcon fontSize="large" className={classes.iconcolour} />, 
    },
  ]
  

  return (
    <>
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} className={classes.logo} alt='Logo'/>
        <List className={classes.menu}>
          {
            links.map(({id,text}, index)=>(
              <Link key={ index } to={ id } spy={ true } activeClass="active" smooth={ true } duration={500} offset={-120}>{ text }</Link>
            ))
          }
        </List>
        <IconButton edge="end" className={classes.menubutton} onClick={()=> setOpen(!open)}>
          <ListTwoTone fontSize="large"/>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
      <IconButton className={classes.menubutton} onClick={()=> setOpen(false)}>
        <CancelTwoTone fontSize="large" />
      </IconButton>
      <Divider />
          {
            links.map(({id,text,icon}, index)=>(
              <Link key={ index } className="sidebar" to={ id } spy={ true } activeClass="active" smooth={ true } duration={500} offset={-120}>
                <ListItem component="h5">
                  <span>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                  </span>{text}
                </ListItem>
                </Link>
            ))
          }
    </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#263238",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    marginLeft: "0",
    margin: "0 auto",
    height: "7.5rem",
    objectFit: "contain",
    "&:hover": {
      cursor: 'pointer',
    },
    [theme.breakpoints.down("sm")]:{
      marginLeft: "0",
      margin: "0 auto",
      height: "4.5rem",
    },
  },
  iconcolour:{
    color: "#c34f0cbe",
  },
  menu: {
    [theme.breakpoints.down("sm")]:{
      display: "none",
    },
    "& a": {
      color: "#f4f4f4",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(2)
    },
    "& a:hover": {
      cursor: "pointer",
      color: "#c34f0cbe",
    }
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]:{
      display: "block",
      color: "#c34f0cbe",
      //position: "absolute",
      // top: 25,
      // right: -200,
    }
  },
  sidebar: {
    width: "40vw",
    [theme.breakpoints.down("sm")]:{
      width: "60vw"
    },
    "& h5": {
      margin: theme.spacing(10, 0, 0, 4),
      fontSize: "1.5rem",
      color: "#c34",
      fontWeight: "bold",
    },
    "& h5:hover": {
      color: "#c34f0cbe",

    }
  }
}));

export default Navbar