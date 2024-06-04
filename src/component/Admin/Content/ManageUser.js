import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
const ManageUser = (props) => {
    return(
        <div className="manageuser-container">
            <div className="title">
                ManageUser
            </div>
            <div className="content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    Table users
                    <Example/>
                </div>
            </div>
            
        </div>
    )
}

export default ManageUser;