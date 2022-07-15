import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import { Context } from '../index'
import DeviceIteam from './DeviceItem'

const DeviceList = observer(() => {
    const {device} = useContext(Context)
  return (
    <div>
        <Row>
        {device.devices.map(device => 
            <DeviceIteam key={device.id} device={device}/>
        )}
        </Row>
    </div>
  )
})

export default DeviceList