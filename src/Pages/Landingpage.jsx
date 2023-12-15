import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {
  const navigateByUrl = useNavigate()

  const navigate=()=>{
    navigateByUrl('/home')
  }
  return (
    <>
      <div className='bagRound d-flex align-items-center justify-content-evenly' >
        <div>
          <h1>Welcome to <span style={{ color: 'orange' }}>CLIP BOX</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis sapiente, <br /> corporis quidem culpa sequi perspiciatis tenetur vero quibusdam itaque dolorum tempore. <br /> Fuga magni minus nostrum asperiores aut doloribus beatae?</p>
          <button onClick={navigate} type='submit' style={{ backgroundColor: 'orange', color: 'white', borderRadius: '5px', width: '10rem', padding: '10px' }}>Getting Started</button>

        </div>
        <div>
          <img src="https://icons.iconarchive.com/icons/ahdesign91/media-player/512/Adobe-Media-Player-icon.png" alt="no imG" />
        </div>
      </div>
 
      <div className=' d-flex flex-column align-items-center'>
      <h2>Features</h2>
      <div className="container d-flex align-items-center justify-content-around mb-5">
        
          <Card className='mt-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tse2.mm.bing.net/th?id=OIP.JruUn-hdXoMOlQS-a-FhFQHaFj&pid=Api&P=0&h=180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='mt-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tse2.mm.bing.net/th?id=OIP.JruUn-hdXoMOlQS-a-FhFQHaFj&pid=Api&P=0&h=180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='mt-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tse2.mm.bing.net/th?id=OIP.JruUn-hdXoMOlQS-a-FhFQHaFj&pid=Api&P=0&h=180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
      </div>

      <div className='container d-flex mt-5 mb-5 p-3' style={{border:'0.5px solid white'}}>
        <div>
          <h3 className='mt-5' style={{color:'orange'}}>Simple, Fast and Powerful</h3>
          <p><h5>Play Everything</h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum placeat maiores necessitatibus.</p>
          <p><h5>Categorise Videos</h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum placeat maiores necessitatibus.</p>
          <p><h5>Play Everything</h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum placeat maiores necessitatibus.</p>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IqwIOlhfCak?si=0pMJQb_bnSiYiN80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </div>

    </>
  )
}

export default Landingpage