import React from 'react'
import { BadgerButton } from 'badger-components-react'

const MonthlyPayment = props => {
  

  return (
  	<BadgerButton
        amount={10}
        to="simpleledger:qq0nu0xa5rxj72wx043ulhm3qs28y95davd6djawyh"
        opReturn={['0x6d02', 'payment done successfully']}
        text="1 month subscription"
        coinType="SLP"
        tokenId="65a84381f20769f791258851f213b0e3543a6b567ff2c6f9a9c587af7b4ffc6e"
        successFn={() => console.log('success example function called')}
        failFn={() => console.log('fail example function called')}
      />
    )
}

export default MonthlyPayment