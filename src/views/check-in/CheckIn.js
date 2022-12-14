import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import CheckinTransaction from './CheckinTransaction'

const CheckIn = () => {
  return (
    <>
      <Typography variant='h5' sx={{ marginBottom: 2, color: '#9155fd' }}>
        Check-In Fixture{' '}
      </Typography>

      <Paper>
        <CheckinTransaction />
      </Paper>
    </>
  )
}

export default CheckIn
