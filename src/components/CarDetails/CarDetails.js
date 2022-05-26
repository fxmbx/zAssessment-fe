import React from 'react'
import './CarDetails.css'
import Details from './MoreDetails/Details'
function CarDetails() {

    let resState = JSON.parse(sessionStorage.getItem('vehicleDetails'))


    return (
        <>
            <div className='cardetails-container'>

                <div className='car-image-wrapper' >
                    <img src={`http://localhost:7000/uploads/${resState.photo}`} className='car-image' />
                    <Details />
                </div >


                <div className='seller-info'>
                    <div className='car-price'>
                        NGN {resState?.vehiclePrice}

                    </div>
                    <div className='brand-details'>
                        <div className='brand-Avatar'>{resState?.seller?.brandname?.substr(0, 1)}</div>
                        <div className='brand-name'>
                            {resState?.seller?.brandname}
                        </div>

                    </div>
                    <div className='safety-tips'>
                        <h3 className='saftety-tip-header'>Safety Tips my guy </h3>
                        <ul>
                            <li>
                                Remember, don't send any pre-payments
                            </li>
                            <li>
                                Meet the seller at a safe public place

                            </li>
                            <li>
                                Inspect the goods to make sure they meet your needs
                            </li>
                            <li>
                                Check all documentation and only pay if you're satisfied

                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </>

    )
}

export default CarDetails