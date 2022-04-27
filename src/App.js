import { makeStyles } from '@material-ui/core';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
function App(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <About id="about" title="Sobre mi" dark={true} />
      <Skills id="skills" title="Habilidades" dark={false} />
      <Work id="work" title=" Mis Proyectos" dark={true} />
      <Contact id="contact" title="Contactame" dark={false} />
    </div>
    );
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

export default App;