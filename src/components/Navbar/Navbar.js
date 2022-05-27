import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Navbar.css';
import { LogOutAction } from '../../redux/actions/authAction'


function Navbar(props) {
    const { auth, logout } = props
    console.log("this is  auth", auth)
    const navigate = useNavigate()
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        zSolutons Assessment<i className="fab fa-angellist" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/postad'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        {auth.isLogged &&
                            <li className='nav-item' onClick={() => {
                                logout(navigate)
                            }}>
                                <Link
                                    to='/'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Logout
                                </Link>
                            </li>
                        }
                        {!auth.isLogged &&
                            <>
                                <li className='nav-item'>
                                    <Link
                                        to='/login'
                                        className='nav-links'
                                        onClick={closeMobileMenu}
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/register'
                                        className='nav-links-mobile'
                                        onClick={closeMobileMenu}
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        }
                    </ul>
                    {/* {! && } */}
                    {button && !auth.isLogged && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

                </div>
            </nav>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (navigate) => {
            dispatch(LogOutAction(navigate))
        },


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
