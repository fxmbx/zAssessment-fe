import React from 'react'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out the maps </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src=''
                            text='Explore the capital buidling of the Land of ooo. click to check out princess bubble gums secrets'
                            label='palace' path='/services'
                        />
                        <CardItem
                            src=''
                            text='Get to know the ins and outs of finn and jacks ...scratch that, marcelenes tree house oops you might not have known that '
                            label='tree house' path='/services'
                        />
                        <CardItem
                            src=''
                            text='True love? maybe this is where jake found the love of his life...click to knoe quick'
                            label='tree house' path='
                        /services'
                        />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src=''
                            text='Aventure day and night all day long '
                            label='treasure' path='/services'
                        />
                        <CardItem
                            src=''
                            text='Men are scum ptsd from this house. haave fun or not'
                            label='marcelene crib' path='/services'
                        />
                        <CardItem
                            src='/images/destination6.jpg'
                            text='rough house. how can a rock mountain be so hard yet so soft shame.'
                            label='rough house dreams' path='/services'
                        />
                        <CardItem
                            src='/images/adventuremap.jpg'
                            text='Explore the mythical and magical kingdom of ooo'
                            label='map of ooo' path='/services'
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
