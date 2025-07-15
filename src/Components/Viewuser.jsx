import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'

const Viewuser = () => {
    const [user, changeuser] = useState(
        []
    )
    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (Response) => {
                changeuser(Response.data)
            }
        ).catch()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div style={{
            background: 'linear-gradient(to bottom, #33ccff 0%, #ff9999 100%)',
            minHeight: '100vh',
            width: '100%',
            paddingBottom: '2rem',
        }}>
            <Navbar />
             <h1 style={{ color: 'white', fontSize: '3rem' }}><center>VIEW</center></h1>
            <div className="container">
                <div className="row -g3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    </div>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">username</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Website</th>
                            <th scope="col">Company</th>
                        </tr>
                    </thead>
                    {user.map(
                        (value, index) => {
                            return (
                                <tbody>
                                    <tr>
                                        <th scope="row">{value.id}</th>
                                        <td>{value.name}</td>
                                        <td>{value.username}</td>
                                        <td>{value.address.street}<br></br>{value.address.suite}<br></br>{value.address.city}<br></br>{value.address.zipcode}
                                            <br></br>Latitutde:{value.address.geo.lat}<br></br>Longtitude:{value.address.geo.lng}</td>

                                        <td>{value.phone}</td>
                                        <td>{value.website}</td>
                                        <td>{value.company.name}<br></br>{value.company.catchPhrase}<br></br>{value.company.bs}</td>

                                    </tr>

                                </tbody>
                            )
                        }
                    )}


                </table>
            </div>
        </div>
    )
}

export default Viewuser