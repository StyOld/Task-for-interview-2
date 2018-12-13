import React from 'react';
import images from '../Data/ImageGalary'
import ImageItem from "./ImageItem";

export default class ImageList extends React.Component {
    render() {
        return (
            <div className='row mt-4'>
                {images.map(image => (
                    <div className='col-4 mb-4' key={image.link}>
                        <ImageItem item={image}/>
                    </div>
                ))}
            </div>
        )
    }
}