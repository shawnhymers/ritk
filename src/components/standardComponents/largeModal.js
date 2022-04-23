import  { React} from "react";
import {Button, Modal} from 'react-bootstrap';

const LargeModal = ({isOpen, closeModal, modalTitle, modalBody})=>{

return(
  <Modal size="lg"show={isOpen} onHide={closeModal} >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
            <Modal.Body>

              {modalBody}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
      </Modal>
)

}
export default LargeModal
