import * as React from 'react'
import { isMobile } from 'react-device-detect'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useAtom } from 'jotai'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TypeQR from './TypeQR'
import { qrcodeAtom } from '../../store/store'

import QrListValue from './QrListValue'

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

export default function CheckOutTransaction() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const [, setQrCode] = useAtom(qrcodeAtom)

  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setQrCode('')
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
    setQrCode('')
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
          <Box sx={{ height: 160, maxWidth: 400, width: '100%', p: 2 }}>
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

          <QrListValue />
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
        <Box sx={{ height: 170, maxWidth: 400, width: '100%', p: 2 }}>
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

        <QrListValue />
      </Box>
    )
  }
  return renderVideoSize()
}
