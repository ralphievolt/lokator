import { useAtom } from 'jotai'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { fixtureIdAtom, userIdAtom, locationIdAtom, qrcodeAtom } from '../../store/store'

const TypeQR = props => {
  const [userId, setUserId] = useAtom(userIdAtom)
  const [fixtureId, setFixtureId] = useAtom(fixtureIdAtom)
  const [locationId, setLocationId] = useAtom(locationIdAtom)
  const [qrcode, setQrCode] = useAtom(qrcodeAtom)

  const handleChange = event => {
    const val = event.target.value
    setQrCode(val)
    if (props.number === 0) {
      setUserId(val)
    } else if (props.number === 1) {
      setFixtureId(val)
    } else if (props.number === 2) {
      setLocationId(val)
    }
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

  const renderSubmitButton = () => {
    if (props.number === 2 && userId !== '' && fixtureId !== '' && locationId !== '')
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
        <TextField fullWidth label={renderLabel()} onChange={handleChange} value={qrcode} />
      </Grid>
      {renderSubmitButton()}
    </Grid>
  )
}

export default TypeQR
