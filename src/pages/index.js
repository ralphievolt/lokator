// ** MUI Imports
import Grid from '@mui/material/Grid'

import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={6}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <DepositWithdraw />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
