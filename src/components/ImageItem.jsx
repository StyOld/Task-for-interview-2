import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        const {item} = this.props;

        return (
            <div className='card'>
                <img
                    className='card-img-top'
                    src={item.url}
                    alt=""/>
                <strong><h5>{item.title}</h5></strong>
                <a href={item.link}>Link</a>
            </div>
        )
    }
}