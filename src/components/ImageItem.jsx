import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        const {item} = this.props;

        return (
            <div className='card'>
                <img
                    className="card-img-top img--height"
                    src={item.data.thumbnail}
                    alt=""/>
                <div className='card-body'>
                    <b><h5>{item.data.title}</h5></b>
                    <p>Number of contacts: {item.data.num_comments}</p>
                    <a href={`https://www.reddit.com${item.data.permalink}`} target='_blank'>Link</a>
                </div>
            </div>
        )
    }
}