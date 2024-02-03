import React from 'react'

export default function Footer() {
  return (
    <>
    
    <div className='position-sticky footstart text-white p-2 footfont '>
      <div className='container p-5  '>
      <div className="row  ">
        <div className="col-md-4">
            <h2>LOCATION</h2>
            <h3>2215 John Daniel Drive</h3>
            <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
          <h2>AROUND THE WEB</h2>
          <ul className='ulstyle d-flex '>
              <li><i class="fa-brands fa-facebook"></i></li>
              <li><i class="fa-brands fa-twitter"></i></li>
              <li><i class="fa-brands fa-linkedin"></i></li>
          </ul>
        </div>
        <div className="col-md-4 ">
          <h2>ABOUT FREELANCER</h2>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
      </div>
    </div>

    <footer className=' position-sticky footend text-center pb-3 text-white pt-3'>
      <p>Copyright © Your Website 2021</p>
    </footer>
    
    
    
    </>
        
  )
}
