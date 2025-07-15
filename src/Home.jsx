import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div style={{
        background: 'linear-gradient(to bottom, #33ccff 0%, #ff9999 100%)',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Navbar/>
         <div
        style={{
          flex: 1, 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ color: 'white', fontSize: '3rem' }}>USER APP</h1>
      </div>

    </div>
  )
}

export default Home