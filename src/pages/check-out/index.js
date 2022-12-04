// ** MUI Imports
import Grid from '@mui/material/Grid'
import CheckOut from 'src/views/check-out/CheckOut'

const CheckInPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CheckOut />
      </Grid>
    </Grid>
  )
}

export default CheckInPage
