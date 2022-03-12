import React, {useState} from 'react'
import { Button } from '@zendeskgarden/react-buttons'
import { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals'
import { Row, Col } from '@zendeskgarden/react-grid'
import './style.scss'

const TaskButton = (props) => {
    const [visible, setVisible] = useState(false)

    return (
      <Row>
        <Col textAlign="center">
          <Button id="button" isStretched onClick={() => setVisible(true)}>{props.name}</Button>
          {visible && (
            <Modal onClose={() => setVisible(false)}>
              <Header>{props.name}</Header>
              <Close aria-label="Close modal" />
            </Modal>
          )}
        </Col>
      </Row>
    )
  }
export default TaskButton