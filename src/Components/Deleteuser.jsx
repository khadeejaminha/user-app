import React from 'react'
import Navbar from './Navbar'

const Deleteuser = () => {
  return (
    <div  style={{
        background: 'linear-gradient(to bottom, #33ccff 0%, #ff9999 100%)', 
        height: '100vh',
        width: '100%',
      }}>
        <Navbar/>
         <h1 style={{ color: 'white', fontSize: '3rem' }}><center>DELETE</center></h1>
                  <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">id</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deleteuser