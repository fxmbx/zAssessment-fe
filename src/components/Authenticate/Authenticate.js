import React, { useState } from 'react'
import Button from '../Button/Button'
import './authenticate.css'

import { LoginAction, RegisterAction } from '../../redux/actions/authAction'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
                    <span style={{ color: 'red', position: 'relative', flexDirection: 'row-reverse' }}>*</span>
                    {headerText === "REGISTER" ?
                        <input
                            aria-label='username input field'
                            type="text"
                            className="authenticate-input"
                            placeholder="username"
                            required
                            onChange={(e) => {

                                const username = e.target.value
                                setUserAuthState({ ...userAuthState, ...{ username } })

                            }}
                        />
                        : null}
                    <span style={{ color: 'red' }}>*</span>

                    <input
                        aria-label='Email input field'
                        type="email"
                        required
                        className="authenticate-input"
                        placeholder="email"
                        onChange={(e) => {

                            const email = e.target.value
                            setUserAuthState({ ...userAuthState, ...{ email } })

                        }}
                    />
                    <span style={{ color: 'red' }}>*</span>
                    <input
                        type="password"
                        required
                        className="authenticate-input"
                        placeholder="password"
                        onChange={(e) => {

                            const password = e.target.value
                            setUserAuthState({ ...userAuthState, ...{ password } })

                        }}
                    />
                    {headerText === 'REGISTER' ?
                        <>
                            <span style={{ color: 'red' }}>*</span>
                            <input
                                type="text"
                                required
                                className="authenticate-input"
                                placeholder="mobile number"
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
                                    <span style={{ color: 'red' }}>*</span>
                                    <input
                                        type="text"
                                        className="authenticate-input"
                                        placeholder="LastName"
                                        required
                                        onChange={(e) => {

                                            const lastname = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ lastname } })

                                        }}
                                    />
                                    <span style={{ color: 'red' }}>*</span>
                                    <input
                                        type="text"
                                        className="authenticate-input"
                                        placeholder="FirstName"
                                        required
                                        onChange={(e) => {

                                            const firstname = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ firstname } })

                                        }}
                                    />
                                    <span style={{ color: 'red' }}>*</span>
                                    <input
                                        type="text"
                                        required

                                        className="authenticate-input"
                                        placeholder="MiddleName"
                                        onChange={(e) => {

                                            const middlename = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ middlename } })

                                        }}
                                    />
                                    <span style={{ color: 'red' }}>*</span>
                                    <input
                                        type="text"
                                        required

                                        className="authenticate-input"
                                        placeholder="Brandname"
                                        onChange={(e) => {

                                            const brandname = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ brandname } })

                                        }}
                                    />
                                    <span style={{ color: 'red' }}>*</span>
                                    <input
                                        type="text"
                                        required
                                        className="authenticate-input"
                                        placeholder="Phone number 1"
                                        onChange={(e) => {

                                            const phoneNumber1 = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ phoneNumber1 } })


                                        }}
                                    />
                                    <span style={{ color: 'red' }}>*</span>
                                    <input
                                        type="text"
                                        className="authenticate-input"
                                        placeholder="Phone number 2"
                                        onChange={(e) => {

                                            const phoneNumber2 = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ phoneNumber2 } })

                                        }}
                                    />
                                    <span style={{ color: 'red' }}>*</span>
                                    <input
                                        type="text"
                                        required
                                        className="authenticate-input"
                                        placeholder="address"
                                        onChange={(e) => {

                                            const address = e.target.value
                                            setSellerAuthState({ ...sellerAuthState, ...{ address } })


                                        }}
                                    />
                                </>
                                : null

                            }
                        </>

                        : null}
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
