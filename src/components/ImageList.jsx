import React from 'react';
// import images from '../Data/ImageGalary'
import ImageItem from "./ImageItem";
import _ from "lodash";

export default class ImageList extends React.Component {
    render() {
        const sortImages = _.sortBy(this.props.images, ['data.num_comments']).reverse();

        return sortImages.length!==0 ? (
            <div className='row mt-4'>
                {sortImages.map(image => (
                    <div className='col-4 mb-4' key={image.data.id}>
                        <ImageItem item={image}/>
                    </div>
                ))}
            </div>
        ) : (<h1><b>Loading...</b></h1>)
    }
}