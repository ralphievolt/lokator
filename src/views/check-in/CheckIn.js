import Typography from '@mui/material/Typography'

import Paper from '@mui/material/Paper'

import CheckinTransaction from './CheckinTransaction'

const FormLayoutsAlignment = () => {
  return (
    <>
      <Typography variant='h5' sx={{ marginBottom: 2 }}>
        Check-in Fixture{' '}
      </Typography>

      <Paper>
        <CheckinTransaction />
      </Paper>
    </>
  )
}

export default FormLayoutsAlignment
