import React from 'react';
import images from '../Data/ImageGalary'
import ImageItem from "./ImageItem";

export default class ImageList extends React.Component {
    render() {
        return (
            <div className='row'>
                {images.map(image => (
                    <div className='mb-2' key={image.link}>
                        <ImageItem item={image}/>
                    </div>
                ))}
            </div>
        )
    }
}