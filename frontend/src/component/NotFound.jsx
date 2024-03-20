import { Typography } from '@mui/material'
import React, { useEffect } from 'react'

const NotFound = (props) => {

    useEffect(()=>{
        document.title = props.title    
    },[])

  return (
    <div>
      <Typography variant='h1' component="div" sx={{textAlign: 'center', marginTop:20}}>
            We Are Sorry! SomeThing Wen Wrong.
      </Typography>
    </div>
  )
}

export default NotFound
