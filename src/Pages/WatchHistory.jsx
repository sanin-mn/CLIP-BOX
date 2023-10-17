import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/allAPI'


function WatchHistory() {

  const [history, setHistory] = useState([])
  const getWatchHistory = async () => {
    // make api call
    const { data } = await getHistory()
    setHistory(data)
  }
  useEffect(() => {
    getWatchHistory()
  }, [])

  const handleDeleteHistory = async (id)=>{
    // make api call
    await deleteHistory(id)
    // get all history after deletion
    getWatchHistory()
  }

  return (
    <>
      <div className="d-flex justify-content-between mt-5 mb-5 container align-items-center">
        <h3>Watch History</h3>
        <Link to={'/home'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white' }}> <i className='fa-solid fa-arrow-left'>Back to home</i> </Link>
      </div>

      <div className='border p-5 container rounded shadow mt-5 mb-5'>
        <table className='table'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              history.length > 0 ?
                history.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item?.caption}</td>
                    <td><a href={item?.embbedlink} target='_blank'>{item?.embbedlink}</a></td>
                    <td>{item?.timeStamp}</td>
                    <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
                  </tr>
                ))
                : <p className='fw-bolder fs-5 text-danger mt-3'> Sorry nothing to display!!!</p>

            }
          </tbody>
        </table>

      </div>
    </>
  )
}

export default WatchHistory