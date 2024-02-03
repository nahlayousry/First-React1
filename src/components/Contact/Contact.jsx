import React from 'react'

export default function Contact() {
  return (
    <>
   
    <div className='pt-5  '>
      <div className='pt-5 container w-50'>
      <div className='pt-5 mb-3 text-center fontport'>
      <h2>CONATCT SECTION</h2>
    </div>

        <div className="form-floating mb-3 ">
          <input type="text" className="form-control border-0 border-bottom" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">UserName</label>
        </div>

        <div className="form-floating mb-3 ">
          <input type="number" className="form-control border-0 border-bottom" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">UserAge</label>
        </div>

        <div className="form-floating mb-3 ">
          <input type="email" className="form-control border-0 border-bottom" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>

      <div className="form-floating mb-3">
        <input type="password" className="form-control border-0 border-bottom" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating  mb-3">
        <textarea class="form-control border-bottom border-0" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Comments</label>
      </div>

    <button className='border-0 bg-dark text-white p-2 px-3 mb-5 rounded-2'> Submit</button>
      </div>
    </div>
    </>
  )
}
