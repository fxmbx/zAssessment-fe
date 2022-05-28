import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import './PostForm.css'

import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

function PostForm(props) {
    const navigate = useNavigate()
    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth')}`
        }
    }
    const { auth } = props
    const [show, setShow] = React.useState(false)
    const [file, setFile] = React.useState()
    const [value, setValue] = React.useState({
        vehicleName: " ",
        vehicleDescription: "",
        vehiclePrice: 0,
        phoneNumber: ""
    });

    let vehicleId;
    const handleSubmit = async (e) => {
        const sellerId = localStorage.getItem('LoggedInSellerId')
        const res = await axios.post(`vehicle/${sellerId}/addvehicle`, value, config.headers,)
        const { data } = res
        console.log("this is add Vehciles response", data.data)
        if (data?.data?._id) {
            setShow(true)
            sessionStorage.setItem("postedvehicleId", data?.data?._id)
            vehicleId = data?.data?._id

        }

    }

    const handlePhotoUpload = async (e) => {
        console.log(file)

        // const file = e.target.value

        const res = await axios.put(`vehicle/${sessionStorage.getItem('postedvehicleId')}/photo`, file, config.headers)
        console.log(res?.data)
        if (res?.data?.data) {
            setShow(false)
            setValue({
                vehicleName: " ",
                vehicleDescription: "",
                vehiclePrice: 0,
                phoneNumber: ""
            })
        }

    }

    useEffect(() => {
        const getMe = async () => {
            const res = await axios.get('auth/getMe', config.headers)
            const { data } = res
            localStorage.setItem('LoggedInSellerId', data?.data?.seller._id)

        }
        if (auth.isLogged) {
            getMe()
        }
    }, [])

    return (
        <div className='postad-wrapper'>

            <div className='post-ad-card'>
                <div style={{ fontSize: '3rem', margin: '1rem' }}>
                    <span>Post Ad</span>
                </div>

                <div className='steps'>
                    <div className='step-1'>

                        <span className='step-title'>step1: vehicle details </span></div>
                    <div className='step-2'>

                        <span className='step-title'>step2: vehicle Image </span>
                    </div>
                </div>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: 20 }}>
                    {!show &&

                        <>

                            <Grid item xs={6}>
                                <TextField
                                    style={{ width: '100%' }}

                                    id="outlined-multiline-flexible"
                                    label="Vehicle Name"
                                    multiline
                                    required
                                    maxRows={4}
                                    value={value?.vehicleName}
                                    onChange={(e) => {
                                        const vehicleName = e.target.value
                                        setValue({ ...value, ...{ vehicleName } })
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <TextField
                                    style={{ width: '100%' }}
                                    id="outlined-multiline-flexible"
                                    label="Vehicle Description"
                                    multiline
                                    required
                                    maxRows={4}
                                    value={value?.vehicleDescription}
                                    onChange={(e) => {
                                        const vehicleDescription = e.target.value
                                        setValue({ ...value, ...{ vehicleDescription } })
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <TextField
                                    id="outlined-multiline-flexible"
                                    style={{ width: '100%' }}
                                    label="Vehicle Price"
                                    multiline
                                    required
                                    maxRows={4}
                                    value={value?.vehiclePrice}
                                    onChange={(e) => {
                                        const vehiclePrice = e.target.value
                                        setValue({ ...value, ...{ vehiclePrice } })
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    style={{ width: '100%' }}
                                    id="outlined-multiline-flexible"
                                    label="phoneNumber"
                                    multiline
                                    required
                                    maxRows={4}
                                    value={value?.phoneNumber}
                                    onChange={(e) => {
                                        const phoneNumber = e.target.value
                                        setValue({ ...value, ...{ phoneNumber } })
                                    }}
                                />
                            </Grid>

                            <Grid item xs={6}>

                                <Button variant="outlined" onClick={handleSubmit}>Upload Image</Button>
                            </Grid>

                        </>
                    }
                    {show &&
                        <>
                            <Grid item xs={6}>

                                <Button
                                    variant="outlined"
                                    component="label"
                                >
                                    {!file ? 'Upload File' : 'File Uploaded'}
                                    <input
                                        type="file"
                                        hidden
                                        onChange={(e) => {
                                            setFile(e.target.files)
                                        }}
                                    />
                                </Button>

                            </Grid>
                            <Grid item xs={6}>

                                <Button variant="outlined" onClick={handlePhotoUpload}>Post Ad</Button>
                            </Grid>
                        </>


                    }
                </Grid>

            </div >
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (navigate) => {

        },


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
