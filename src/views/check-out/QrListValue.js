import { useAtom } from 'jotai'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Box from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined'
import VerticalShadesOutlinedIcon from '@mui/icons-material/VerticalShadesOutlined'
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined'
import ListItemText from '@mui/material/ListItemText'
import { fixtureIdAtom, userIdAtom, locationIdAtom } from '../../store/store'

const QrListValue = () => {
  const userId = useAtom(userIdAtom)
  const fixtureId = useAtom(fixtureIdAtom)
  const locationId = useAtom(locationIdAtom)

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label='main mailbox folders'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaceOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={userId} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CallToActionOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={fixtureId} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VerticalShadesOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={locationId} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default QrListValue
