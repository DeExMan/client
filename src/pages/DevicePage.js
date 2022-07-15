import React from 'react'
import bigStar from '../assets/bigStar.png'
import { Button, Card, Col, Container, Image, Row} from 'react-bootstrap'

const DevicePage = () => {
  const device = {id: 1, name: "Iphon 12", price: 25000, rating: 5, img: 'https://www.upcomingfloats.com.au/wp-content/uploads/2015/03/placeholder-400x300.jpg'}


  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={4} className='text-align-center mt-3'>
          <div className='text-center'>
          <Image className='justify-content-center align-items-center' width={300} height={300} src={device.img}/>
          </div>
          
        </Col>
        <Col sm={12} md={6} lg={4} className='mt-3'>
          <Row className="d-flex flex-column align-items-center  ">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col sm={12} md={6} lg={4} className ='mt-3 text-align-center item-align-center align-self-center'>
          <Card
          className="mx-auto d-flex flex-column align-items-center justify-content-around "
          style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant='outline-success'>Добавть в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {/* {device.info.map((info, index) =>
            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                {info.title}: {info.description}
            </Row>
        )} */}
      </Row>
    </Container>
  )
}

export default DevicePage
