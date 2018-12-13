import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        const {item} = this.props;

        return (
            <div className='card'>
                <img
                    className="card-img-top"
                    src={item.url}
                    alt=""/>
                <div className='card-body'>
                    <b><h4>{item.title}</h4></b>
                    <p>Number of contacts: {item.number_of_comments}</p>
                    <a href={item.link}>Link</a>
                </div>
            </div>
        )
    }
}