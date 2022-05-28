import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
function CardItem(props) {
    return (
        <React.Fragment key={props.key}>
            <li className='cards__item' >
                <Link className='cards__item__link' onClick={props.onPress} to={props?.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={`https://desolate-badlands-96338.herokuapp.com/${props.src}`} className='cards__item__img' />
                    </figure>

                    <div className='cards__item__info'>
                        <h5 className='cards__item__text' >{props.title}</h5>
                        <h2 className='cards__item__text' >{props.text}</h2>
                    </div>
                </Link>
            </li>
        </React.Fragment>
    )
}

export default CardItem
