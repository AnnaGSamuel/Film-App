import React from 'react'
import { Button, Grid2, TextField } from '@mui/material'

const AddMovies = () => {
  return (
    <div style={{ marginLeft:'20%', alignItems:'centre', justifyContent:'center'}}>
      <h1>Add a Movie</h1>
      <br/>

      <Grid2 container spacing={1}>
      <Grid2 size={{ xs:12, md:4 }}> </Grid2>
      <Grid2 size={{ xs:12, md:4, lg:10}}>
        <TextField fullWidth variant='outlined' label='movie title'/> <br/><br/>
        <TextField fullWidth variant='outlined' label='release year' type='number'/> <br/><br/>
        <TextField fullWidth variant='outlined' label='poster image'/> <br/><br/>
        <TextField fullWidth variant='outlined' label='Genre'/> <br/><br/>
        <TextField fullWidth variant='outlined' label='IMDb rating' type='number'/> <br/>
        <br/>
        <Button variant='contained' color='success'>Add Movie</Button>
      </Grid2> 
      <Grid2 size={{ xs:12, md:4}}> </Grid2>
      </Grid2>     
    </div>
  )
}

export default AddMovies
