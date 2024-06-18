
import React, {useState} from 'react';
import { Alert, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import { postCreateUser } from '../../../services/apiServices';
const ModalCreateUser =(props) => {
    const{ show,setShow } = props;

    const handleClose = () => {
      setShow(false);
      setEmail("");
      setPassword("");
      setUsername("");
      setRole("USER");
      setImage("");
      setPreviewImage("");
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    
    const handleUploadImage = (event) => {
      if(event.target && event.target.files && event.target.files[0] ){
      
        setPreviewImage(URL.createObjectURL(event.target.files[0]))
        setImage(event.target.files[0])
      }
      else{
        // setPreviewImage('')
      }
      
    }

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    const handleSubmitCreateUser = async() => {
      //Validate 
      const isValidEmail = validateEmail(email);
      if(!isValidEmail){
        alert("Invalid email")
        return;
      }
      if(!password){
        alert("Invalid password")
        return;
      }
      //submit data

       let data = await postCreateUser(email, password, username, role, image)
       console.log("res",data)
       if (data && data.EC === 0) {
        alert(data.EM)
        handleClose();
        await props.fetchListUsers();
       }
       if (data && data.EC !== 0) {
        alert(data.EM);
       }

    }

    return (
        <>
            <Modal
             show={show} 
             onHide={handleClose} 
             size='xl'
             backdrop="static"
             className='modal-add-user'
             >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='row g-3'>
  <div className="mb-3">
    <label  className="form-label">
      Email address
      </label>
    <input type="email" 
    className="form-control"
     value={email}
     onChange={(event) => setEmail(event.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">
      Password
      </label>
    <input type="password"
     className="form-control" 
     value={password}
     onChange={(event) => setPassword(event.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label">
      Username
      </label>
    <input type="text"
     className="form-control"
      value={username} 
      onChange={(event) => setUsername(event.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Role</label>
    <select   defaultValue="USER" className="form-select" onChange={(event) => setRole(event.target.value)}>
      <option selected value="USER">USER</option>
      <option  value="ADMIN">ADMIN</option>
    </select>
  </div>
  <div className='mb-12'>
        <label  className="form-label label-upload" 
        htmlFor='labelUpload'>
          <FcPlus/> 
          Upload File Image
          </label>
        <input type="file" 
        id='labelUpload'  hidden
        onChange={(event) => handleUploadImage(event)}
        // value={role}
        />
  </div>
  <div className="mb-12 img-preview">
    {previewImage ?
    <img src={previewImage} />
    : 
    <span>Preview  Image</span>
    }
  </div>
</form>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCreateUser;