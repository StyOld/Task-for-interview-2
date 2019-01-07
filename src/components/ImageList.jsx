import React from 'react';
// import images from '../Data/ImageGalary'
import ImageItem from "./ImageItem";
import _ from "lodash";

export default class ImageList extends React.Component {
    render() {
        const {imageList, sliderValue}=this.props;
        const sortImages = _.sortBy(imageList, ['data.num_comments']).reverse().filter(item => item.data.num_comments>=sliderValue);

        return sortImages.length!==0 ? (
            <div className='row mt-4'>
                {sortImages.map(image => (
                    <div className='col-4 mb-2' key={image.data.id}>
                        <ImageItem item={image}/>
                    </div>
                ))}
            </div>
        ) : (
            <h2><b>No results found matching your criteria</b></h2>
        )
    }
}