import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

interface IShowDrawer {
  showDrawer: boolean
  setShowDrawer: React.Dispatch<boolean>
}

function RigthDrawer ({ showDrawer, setShowDrawer }: IShowDrawer) {
  const drawer = () => (
    <Box
      sx={{
        width: { xs: '10rem', sm: '15rem' },
        backgroundColor: '#14152c',
        color: '#fff',
        minHeight: '100vh'
      }}
      role="presentation"
      onClick={() => setShowDrawer(!showDrawer)}
    >
      <List>
        {['Mercados', 'Troca'].map((text) => (
          <ListItem key={text}>
            <ListItemButton sx={{ ':hover': { color: '#722664' } }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#313146', width: '80%', marginLeft: '1rem' }}/>
      <List>
        {['NFT', 'Login / Cadastro', 'BR | R$'].map((text) => (
          <ListItem key={text}>
            <ListItemButton sx={{ ':hover': { color: '#722664' } }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Drawer anchor="right" open={showDrawer} onClose={() => setShowDrawer(false)}>
        {drawer()}
    </Drawer>
  )
}

export default RigthDrawer
