import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import studentImage from '../assets/student.jpg';
import unsplashn from '../assets/unsplashn.jpg'
import unsplashe from '../assets/unsplashe.jpg'
import unsplashf from '../assets/unsplashf.jpg'
import unsplashd from '../assets/unsplashd.jpg'

export default function ActionAreaCard() {

    const carddata = [{
        link: studentImage,
        gutter: "Students",
        body: "Students are not just learners; they are the architects of their own futures."
    },{
        link: unsplashn,
        gutter: "Future Of World",
        body: "Education is the passport to the future, for tomorrow belongs to the students who prepare for it today"
    },{
        link: unsplashd,
        gutter: "Positiveness",
        body: "Every student is a unique individual with the potential to make a positive impact on the world."
    },{
        link: unsplashf,
        gutter: "Learning",
        body: "Learning is a treasure that follows its owner everywhere."
    },{
        link: unsplashe,
        gutter: "Education",
        body: "Education is not preparation for life; education is life itself."
    }]
  return (
    <Card >
      <CardActionArea sx={{alignItems:'center', display:'grid', justifyContent:"center"}}>
       {
        carddata.map((carddata,index)=><div key="index" style={{margin:20, padding:20}}>
             <CardMedia
          component="img"
          height="200"
          src={carddata.link}
          alt="Student Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {carddata.gutter}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {carddata.body}
          </Typography>
        </CardContent>
        </div>)
       }
      </CardActionArea>
    </Card>
  );
}
