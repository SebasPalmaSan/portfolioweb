import React from 'react' 
import StarRating from './StarRating'
import JS from '../images/javascript.jpg'
import HTML from '../images/html5.jpg'
import CSS from '../images/logo-css3.jpg'
import NODEJS from '../images/logo-nodejs.jpg'
import REACT from '../images/logo-react.jpg'
import { Timeline, TimelineConnector, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineContent } from '@material-ui/lab'
import { makeStyles, Typography, Paper } from '@material-ui/core'

const Technologies = () => {
    const classes = useStyles()
    const skills = [
        {
            year: "2021",
            src: JS,
            title: "Javascript",
            stars: 4,
        },
        {
            year: "2021",
            src: HTML,
            title: "HTML5",
            stars: 5,
        },
        {
            year: "2021",
            src: CSS,
            title: "CSS3",
            stars: 5,
        },
        {
            year: "2021",
            src: NODEJS,
            title: "NodeJs",
            stars: 4,
        },
        {
            year: "2022",
            src: REACT,
            title: "ReactJs",
            stars: 4,
        }
    ]
    return (
        <Timeline align='alternative'>
            {skills.map(({year, src, title, stars}, index)=> (
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                        <Typography variant='h6' color="textSecondary">
                            {year}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <img src={src} alt={title} className={classes.logos}></img>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={5} className={classes.paper}>
                            <Typography variant='h6' component="h1">
                                {title}
                            </Typography>
                            <StarRating stars={stars}/>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))
            }
        </Timeline>
    )
}
const useStyles = makeStyles((theme) => ({
    logos: {
        width: "90px",
        margin: "20px",
    },
    paper: {
        color: "#263238",
        padding: "5px 15px",
        maxWidth: "30vw",
    }
  }));
  
  

export default Technologies