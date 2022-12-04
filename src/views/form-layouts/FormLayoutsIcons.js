//

import React, { useState, useRef } from 'react'
import { QrReader } from 'react-qr-reader'
// import styles from '../styles/Home.module.css'

function FormLayoutsSeparator() {
  const [data, setData] = useState('No result')

  return (
    <div>
      <div>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text)
            }

            if (!!error) {
              console.info(error)
            }
          }}
          constraints={{ facingMode: 'environment' }}
          style={{ width: '40%', height: '20%' }}
        />
        <p>{data}</p>
      </div>
    </div>
  )
}

export default FormLayoutsSeparator
