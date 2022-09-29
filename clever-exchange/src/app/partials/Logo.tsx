import * as React from 'react'
import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import LOGO from '../assets/logo_klever.png'

function Logo () {
  return (
    <React.Fragment>
      <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Grid container>
          <Grid item xs={4}>
            <img src={LOGO} alt="logo fake da klever" width="60rem" />
          </Grid>
          <Grid item xs={6} direction="column" textAlign="left">
            <Typography
              component="span"
              sx={{ fontSize: '0.9rem', fontWeight: 'bold', lineHeight: '5px' }}
            >
              câmbio
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: '1.2rem', fontWeight: 'bold', lineHeight: '5px' }}
            >
              iteligente
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </React.Fragment>
  )
}

export default Logo
