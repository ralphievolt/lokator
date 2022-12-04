import * as React from 'react'
import { isMobile } from 'react-device-detect'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ListItemIcon from '@mui/material/ListItemIcon'

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'

import ListItemText from '@mui/material/ListItemText'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TypeQR from './TypeQR'
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined'
import VerticalShadesOutlinedIcon from '@mui/icons-material/VerticalShadesOutlined'
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined'

const steps = [
  {
    label: 'Enter or Scan User Id'
  },
  {
    label: 'Enter or Scan Fixture Id'
  },
  {
    label: 'Enter or Scan Location Id'
  }
]

export default function CheckinTransaction() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const renderVideoSize = () => {
    if (isMobile) {
      return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 25,
              pl: 2,
              bgcolor: 'background.default'
            }}
          >
            <Typography>{steps[activeStep].label}</Typography>
          </Paper>
          <Box sx={{ height: 175, maxWidth: 400, width: '100%', p: 2 }}>
            <TypeQR number={activeStep} />
          </Box>
          <MobileStepper
            variant='text'
            steps={maxSteps}
            position='static'
            activeStep={activeStep}
            nextButton={
              <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />

          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label='main mailbox folders'>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FaceOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='User Id' />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <CallToActionOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Fixture Id' />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <VerticalShadesOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Rack Id' />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Box>
      )
    }

    return (
      <Box sx={{ maxWidth: ' 100%', flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default'
          }}
        >
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 200, maxWidth: 400, width: '100%', p: 2 }}>
          <TypeQR number={activeStep} />
        </Box>
        <MobileStepper
          sx={{ height: 40 }}
          variant='text'
          steps={maxSteps}
          position='static'
          activeStep={activeStep}
          nextButton={
            <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </Box>
    )
  }
  return renderVideoSize()
}
