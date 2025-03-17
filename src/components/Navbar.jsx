import React from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Button} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
 
const Navbar = () => {
  return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Film App
          </Typography>
          <Button><Link to={'/'} style={{color:'white'}}>Sign up</Link></Button>
          <Button><Link to={'/login'} style={{color:'white'}}>Login</Link></Button>
          <Button><Link to={'/add'} style={{color:'white'}}>Add Movie</Link></Button>
          <Button><Link to={'/list'} style={{color:'white'}}>View all movies</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
  )
}
 
export default Navbar