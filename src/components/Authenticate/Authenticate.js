import React, { useState } from 'react'
import Button from '../Button/Button'
import './authenticate.css'

import { LoginAction, RegisterAction } from '../../redux/actions/authAction'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
function Authenticate(props) {
    console.log(props)
    const { headerText, login, register } = props
    const navigate = useNavigate()

    const [userRole, setUserRole] = useState('')

    const [userAuthState, setUserAuthState] = useState({})
    const [sellerAuthState, setSellerAuthState] = useState({})


    return (

        < div className='authenticate-wrapper' >
            <div className='authenticate-container'>
                <form action="#" className='authenticate-form'
                    onSubmit={(e) => {
                        e.preventDefault()
                        if ({ ...userAuthState } === undefined) {
                            alert('empty fields')
                        } else {
                            // console.log("🌯", userAuthState)
                            console.log("🤳", { sellerData: sellerAuthState, userData: userAuthState })
                            if (headerText === "REGISTER") {
                                register({ sellerData: sellerAuthState, userData: userAuthState }, navigate)
                            } else if (headerText === "LOGIN") {
                                login(userAuthState, navigate)
                            }
                        }
                    }}
                >
                    <h4 className='authenticate-header'>{headerText}</h4>

                    {headerText === "REGISTER" ?

                        <TextField
                            style={{ width: '100%', marginBottom: 15 }}
                            id="outlined-flexible"
                            label="username"
                            required
                            value={userAuthState?.username}
                            onChange={(e) => {

                                const username = e.target.value
                                setUserAuthState({ ...userAuthState, ...{ username } })

                            }}
                        />

                        : null}


                    <TextField
                        style={{ width: '100%', marginBottom: 15 }}

                        id="outlined-flexible"
                        label="email"
                        type={'email'}
                        required
                        value={userAuthState?.email}
                        onChange={(e) => {

                            const email = e.target.value
                            setUserAuthState({ ...userAuthState, ...{ email } })

                        }}
                    />
                    <TextField
                        style={{ width: '100%', marginBottom: 15 }}

                        id="outlined-flexible"
                        label="passowrd"
                        type={'passoword'}
                        required
                        value={userAuthState?.password}
                        onChange={(e) => {

                            const password = e.target.value
                            setUserAuthState({ ...userAuthState, ...{ password } })

                        }}
                    />



                    {headerText === 'REGISTER' ?
                        <>
                            <TextField
                                style={{ width: '100%', marginBottom: 15 }}

                                id="outlined-flexible"
                                label="mobile number"
                                type={'text'}
                                required
                                value={userAuthState?.phone}
                                onChange={(e) => {

                                    const phone = e.target.value
                                    setUserAuthState({ ...userAuthState, ...{ phone } })

                                }}
                            />


                            <select name='Position'
                                className="authenticate-input"

                                onChange={(e) => {
                                    const role = e.target.value
                                    setUserRole(role)
                                    setUserAuthState({ ...userAuthState, ...{ role } })
                                }}
                                margin="normal"
                            >
                                <option defaultValue='buyer'>Select role</option>
                                <option key='1' value='buyer'>Buyer</option>
                                <option key='2' value='seller'>Seller</option>



                            </select>

                            {userRole === 'seller' ?
                                <>

                                    <TextField
                                        style={{ width: '100%', marginBottom: 15 }}

                                        id="outlined-flexible"
                                        label="lastname"
                                        type={'text'}
                                        required
                                        value={userAuthState?.lastname}
                                        onChange={(e) => {

                                            const lastname = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ lastname } })

                                        }}
                                    />
                                    <TextField
                                        style={{ width: '100%', marginBottom: 15 }}

                                        id="outlined-flexible"
                                        label="firstname"
                                        type={'text'}
                                        required
                                        value={userAuthState?.firstname}
                                        onChange={(e) => {

                                            const firstname = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ firstname } })

                                        }}
                                    />
                                    <TextField
                                        style={{ width: '100%', marginBottom: 15 }}

                                        id="outlined-flexible"
                                        label="lastname"
                                        type={'text'}
                                        required
                                        value={userAuthState?.middlename}
                                        onChange={(e) => {

                                            const middlename = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ middlename } })

                                        }}
                                    />
                                    <TextField
                                        style={{ width: '100%', marginBottom: 15 }}

                                        id="outlined-flexible"
                                        label="lastname"
                                        type={'text'}
                                        required
                                        value={userAuthState?.brandname}
                                        onChange={(e) => {

                                            const brandname = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ brandname } })

                                        }}
                                    />
                                    <TextField
                                        style={{ width: '100%', marginBottom: 15 }}

                                        id="outlined-flexible"
                                        label="phoneNumber1"
                                        required
                                        value={userAuthState?.phoneNumber1}
                                        onChange={(e) => {

                                            const phoneNumber1 = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ phoneNumber1 } })


                                        }}
                                    />
                                    <TextField
                                        style={{ width: '100%', marginBottom: 15 }}

                                        id="outlined-flexible"
                                        label="phoneNumber 2"
                                        value={userAuthState?.phoneNumber1}
                                        onChange={(e) => {

                                            const phoneNumber2 = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ phoneNumber2 } })

                                        }}
                                    />

                                    <TextField
                                        style={{ width: '100%', marginBottom: 15 }}

                                        id="outlined-multiline-flexible"
                                        label="address"
                                        required
                                        multiline
                                        maxRows={4}
                                        value={userAuthState?.address}
                                        onChange={(e) => {

                                            const address = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ address } })


                                        }}
                                    />






                                </>
                                : null

                            }
                        </>

                        : null
                    }
                    <div className='submit-div'>

                        <input type='submit' className='authenticate-submit' />
                    </div>
                </form>
            </div>
        </div >

    )
}

const mapStateToProps = (state) => {
    return {
        user: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (loginState, navigate) => {
            dispatch(LoginAction(loginState, navigate))

        },
        register: (registerState, navigate) => {
            dispatch(RegisterAction(registerState, navigate))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
