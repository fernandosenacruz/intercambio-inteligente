import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import StyledLink from '../partials/StyledLink'
import { exchangeButtons, nftButtons } from '../utils/drawerButtons'

interface IShowDrawer {
  showDrawer: boolean
  setShowDrawer: React.Dispatch<boolean>
  route: number
}

function RigthDrawer ({ showDrawer, setShowDrawer, route }: IShowDrawer) {
  const [drawers, setDrawers] = React.useState(exchangeButtons.exchange)

  React.useEffect(() => {
    route !== -1
      ? setDrawers(nftButtons.nft)
      : setDrawers(exchangeButtons.exchange)
  }, [])

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
        {drawers.texts.top.map((text, index) => (
          <ListItem key={text}>
            <ListItemButton sx={{ ':hover': { color: '#722664' } }}>
              <StyledLink path={drawers?.paths.top[index]}>
                <ListItemText primary={text} />
              </StyledLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#313146', width: '80%', marginLeft: '1rem' }}/>
      <List>
        {drawers?.texts.down.map((text, index) => (
          <ListItem key={text}>
            <ListItemButton sx={{ ':hover': { color: '#722664' } }}>
              <StyledLink path={drawers?.paths.down[index]}>
                <ListItemText primary={text} />
              </StyledLink>
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
