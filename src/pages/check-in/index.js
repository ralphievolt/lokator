// ** MUI Imports
import Grid from '@mui/material/Grid'
import CheckIn from 'src/views/check-in/CheckIn'

const CheckInPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CheckIn />
      </Grid>
    </Grid>
  )
}

export default CheckInPage
