import React from 'react'

const CreateDevice = (show, onHide) => {
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        backdrop="static"
      >
          <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                  Добавить новый тип
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                  <Form.Control
                      // value={value}
                      // onChange={e => setValue(e.target.value)}
                      placeholder={"Введите название типа"}
                  />
              </Form>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
              <Button variant="outline-success" onClick={onHide}>Добавить</Button>
          </Modal.Footer>
      </Modal>
  )
}

export default CreateDevice