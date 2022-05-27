import React from 'react'
import './PostForm.css'
function PostForm() {
    return (
        <div className='post-ad-card'>
            <div className='post-ad-header'>
                <span>Post Ad</span>
            </div>

            <div className='steps'>
                <div className='step-1'>step1</div>
                <div className='step-2'>step2</div>
            </div>
            <div className='ad-info'>
                <form >
                    <div>
                        <input className='ad-input' type='text' placeholder='Vehicle Name' aria-label=' vehicle name' />
                        <input className='ad-input' type='text' placeholder='Vehicle Description' aria-label='vehicle description' />
                    </div>
                    <div>

                        <input className='ad-input' type='number' placeholder='Price' aria-label='Vehicle Price' />
                        <input className='ad-input' type='text' placeholder='vehicle location' aria-label=' vehicle location' />
                    </div>
                    <input type='submit' value='Next' />
                </form>
            </div>
        </div>
    )
}

export default PostForm