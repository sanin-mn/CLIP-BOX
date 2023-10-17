import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import View from '../Components/View'
import Categary from '../Components/Categary'


function Home() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
        <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
        <Link to={'/watch-history'} className='fs-5' style={{ textDecoration: 'none', color: 'white' }}>Watch History</Link>
      </div>
      <div className='mt-5 mb-5 container-fluid d-flex justify-content-between'>
        <div className='all-videos col-lg-8'>
          <h3>All Videos</h3>
          <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-3'>
          <Categary />
        </div>

      </div>
    </>
  )
}

export default Home