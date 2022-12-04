import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import CheckOutTransaction from './CheckOutTransaction'

const CheckOut = () => {
  return (
    <>
      <Typography variant='h5' sx={{ marginBottom: 2, color: '#9155fd' }}>
        Check-Out Fixture{' '}
      </Typography>

      <Paper>
        <CheckOutTransaction />
      </Paper>
    </>
  )
}

export default CheckOut
