import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {
  const [video, setVideo] = useState({
    id: "", caption: "", url: "", embbedlink: ""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractLink = (e) => {
    const { value } = e.target
    if (value) {
      const embbed = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({ ...video, embbedlink: embbed })
    } else {
      setVideo({ ...video, embbedlink: "" })
    }
  }

  const handleUpload = async () => {
    const { id, caption, url, embbedlink } = video
    // console.log(video);
    if (!id || !caption || !url || !embbedlink) {
      toast.warning('Please fill the form completely')
    } else {
      // make api call
      const response = await uploadVideo(video)
      if (response.status >= 200 && response.status < 300) {
        // reset state
        setVideo({
          id: "", caption: "", url: "", embbedlink: ""
          
        })
        // set server response
        setUploadVideoServerResponse(response.data)
        //  modal hide
        handleClose()
        // console.log(response);
        toast.success(`"${response.data.caption}" video uploaded succesfully`)
      } else {
        toast.error("Please provide unique ID for uploading videos")
      }
    }
  }

  return (
    <>

      <div className='d-flex align-items-center'>
        <h5>Add New Video</h5>
        <button className='btn' onClick={handleShow}><i className="fa-solid fa-circle-plus fs-3" ></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Id" onChange={(e) => setVideo({ ...video, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image Url" onChange={(e) => setVideo({ ...video, url: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={extractLink} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="warning">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default Add