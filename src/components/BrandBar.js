import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from '../index'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
  return (
    <Row className="">
            {device.brands.map(brand =>
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="col-md-2 p-2 pt-1 text-center"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
  )
})

export default BrandBar