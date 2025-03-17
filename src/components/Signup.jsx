import React from 'react'
import { Button, Grid2, TextField } from '@mui/material'


const Signup = () => {
  return (
    <div style={{marginTop: '5%', marginLeft:'20%', alignItems:'centre', justifyContent:'center'}}>
      <h1>Sign Up</h1>
      <br/>

      <Grid2 container spacing={3}>
      <Grid2 size={{ xs:12, md:4 }}> </Grid2>
      <Grid2 size={{ xs:12, md:4, lg:10}}>
        <TextField fullWidth variant='outlined' label='username'/> <br/><br/>
        <TextField fullWidth variant='outlined' label='email' type='email'/> <br/><br/>
        <TextField fullWidth variant='outlined' label='password' type='password'/> <br/>
        <br/>
        <Button variant='contained' color='success'>Sign Up</Button>
      </Grid2> 
      <Grid2 size={{ xs:12, md:4}}> </Grid2>
      </Grid2>     
    </div>
  )
}

export default Signup
