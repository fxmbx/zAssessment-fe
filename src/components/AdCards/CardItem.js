import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
function CardItem(props) {
    return (
        <>
            <li className='cards__item' key={props.key}>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={`http://localhost:7000/uploads/${props.src}`} className='cards__item__img' />
                    </figure>

                    <div className='cards__item__info'>
                        <h5 className='cards__item__text' >{props.title}</h5>
                        <h2 className='cards__item__text' >{props.text}</h2>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
