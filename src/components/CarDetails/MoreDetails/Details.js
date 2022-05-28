import React from 'react'
import { Link } from 'react-router-dom'
import './Details.css'
function Details() {
    let resState = JSON.parse(sessionStorage.getItem('vehicleDetails'))



    return (
        <div className='details-body'>
            <div className='table-div'>
                <div className='details-table'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>
                                    <h3>
                                        Details
                                    </h3>
                                </td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>Vehicle Name</td>
                                <td>{resState?.vehicleName}</td>
                            </tr>
                            <tr>
                                <td>Seller Brand</td>
                                <td>{resState?.seller?.brandname}</td>
                            </tr>
                            <tr>
                                <td>Sellers Phone Number</td>
                                <td>{resState?.seller?.phoneNumber1}</td>
                            </tr>
                            <tr className='input-table-row'>
                                <td>Sender Id</td>
                                <td>{resState?.seller?._id}</td>
                            </tr>
                            <tr>
                                <td>Vehicle Price</td>

                                <td>{resState?.vehiclePrice}NGN</td>

                            </tr>


                        </tbody>
                    </table>

                </div>

            </div >
        </div >
    )
}

export default Details