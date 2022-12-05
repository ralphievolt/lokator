// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'

const FixturesList = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            Fixtures List
          </Link>
        </Typography>
        <Typography variant='body2'>Fixtures found.</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableBasic />
        </Card>
      </Grid>
    </Grid>
  )
}

export default FixturesList
