import React from 'react'
import VideoCard from './VideoCard'
import { Row, Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'
import { useEffect } from 'react'
import { useState } from 'react'

function View({uploadVideoServerResponse}) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

  const getAllUploadedVideos = async () => {
    const { data } = await getAllVideos()
    setAllVideos(data);
  }

  useEffect(() => {
    setDeleteVideoStatus(false)
    getAllUploadedVideos()
  }, [uploadVideoServerResponse,deleteVideoStatus])
 

  return (
    <>
      <Row>
        {
          allVideos.length > 0 ?
            allVideos.map(video => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus} />
              </Col>
            ))
            : <p className='fw-bolder fs-5 text-danger mt-3'> Sorry nothing to display!!!</p>
        }
      </Row>
    </>
  )
}

export default View