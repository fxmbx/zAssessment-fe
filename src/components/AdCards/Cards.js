import React, { useEffect } from 'react'
import CardItem from './CardItem'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Cards() {

    const navigate = useNavigate()

    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth')}`
        }
    }
    useEffect(() => {
        const getVehicles = async () => {

            const res = await axios.get('vehicle/', config.headers)
            const { data } = res
            console.log("🚙", data)
            sessionStorage.setItem('vehicleList', JSON.stringify(data))

        }
        getVehicles()
    }, [])
    let resState = JSON.parse(sessionStorage.getItem('vehicleList'))
    console.log("this is resState", resState)
    return (
        <div className='cards'>
            <h1>Check out the cars we gat brah </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {resState?.data?.slice(0, 3)?.map((data, index) => {
                            // console.log(index)
                            return (
                                < CardItem
                                    key={index}
                                    src={data?.photo
                                    }
                                    text={data?.vehicleDescription}
                                    title={data?.vehicleName}
                                    label={data?.vehiclePrice} path='/services'
                                />
                            )
                        })}


                    </ul>
                    <ul className='cards__items'>

                        {resState?.data?.slice(3)?.map((data, index) => {
                            // console.log(index)
                            return (
                                < CardItem
                                    key={index}
                                    src={data?.photo
                                    }
                                    text={data?.vehicleDescription}
                                    title={data?.vehicleName}
                                    label={data?.vehiclePrice} path='/services'
                                />
                            )
                        })}


                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Cards
