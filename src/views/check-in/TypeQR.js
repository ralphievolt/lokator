// ** React Imports
import { useState } from 'react'

import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Grid from '@mui/material/Grid'

import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const TypeQR = props => {
  const [userId, setUserId] = useState('')
  const [fixtureId, setFixtureId] = useState('')
  const [rackId, setRackId] = useState('')

  const handleChange = event => {
    console.log(event.target.value)
    setUserId(event.target.value)
  }

  const renderLabel = () => {
    let textLabel = ''
    if (props.number === 0) {
      textLabel = 'User Id'
    } else if (props.number === 1) {
      textLabel = 'Fixture Id'
    } else if (props.number === 2) {
      textLabel = 'Rack Id'
    }

    return textLabel
  }

  const renderValue = () => {
    let textLabel = ''
    if (props.number === 0) {
      textLabel = 'User Id'
    } else if (props.number === 1) {
      textLabel = 'Fixture Id'
    } else if (props.number === 2) {
      textLabel = 'Rack Id'
    }

    return textLabel
  }

  const renderSubmitButton = () => {
    // if (props.number === 2 && userId !== '' && fixtureId !== '' && rackId !== '')
    return (
      <Grid item xs={12}>
        <Button size='large' type='submit' variant='contained' sx={{ width: '100%' }}>
          Submit
        </Button>
      </Grid>
    )
  }

  return (
    <Grid container spacing={5} sx={{ mt: 1 }}>
      <Grid item xs={12}>
        <TextField fullWidth label={renderLabel()} onChange={handleChange} />
      </Grid>
      {renderSubmitButton()}
    </Grid>
  )
}

export default TypeQR
