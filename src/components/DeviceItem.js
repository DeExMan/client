import React from 'react'
import star from '../assets/Star.png'
import { useNavigate } from 'react-router-dom';
import {DEVICE_ROUTE} from '../utils/consts'
import { Col, Row, Card, Button, Image } from 'react-bootstrap'

const DeviceItem = ({device}) => {
  const navigate = useNavigate();
  return (
    <Col sm={12} md={6} lg={3}  className='mt-3'>
        <Card 
        action onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
        style={{ width: '150', cursor:'pointer' }}
        >
            <Card.Img width={150} height={150} variant="top" src={device.img} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between aligne-items-center'>
                {device.name}
                <div className='d-flex aligne-items-center'>
                    <div>{device.rating}</div>
                    <Image width={20} height={20} src={star}/>
                </div>
              
              </Card.Title>
              <Card.Text>
                Цена: {device.price}
              </Card.Text>
              <div className='text-black-50'>Samsung...</div>
            </Card.Body>
        </Card>
    </Col>

  )
}

export default DeviceItem