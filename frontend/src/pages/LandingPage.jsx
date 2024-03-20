import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ActionAreaCard from '../component/ActionAreaCard';

const LandingPage = () => {
    const [displayText, setDisplayText] = useState('New Tech');
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayText((prevText) => (prevText === 'New Tech' ? 'New World' : 'New Tech'));
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);
  return (
    <div>
      <Box>
        <Typography variant='h2' component="div" sx={{textAlign:'center',marginTop:5}}>
            Welcome In Student Attendence Portal
        </Typography>
        <Typography variant='h2' component="div" sx={{textAlign:'center',marginTop:5,color:'red'}}>
          {displayText}
        </Typography>
      </Box>
      <Box>
        <ActionAreaCard />
     </Box>
    </div>
  )
}

export default LandingPage
