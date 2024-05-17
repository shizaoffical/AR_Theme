import React from 'react'
import { Link } from 'react-router-dom'

function LatestNewsCard(props) {
    return (
        <div className='latest-news-card'>
                <img src={props.image} alt="No image" />
            <div className='latest-news-card-inner'>
                <div>
                    <h4 className='latest-news-card-inner-h'>Blog Title  Here</h4>
                    <p className='latest-news-card-inner-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum hic animi, quidem asperiores non adipisci odit quis consectetur blanditiis praesentium, obcaecati, ut expedita earum culpa in sed iure eos repellendus!</p>
                </div>
                <Link className='latest-news-card-inner-a'> Read More</Link>
            </div>
        </div>
    )
}

export default LatestNewsCard