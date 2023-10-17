import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addTohistory, deleteAVideo } from '../services/allAPI';






function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // add video to watch history
  const handleShow = async () => {
    setShow(true);
    // get timestamp for playing the videos
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today)
    const {caption,embbedlink} = displayData
    // video history
    const videoHistory = {
      caption,embbedlink,timeStamp
    }
    // make api call
    await addTohistory(videoHistory)
  }

  // delete video
  const deleteVideo = async (id)=>{
    // make api call
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }

  const dragStarted = (e,id)=>{
    console.log("drag started..");
    e.dataTransfer.setData("cardId",id)
  }
  
  return (
    <>
    {
      displayData &&
      
      <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
        <Card.Img onClick={handleShow} variant="top" style={{ width: '100%', height: '180px' }} src={displayData?.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-between'>
            <h5>{displayData?.caption}</h5>
            {insideCategory?"":<button onClick={()=>{deleteVideo(displayData?.id)}} className='btn text-danger'><i className='fa-solid fa-trash fa-lg'></i></button>}
          </Card.Title>
        </Card.Body>
      </Card>
    }
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${displayData?.embbedlink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard