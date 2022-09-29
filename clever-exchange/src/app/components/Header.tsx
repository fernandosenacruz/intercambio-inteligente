import * as React from 'react'
import { Box } from '@mui/system'
import RigthDrawer from './RigthDrawer'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'
import Logo from '../partials/Logo'

function Header () {
  const [showDrawer, setShowDrawer] = React.useState(false)

  return (
    <React.Fragment>
      <Box>
        <AppBar position="fixed">
          <Toolbar sx={{ backgroundColor: '#14152c' }} >
            <IconButton sx={{ flexGrow: 1, justifyContent: 'flex-start', color: '#fff' }}>
              <Logo />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => setShowDrawer(!showDrawer)}
            >
              <MenuOpenRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <RigthDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </React.Fragment >
  )
}

export default Header
