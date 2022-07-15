import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from '../index'

const TypeBar = observer(() => {
    const {device} = useContext(Context)
  return (
    <ListGroup >
      {device.types.map(type =>
      <ListGroup.Item
        key = {type.id}
        active={type.id === device.selectedType.id}
        action onClick={() => device.setSelectedType(type)}
        className="d-flex justify-content-between align-items-start"
      >
          <div className="fw-bold ">{type.name}</div>

        {/* <Badge bg="primary" pill>
          14
        </Badge> */}
      </ListGroup.Item>
    )}
    </ListGroup>
  )
})

export default TypeBar